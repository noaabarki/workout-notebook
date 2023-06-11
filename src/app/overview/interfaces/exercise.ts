import { EmomActivityOptions, EmomRound, TabataActivityOptions, TabataRound } from "../../../core/interfaces";
import { EmomExercise, TabataExercise } from "../../../core/interfaces/exercises";

export type Exercise = EmomExercise | TabataExercise;
export type ExerciseActivityOptions = Exercise["activityOptions"];
export type ExerciseActivityType = Exercise["activityType"];

export type ExerciseRound = EmomRound | TabataRound;

export function isEmomExercise(exercise: Exercise | unknown): exercise is EmomExercise {
  return (exercise as Exercise).activityType === "emom";
}

export function isEmomActivityOptions(opts: ExerciseActivityOptions | unknown): opts is EmomActivityOptions {
  return (opts as EmomActivityOptions).time !== undefined;
}

export function isEmomRound(round: ExerciseRound | unknown): round is EmomRound {
  return (
    !!(round as EmomRound).name &&
    !!(round as EmomRound).weight &&
    (!!(round as EmomRound).reps || !!(round as EmomRound).time)
  );
}

export function isTabataExercise(exercise: Exercise | unknown): exercise is TabataExercise {
  return (exercise as Exercise).activityType === "tabata";
}

export function isTabataActivityOptions(opts: ExerciseActivityOptions | unknown): opts is TabataActivityOptions {
  return (opts as TabataActivityOptions).count !== undefined;
}
