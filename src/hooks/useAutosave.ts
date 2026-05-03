import { useEffect, useRef } from "react";
import { PetState, PetType } from "../components/Pet/PetState";
import { syncService, SyncConflict } from "../services/syncService";

interface UseAutosaveProps {
  petType: PetType;
  state: PetState;
  onConflict: (conflict: SyncConflict) => void;
  onSyncSuccess?: () => void;
  onSyncError?: (error: Error) => void;
}

/**
 * Hook that automatically syncs pet data to the cloud
 * - Checks autosave toggle
 * - Syncs every 60 seconds if enabled
 * - Syncs immediately on user interaction (feed, pet, play, etc.)
 * - Triggers conflict modal on 409 response
 */
export function useAutosave({
  petType,
  state,
  onConflict,
  onSyncSuccess,
  onSyncError,
}: UseAutosaveProps) {
  const lastSyncStateRef = useRef<PetState | null>(null);
  const syncInProgressRef = useRef(false);

  // Sync when state changes significantly (after user action)
  useEffect(() => {
    if (!syncService.isAutosaveEnabled()) {
      return;
    }

    // Check if state has changed meaningfully
    const hasChanged =
      !lastSyncStateRef.current ||
      lastSyncStateRef.current.xp !== state.xp ||
      lastSyncStateRef.current.hunger !== state.hunger ||
      lastSyncStateRef.current.happiness !== state.happiness ||
      lastSyncStateRef.current.energy !== state.energy ||
      lastSyncStateRef.current.name !== state.name ||
      lastSyncStateRef.current.stage !== state.stage;

    if (!hasChanged) {
      return;
    }

    // Debounce syncs: don't sync too frequently
    const lastSync = syncService.getLastSyncTimestamp(petType);
    const now = Math.floor(Date.now() / 1000);
    if (now - lastSync < 10) {
      // Less than 10 seconds since last sync, skip
      return;
    }

    // Perform sync
    const performSync = async () => {
      if (syncInProgressRef.current) return;
      syncInProgressRef.current = true;

      try {
        const payload = {
          petType,
          state,
          lastUpdatedUnix: Math.floor(Date.now() / 1000),
        };

        await syncService.syncPet(payload);
        lastSyncStateRef.current = { ...state };
        onSyncSuccess?.();
      } catch (error: any) {
        if (error.petType) {
          // It's a SyncConflict
          onConflict(error as SyncConflict);
        } else {
          onSyncError?.(error as Error);
        }
      } finally {
        syncInProgressRef.current = false;
      }
    };

    performSync();
  }, [state, petType, onConflict, onSyncSuccess, onSyncError]);

  // Periodic sync every 60 seconds if autosave is enabled
  useEffect(() => {
    if (!syncService.isAutosaveEnabled()) {
      return;
    }

    const interval = setInterval(async () => {
      if (syncInProgressRef.current) return;
      syncInProgressRef.current = true;

      try {
        const lastSync = syncService.getLastSyncTimestamp(petType);
        const now = Math.floor(Date.now() / 1000);

        // Only sync if it's been more than 60 seconds since last sync
        if (now - lastSync >= 60) {
          const payload = {
            petType,
            state,
            lastUpdatedUnix: now,
          };

          await syncService.syncPet(payload);
          lastSyncStateRef.current = { ...state };
          onSyncSuccess?.();
        }
      } catch (error: any) {
        if (error.petType) {
          onConflict(error as SyncConflict);
        } else {
          onSyncError?.(error as Error);
        }
      } finally {
        syncInProgressRef.current = false;
      }
    }, 60000); // Every 60 seconds

    return () => clearInterval(interval);
  }, [petType, state, onConflict, onSyncSuccess, onSyncError]);
}
