import { EmomExercise, TabataExercise } from "../../../core/interfaces/exercises";

export type Exercise = EmomExercise | TabataExercise;
export type ExerciseActivity = Exercise['activity']
export type ExerciseActivityType = ExerciseActivity['type']

export type ExerciseRounds = Exercise['rounds']