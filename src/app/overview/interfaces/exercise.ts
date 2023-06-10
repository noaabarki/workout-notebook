import { EmomExercise, TabataExercise } from "../../../core/interfaces/exercises";

import { EmomActivityOptions } from "../../../core/interfaces";

export type Exercise = EmomExercise | TabataExercise;
export type ExerciseActivityOptions = Exercise["activityOptions"];
export type ExerciseActivityType = Exercise["activityType"];

export type ExerciseRounds = Exercise["rounds"];

export function isEmomExercise(exercise: Exercise | unknown): exercise is EmomExercise {
  return (exercise as Exercise).activityType === "emom";
}

export function isEmomActivityOptions(exercise: ExerciseActivityOptions | unknown): exercise is EmomActivityOptions {
  return (exercise as ExerciseActivityOptions) && (exercise as EmomActivityOptions).time !== undefined;
}

export function isTabataExercise(exercise: Exercise | unknown): exercise is TabataExercise {
  return (exercise as Exercise).activityType === "tabata";
}
