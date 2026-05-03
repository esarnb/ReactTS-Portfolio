import { Modal, Button, Group, Text, Stack, Badge } from "@mantine/core";
import { PetState } from "./PetState";
import { SyncConflict } from "../../services/syncService";
import { getTimeAgo } from "./PetState";

interface SyncConflictModalProps {
  conflict: SyncConflict | null;
  loading?: boolean;
  onKeepLocal: () => Promise<void>;
  onDownloadCloud: () => void;
}

export function SyncConflictModal({
  conflict,
  loading = false,
  onKeepLocal,
  onDownloadCloud,
}: SyncConflictModalProps) {
  if (!conflict) return null;

  const getTimestampDisplay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const compareState = (local: PetState, cloud: PetState) => {
    const diffs: { label: string; local: string; cloud: string }[] = [];

    if (local.name !== cloud.name) {
      diffs.push({ label: "Name", local: local.name, cloud: cloud.name });
    }
    if (local.xp !== cloud.xp) {
      diffs.push({ label: "XP", local: `${local.xp}`, cloud: `${cloud.xp}` });
    }
    if (local.stage !== cloud.stage) {
      diffs.push({
        label: "Stage",
        local: local.stage.toUpperCase(),
        cloud: cloud.stage.toUpperCase(),
      });
    }
    if (Math.floor(local.hunger) !== Math.floor(cloud.hunger)) {
      diffs.push({
        label: "Hunger",
        local: `${Math.floor(local.hunger)}%`,
        cloud: `${Math.floor(cloud.hunger)}%`,
      });
    }
    if (Math.floor(local.happiness) !== Math.floor(cloud.happiness)) {
      diffs.push({
        label: "Happiness",
        local: `${Math.floor(local.happiness)}%`,
        cloud: `${Math.floor(cloud.happiness)}%`,
      });
    }
    if (Math.floor(local.energy) !== Math.floor(cloud.energy)) {
      diffs.push({
        label: "Energy",
        local: `${Math.floor(local.energy)}%`,
        cloud: `${Math.floor(cloud.energy)}%`,
      });
    }

    return diffs;
  };

  const diffs = compareState(conflict.localState, conflict.cloudState);

  return (
    <Modal
      opened={conflict !== null}
      onClose={() => {}}
      title="Sync Conflict Detected ⚠️"
      centered
      closeButtonProps={{ disabled: loading }}
    >
      <Stack spacing="md">
        <Text size="sm" c="dimmed">
          Your pet data differs on this device and the cloud. Which version would you like to keep?
        </Text>

        {/* Local Data */}
        <div style={{ padding: "12px", backgroundColor: "rgba(76, 175, 80, 0.1)", borderRadius: "8px" }}>
          <Group justify="space-between" mb="xs">
            <Badge color="green" variant="dot">
              Local Device
            </Badge>
            <Text size="xs" c="dimmed">
              {getTimestampDisplay(conflict.localTimestamp)}
            </Text>
          </Group>
          {diffs.length > 0 ? (
            <Stack gap="xs" style={{ fontSize: "0.85rem" }}>
              {diffs.map((diff) => (
                <div key={diff.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{diff.label}:</span>
                  <strong style={{ color: "#2ecc40" }}>{diff.local}</strong>
                </div>
              ))}
            </Stack>
          ) : (
            <Text size="xs">Same as cloud</Text>
          )}
        </div>

        {/* Cloud Data */}
        <div style={{ padding: "12px", backgroundColor: "rgba(52, 152, 219, 0.1)", borderRadius: "8px" }}>
          <Group justify="space-between" mb="xs">
            <Badge color="blue" variant="dot">
              Cloud (Server)
            </Badge>
            <Text size="xs" c="dimmed">
              {getTimestampDisplay(conflict.cloudTimestamp)}
            </Text>
          </Group>
          {diffs.length > 0 ? (
            <Stack gap="xs" style={{ fontSize: "0.85rem" }}>
              {diffs.map((diff) => (
                <div key={diff.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{diff.label}:</span>
                  <strong style={{ color: "#3498db" }}>{diff.cloud}</strong>
                </div>
              ))}
            </Stack>
          ) : (
            <Text size="xs">Same as local</Text>
          )}
        </div>

        {/* Action Buttons */}
        <Group grow>
          <Button
            variant="default"
            onClick={onDownloadCloud}
            loading={loading}
            color="blue"
            leftSection="📥"
          >
            Download Cloud Data
          </Button>
          <Button
            onClick={onKeepLocal}
            loading={loading}
            color="green"
            leftSection="💾"
          >
            Keep Local Data
          </Button>
        </Group>

        <Text size="xs" c="dimmed" ta="center">
          If this keeps happening, you may have unsaved changes from another device.
        </Text>
      </Stack>
    </Modal>
  );
}
