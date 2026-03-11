import type { ChatState } from '../types';

const STORAGE_KEY = 'nexlab_chat_state';

export const saveState = (state: ChatState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
};

export const loadState = (): ChatState | undefined => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : undefined;
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
    return undefined;
  }
};

export const clearState = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
