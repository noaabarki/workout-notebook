import { Exercise } from "../interfaces/exercise";
import { ExerciseAccordion } from "./ExerciseAccordion";
import { Modal } from "../../shared/components/Modal";
import { SaveButton } from "../../shared/components/Button";
import { Workout } from "../entities/workout";
import styled from "styled-components";

interface WorkoutDetailsModalProps {
  workout: Workout;
  isOpen: boolean;
  onClose: () => void;
  onChange: (workout: Workout) => void;
}

export const WorkoutDetailsModal = (props: WorkoutDetailsModalProps) => {
  const { workout, isOpen, onClose } = props;

  const handleOnChangeExercise = (exercise: Exercise, index: number) => {
    const newExercises = [...workout.exercises];
    newExercises[index] = exercise;
    props.onChange(new Workout(workout.name, workout.totalTimeInMinutes, newExercises));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={workout.name}>
      <ModalWrapper>
        {workout.exercises.map((exercise, i) => (
          <ExerciseAccordion
            key={i}
            exercise={exercise}
            expanded={i === 0}
            onChange={(exercise) => handleOnChangeExercise(exercise, i)}
          />
        ))}
        <footer className="row centered">
          <SaveButton onClick={onClose} />
        </footer>
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  overflow-y: scroll;
  background-color: var(--color-gray-100);
  padding: var(--spacing-3);
`;
