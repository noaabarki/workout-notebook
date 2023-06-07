export interface EmomOptions {
  type: "emom";
  time: number;
}

export interface EmomExercise {
  activity: EmomOptions;
  name: string;
  rounds: EmomRound[];
}

interface EmomRound {
  name: string;
  weight: number;
  reps?: number;
  time?: number;
}


export function isEmomActivity(activity: EmomOptions | unknown): activity is EmomOptions {
  return (activity as EmomOptions).type && (activity as EmomOptions).time !== undefined; 
}

export function isEmomRound(round: EmomRound | unknown): round is EmomRound {
  return (round as EmomRound).name !== undefined && (round as EmomRound).weight !== undefined && ((round as EmomRound).reps !== undefined || (round as EmomRound).time !== undefined);
}