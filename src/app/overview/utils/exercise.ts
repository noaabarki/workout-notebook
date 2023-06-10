import { EmomExercise, TabataExercise } from "../../../core/interfaces";
import { Exercise, isEmomExercise, isTabataExercise } from "../interfaces/exercise";

export function newTabataExercise(): TabataExercise {
  return {
    name: "",
    activityOptions: {
      count: 0,
    },
    activityType: "tabata",
    rounds: [],
  };
}

export function newEmomExercise(): EmomExercise {
  return {
    name: "",
    activityOptions: {
      time: 0,
    },
    activityType: "emom",
    rounds: [],
  };
}

export function addRound(exercise: Exercise): Exercise {
  if (isEmomExercise(exercise)) {
    const rounds = [
      ...exercise.rounds,
      {
        weight: 0,
        name: "",
        time: 0,
        reps: 0,
      },
    ];
    return { ...exercise, rounds };
  }

  if (isTabataExercise(exercise)) {
    const rounds = [
      ...exercise.rounds,
      {
        name: "",
        weight: 0,
        reps: 0,
      },
    ];
    return { ...exercise, rounds };
  }

  return exercise;
}
