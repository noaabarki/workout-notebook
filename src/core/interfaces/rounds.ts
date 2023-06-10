export interface AmrapRound {
  name: string;
  reps: number;
  weight: number;
}

export interface EmomRound {
  name: string;
  weight: number;
  reps?: number;
  time?: number;
}

export interface TabataRound {
  name: string;
  reps: number;
  weight: number;
}

export interface SetsRound {
  name: string;
  reps: number;
  weight: number;
}
