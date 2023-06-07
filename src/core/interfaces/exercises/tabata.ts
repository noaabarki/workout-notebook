

export interface TabataOptions {
  type: "tabata";
  count: number;
}

export interface TabataExercise {
  activity: TabataOptions;
  name: string;
  rounds: TabataRound[];
}

export interface TabataRound {
  name: string;
  reps: number;
  weight: number;
}

export function createNewTabataRound(): TabataRound {
  return {
    name: "",
    reps: 0,
    weight: 0,
  };
}

export function isTabataRound(round: TabataRound | unknown): round is TabataRound {
  return (round as TabataRound).name !== undefined && (round as TabataRound).reps !== undefined && (round as TabataRound).weight !== undefined;
}
