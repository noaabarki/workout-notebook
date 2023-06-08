import { Exercise } from "./exercise";

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

      switch (exercise.activityType) {
        case "emom":
          return `${exercise.activityOptions.time}emom * ${exercise.rounds.length} of ${exercisesNames}`;
        case "tabata":
          return `${exercise.activityOptions.count} tabata`;
        default:
          return "";
      }
    });

    return exercisesSummary.join(", ");
  }
}
