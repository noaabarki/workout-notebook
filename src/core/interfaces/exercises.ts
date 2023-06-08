import { EmomActivityOptions, TabataActivityOptions } from "./activities";
import { EmomRound, TabataRound } from "./rounds";

interface BaseExercise {
  name: string;
}

export interface EmomExercise extends BaseExercise {
  activityType: "emom";
  activityOptions: EmomActivityOptions;
  rounds: EmomRound[];
}

export interface TabataExercise extends BaseExercise {
  activityType: "tabata";
  activityOptions: TabataActivityOptions;
  rounds: TabataRound[];
}
