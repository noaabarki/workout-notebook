import { EmomExercise } from "../../../core/interfaces/emom";
import { TabataExercise } from "../../../core/interfaces/tabata";

export type Exercise = EmomExercise | TabataExercise;

export class Workout {
  name: string;
  totalTimeInMinutes: number;
  exercises: Exercise[];
  description?: string;

  constructor(name: string, totalTime: number, exercises: Exercise[]) {
    this.name = name;
    this.totalTimeInMinutes = totalTime;
    this.exercises = exercises;
    this.description = this.buildDescription(exercises);
  }

  private buildDescription(exercises: Exercise[]) {
    const exercisesSummary = exercises.map((exercise) => {
      const exercisesNames = exercise.rounds.map((round) => round.name).join(" and ");

      switch (exercise.activity.type) {
        case "emom":
          return `${exercise.activity.time}${exercise.activity.type} * ${exercise.rounds.length} of ${exercisesNames}`;
        case "tabata":
          return `${exercise.activity.count} ${exercise.activity.type}`;
        default:
          return "";
      }
    });

    return exercisesSummary.join(", ");
  }
}
