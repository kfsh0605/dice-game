export type Direction = 'over' | 'under';

export type GameStatus = 'idle' | 'win' | 'lose';

export interface HistoryEntry {
  id: string;
  time: string;
  direction: Direction;
  threshold: number;
  result: number;
  status: 'win' | 'lose';
}

export interface GameState {
  threshold: number;
  direction: Direction;
  result: number | null;
  status: GameStatus;
  history: HistoryEntry[];
}
