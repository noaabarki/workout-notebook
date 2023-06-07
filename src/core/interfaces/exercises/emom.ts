export interface EmomOptions {
  type: "emom";
  time: number;
}

export interface EmomExercise {
  activity: EmomOptions;
  name: string;
  rounds: EmomRound[];
}

export interface EmomRound {
  name: string;
  weight: number;
  reps?: number;
  time?: number;
}

export function createNewEmomRound(): EmomRound {
  return {
    name: "",
    weight: 0,
    reps: 0,
    time: 0,
  };
}

export function isEmomActivity(activity: EmomOptions | unknown): activity is EmomOptions {
  return (activity as EmomOptions).type && (activity as EmomOptions).time !== undefined; 
}

export function isEmomRound(round: EmomRound | unknown): round is EmomRound {
  return (round as EmomRound).name !== undefined && (round as EmomRound).weight !== undefined && ((round as EmomRound).reps !== undefined || (round as EmomRound).time !== undefined);
}