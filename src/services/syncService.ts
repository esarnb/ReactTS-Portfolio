import { PetState, PetType } from "../components/Pet/PetState";

const API_BASE = "https://api.esarnb.com/api";

export interface SyncPayload {
  petType: PetType;
  state: PetState;
  lastUpdatedUnix: number;
  force?: boolean;
}

export interface SyncResponse {
  success: boolean;
  data?: PetState;
  serverLastUpdatedUnix?: number;
  cloudData?: PetState;
}

export interface SyncConflict {
  petType: PetType;
  localState: PetState;
  cloudState: PetState;
  localTimestamp: number;
  cloudTimestamp: number;
}

export const syncService = {
  /**
   * Get the last sync timestamp for a pet type
   */
  getLastSyncTimestamp(petType: PetType): number {
    const key = `pet_sync_${petType}`;
    const stored = localStorage.getItem(key);
    return stored ? parseInt(stored, 10) : 0;
  },

  /**
   * Save the last sync timestamp for a pet type
   */
  saveLastSyncTimestamp(petType: PetType, timestamp: number): void {
    const key = `pet_sync_${petType}`;
    localStorage.setItem(key, timestamp.toString());
  },

  /**
   * Check if autosave is enabled
   */
  isAutosaveEnabled(): boolean {
    const enabled = localStorage.getItem("autosave_enabled");
    return enabled !== "false"; // default to true
  },

  /**
   * Toggle autosave
   */
  setAutosaveEnabled(enabled: boolean): void {
    localStorage.setItem("autosave_enabled", enabled ? "true" : "false");
  },

  /**
   * Sync pet data with the VPS
   * Returns { success: true } on 200
   * Throws SyncConflict on 409
   * Throws error on other failures
   */
  async syncPet(payload: SyncPayload): Promise<SyncResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(`${API_BASE}/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (response.status === 200) {
        const data = await response.json();
        syncService.saveLastSyncTimestamp(payload.petType, payload.lastUpdatedUnix);
        return {
          success: true,
          data: data.state || payload.state,
        };
      }

      if (response.status === 409) {
        const data = await response.json();
        const cloudData = data.cloudData as PetState;
        const cloudTimestamp = data.serverLastUpdatedUnix as number;

        throw {
          petType: payload.petType,
          localState: payload.state,
          cloudState: cloudData,
          localTimestamp: payload.lastUpdatedUnix,
          cloudTimestamp: cloudTimestamp,
        } as SyncConflict;
      }

      return { success: false };
    } catch (error: any) {
      if (error instanceof TypeError && error.name === "AbortError") {
        throw new Error("Sync request timeout");
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  },

  /**
   * Force sync by overwriting server data
   */
  async forceSyncPet(payload: SyncPayload): Promise<SyncResponse> {
    const forcePayload = { ...payload, force: true };
    return syncService.syncPet(forcePayload);
  },

  /**
   * Get the latest data from the server for a pet type
   */
  async getCloudData(petType: PetType): Promise<{ state: PetState; timestamp: number } | null> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(`${API_BASE}/sync/${petType}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });

      if (response.status === 200) {
        const data = await response.json();
        return {
          state: data.state,
          timestamp: data.lastUpdatedUnix,
        };
      }

      if (response.status === 404) {
        return null;
      }

      throw new Error(`Unexpected response status: ${response.status}`);
    } catch (error: any) {
      if (error instanceof TypeError && error.name === "AbortError") {
        throw new Error("Sync request timeout");
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  },
};
