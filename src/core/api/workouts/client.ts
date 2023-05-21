import { EmomExercise } from "../../interfaces/emom";
import { TabataExercise } from "../../interfaces/tabata";

export type ExerciseApi = EmomExercise | TabataExercise;
export type WorkoutApi = {
  name: string;
  totalTime: number;
  exercises: ExerciseApi[];
};

type WorkoutActivity = { type: "workout" } & WorkoutApi;
type ExerciseActivity = { type: "exercise" } & ExerciseApi;
export type ActivityApi = WorkoutActivity | ExerciseActivity;

export async function getActivities(): Promise<ActivityApi[]> {
  await delay();
  return [
    {
      type: "workout",
      name: "Workout 1",
      totalTime: 8,
      exercises: [
        {
          name: "EMOM 1",
          activity: {
            type: "emom",
            time: 4,
          },
          rounds: [
            {
              kind: "Push ups",
              weight: 0,
              reps: 10,
            },
            {
              kind: "Pull ups",
              weight: 0,
              reps: 10,
            },
          ],
        },
        {
          name: "EMOM 2",
          activity: {
            type: "emom",
            time: 4,
          },
          rounds: [
            {
              kind: "Push ups",
              weight: 0,
              reps: 10,
            },
            {
              kind: "Pull ups",
              weight: 0,
              reps: 10,
            },
          ],
        },
        {
          name: "Tabata 1",
          activity: {
            type: "tabata",
            count: 8,
          },
          rounds: [
            {
              kind: "Push ups",
              weight: 0,
              reps: 10,
            },
          ],
        },
      ],
    },
  ];
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
