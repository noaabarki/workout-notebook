import { EmomExercise, EmomRound, TabataExercise, TabataRound } from "../../../core/interfaces";

import { Exercise } from "./../interfaces/exercise";
import { ExerciseActivityType } from "../interfaces/exercise";

export function newExercise(type: ExerciseActivityType): Exercise {
  switch (type) {
    case "tabata":
      return newTabataExercise();

    case "emom":
      return newEmomExercise();
    default:
      throw new Error(`Invalid exercise type: ${type}`);
  }
}

export function newEmomRound(): EmomRound {
  return {
    weight: 0,
    name: "",
    time: 0,
    reps: 0,
  };
}

export function newTabataRound(): TabataRound {
  return {
    name: "",
    weight: 0,
    reps: 0,
  };
}

function newTabataExercise(): TabataExercise {
  return {
    name: "",
    activityOptions: {
      count: 0,
    },
    activityType: "tabata",
    rounds: [],
  };
}

function newEmomExercise(): EmomExercise {
  return {
    name: "",
    activityOptions: {
      time: 0,
    },
    activityType: "emom",
    rounds: [],
  };
}
