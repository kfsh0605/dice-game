import { useState, useCallback } from 'react';
import type { Direction, GameStatus, HistoryEntry } from '@/types/game.types';
import {
  rollDice,
  checkWin,
  buildHistoryEntry,
  limitHistory,
} from '@/utils/game.utils';

const MAX_HISTORY = 10;
const DEFAULT_THRESHOLD = 50;

interface UseDiceGameReturn {
  threshold: number;
  direction: Direction;
  result: number | null;
  status: GameStatus;
  history: HistoryEntry[];
  setThreshold: (value: number) => void;
  setDirection: (value: Direction) => void;
  handlePlay: () => void;
}

export const useDiceGame = (): UseDiceGameReturn => {
  const [threshold, setThreshold] = useState<number>(DEFAULT_THRESHOLD);
  const [direction, setDirection] = useState<Direction>('under');
  const [result, setResult] = useState<number | null>(null);
  const [status, setStatus] = useState<GameStatus>('idle');
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handlePlay = useCallback(() => {
    const rolled = rollDice();
    const roundStatus = checkWin(rolled, threshold, direction);
    const entry = buildHistoryEntry(rolled, threshold, direction, roundStatus);

    setResult(rolled);
    setStatus(roundStatus);
    setHistory((prev) => limitHistory([entry, ...prev], MAX_HISTORY));
  }, [threshold, direction]);

  return {
    threshold,
    direction,
    result,
    status,
    history,
    setThreshold,
    setDirection,
    handlePlay,
  };
};
