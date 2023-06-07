import { EmomExercise } from "../../../core/interfaces/emom";
import { TabataExercise } from "../../../core/interfaces/tabata";

export type Exercise = EmomExercise | TabataExercise;
export type ExerciseActivity = Exercise['activity']
export type ExerciseActivityType = ExerciseActivity['type']

export type ExerciseRounds = Exercise['rounds']