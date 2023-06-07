export type EmomRound = {
  name: string;
  weight: number;
  reps: number;
  time?: number;
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


export function isEmomRound(round: EmomRound | unknown): round is EmomRound {
  return (round as EmomRound).name !== undefined && (round as EmomRound).weight !== undefined && (round as EmomRound).reps !== undefined;
}