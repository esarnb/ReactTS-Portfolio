export interface SavedAccount {
  username: string;
  lastLogin: number;
}

const CURRENT_USER_KEY = "pet_current_user";
const SAVED_ACCOUNTS_KEY = "pet_saved_accounts";
const MAX_SAVED = 10;

function _upsertSavedAccount(username: string): void {
  const accounts = authService.getSavedAccounts();
  const now = Math.floor(Date.now() / 1000);
  const idx = accounts.findIndex((a) => a.username === username);
  if (idx >= 0) {
    accounts[idx].lastLogin = now;
  } else {
    accounts.push({ username, lastLogin: now });
  }
  accounts.sort((a, b) => b.lastLogin - a.lastLogin);
  localStorage.setItem(
    SAVED_ACCOUNTS_KEY,
    JSON.stringify(accounts.slice(0, MAX_SAVED))
  );
}

export const authService = {
  getCurrentUser(): string | null {
    const val = localStorage.getItem(CURRENT_USER_KEY);
    return val && val.trim() ? val.trim() : null;
  },

  setCurrentUser(username: string): void {
    const trimmed = username.trim();
    localStorage.setItem(CURRENT_USER_KEY, trimmed);
    _upsertSavedAccount(trimmed);
  },

  getSavedAccounts(): SavedAccount[] {
    try {
      const raw = localStorage.getItem(SAVED_ACCOUNTS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  removeAccount(username: string): void {
    const filtered = authService
      .getSavedAccounts()
      .filter((a) => a.username !== username);
    localStorage.setItem(SAVED_ACCOUNTS_KEY, JSON.stringify(filtered));
    if (authService.getCurrentUser() === username) {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  },
};
