import { EmomExercise, TabataExercise } from "../../../core/interfaces";

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
