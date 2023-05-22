export interface TabataRound {
  name: string;
  reps: number;
  weight: number;
}

export interface TabataOptions {
  type: "tabata";
  count: number;
}

export interface TabataExercise {
  activity: TabataOptions;
  name: string;
  rounds: TabataRound[];
}
