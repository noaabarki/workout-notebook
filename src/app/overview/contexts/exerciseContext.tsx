import { Exercise } from "../interfaces/exercise";
import React from "react";

export const ExerciseContext = React.createContext<Exercise | null>(null);

export const ExerciseProvider = (props: { exercise: Exercise; children: React.ReactNode }) => {
  const { exercise, children } = props;
  return <ExerciseContext.Provider value={exercise}>{children}</ExerciseContext.Provider>;
};

export const useExercise = () => {
  const exercise = React.useContext(ExerciseContext);
  if (!exercise) {
    throw new Error("useExercise must be used within an ExerciseProvider");
  }
  return exercise;
};
