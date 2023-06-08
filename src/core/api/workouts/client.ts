import { EmomExercise, TabataExercise } from "../../interfaces/exercises";

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
          name: "Emom 1",
          activityType: "emom",
          activityOptions: {
            time: 4,
          },
          rounds: [
            {
              name: "Push ups",
              weight: 0,
              reps: 10,
            },
            {
              name: "Pull ups",
              weight: 0,
              reps: 10,
            },
          ],
        },
        {
          name: "Emom 2",
          activityType: "emom",
          activityOptions: {
            time: 4,
          },
          rounds: [
            {
              name: "Push ups",
              weight: 0,
              reps: 10,
            },
            {
              name: "Pull ups",
              weight: 0,
              reps: 10,
            },
          ],
        },
        {
          name: "Tabata 1",
          activityType: "tabata",
          activityOptions: {
            count: 8,
          },
          rounds: [
            {
              name: "Push ups",
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
