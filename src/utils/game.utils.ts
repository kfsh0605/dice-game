import type { Direction, GameStatus, HistoryEntry } from '@/types/game.types';

/** Returns a random integer between 1 and 100 inclusive */
export const rollDice = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};

/** Returns 'win' or 'lose' based on direction and threshold */
export const checkWin = (
  result: number,
  threshold: number,
  direction: Direction
): 'win' | 'lose' => {
  if (direction === 'over') {
    return result > threshold ? 'win' : 'lose';
  }
  return result < threshold ? 'win' : 'lose';
};

/** Formats a Date object to HH:MM:SS string */
export const formatTime = (date: Date): string => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

/** Builds a HistoryEntry after each game round */
export const buildHistoryEntry = (
  result: number,
  threshold: number,
  direction: Direction,
  status: 'win' | 'lose'
): HistoryEntry => ({
  id: crypto.randomUUID(),
  time: formatTime(new Date()),
  direction,
  threshold,
  result,
  status,
});

/** Returns lose message subtitle based on direction */
export const getLoseMessage = (direction: Direction): string => {
  return direction === 'over' ? 'Number was lower' : 'Number was higher';
};

/** Keeps only the latest maxSize items (newest first) */
export const limitHistory = (
  history: HistoryEntry[],
  maxSize = 10
): HistoryEntry[] => history.slice(0, maxSize);
