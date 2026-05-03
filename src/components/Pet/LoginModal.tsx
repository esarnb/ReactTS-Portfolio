import { useState, useEffect } from "react";
import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  Text,
  Divider,
  ActionIcon,
} from "@mantine/core";
import { authService } from "../../services/authService";

interface LoginModalProps {
  mode: "initial" | "switch";
  onLogin: (username: string) => void;
  onClose?: () => void;
}

function formatLastLogin(unix: number): string {
  const date = new Date(unix * 1000);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function LoginModal({ mode, onLogin, onClose }: LoginModalProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [savedAccounts, setSavedAccounts] = useState(
    authService.getSavedAccounts()
  );

  useEffect(() => {
    setSavedAccounts(authService.getSavedAccounts());
  }, []);

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setError("Username cannot be empty");
      return;
    }
    authService.setCurrentUser(trimmed);
    onLogin(trimmed);
  };

  const handleSelectSaved = (username: string) => {
    authService.setCurrentUser(username);
    onLogin(username);
  };

  const handleDeleteAccount = (username: string, e: React.MouseEvent) => {
    e.stopPropagation();
    authService.removeAccount(username);
    setSavedAccounts(authService.getSavedAccounts());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Modal
      opened={true}
      onClose={mode === "switch" ? onClose : () => {}}
      title={mode === "initial" ? "Welcome" : "Switch Account"}
      centered
      closeButtonProps={{ disabled: mode === "initial" }}
    >
      <Stack gap="md">
        <TextInput
          label="Enter your username"
          placeholder="e.g. alice"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
            setError(null);
          }}
          error={error}
          onKeyDown={handleKeyDown}
          autoFocus
          maxLength={32}
        />

        <Button fullWidth onClick={handleSubmit}>
          Continue
        </Button>

        {savedAccounts.length > 0 && (
          <>
            <Divider label="or choose a saved account" labelPosition="center" />

            <Stack gap="xs">
              {savedAccounts.map((account) => (
                <Group
                  key={account.username}
                  gap="md"
                  justify="space-between"
                  p="xs"
                  style={{
                    border: "1px solid var(--mantine-color-gray-2)",
                    borderRadius: "var(--mantine-radius-sm)",
                    cursor: "pointer",
                    transition: "background-color 150ms ease",
                  }}
                  onClick={() => handleSelectSaved(account.username)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--mantine-color-gray-0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Text>{account.username}</Text>
                  <Group gap="xs">
                    <Text size="xs" c="dimmed">
                      {formatLastLogin(account.lastLogin)}
                    </Text>
                    <ActionIcon
                      size="xs"
                      color="red"
                      variant="subtle"
                      onClick={(e) =>
                        handleDeleteAccount(account.username, e)
                      }
                    >
                      ✕
                    </ActionIcon>
                  </Group>
                </Group>
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </Modal>
  );
}
