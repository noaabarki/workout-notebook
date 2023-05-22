export type EmomRound = {
  weight: number;
  name: string;
  time?: number;
  reps?: number;
};

export interface EmomOptions {
  type: "emom";
  time: number;
}

export interface EmomExercise {
  activity: EmomOptions;
  name: string;
  rounds: EmomRound[];
}
