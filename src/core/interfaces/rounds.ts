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

export function createNewEmomRound(): EmomRound {
  return {
    name: "",
    weight: 0,
    reps: 0,
    time: 0,
  };
}

export function isEmomRound(round: EmomRound | unknown): round is EmomRound {
  return (
    (round as EmomRound).name !== undefined &&
    (round as EmomRound).weight !== undefined &&
    ((round as EmomRound).reps !== undefined || (round as EmomRound).time !== undefined)
  );
}

export function isTabataRound(round: TabataRound | unknown): round is TabataRound {
  return (
    (round as TabataRound).name !== undefined &&
    (round as TabataRound).reps !== undefined &&
    (round as TabataRound).weight !== undefined
  );
}

export function createNewTabataRound(): TabataRound {
  return {
    name: "",
    reps: 0,
    weight: 0,
  };
}
