import { CancelButton, SaveButton } from "../../../shared/components/Button";

import { Exercise } from "../../interfaces/exercise";
import { ExerciseAccordion } from "../exercise-accordion/ExerciseAccordion";
import { Modal } from "../../../shared/components/Modal";
import { Workout } from "../../interfaces/workout";
import styled from "styled-components";
import { useState } from "react";

interface WorkoutDetailsModalProps {
  workout: Workout;
  isOpen: boolean;
  onClose: () => void;
  onChange: (workout: Workout) => void;
}

export const WorkoutDetailsModal = (props: WorkoutDetailsModalProps) => {
  const [changed, setChanged] = useState<boolean>(false);
  const { workout, isOpen, onClose } = props;

  const handleOnClickCancel = () => {
    setChanged(false);
  };

  const handleOnClickSave = () => {
    setChanged(false);
  };

  const handleOnChangeExercise = (exercise: Exercise) => {
    setChanged(true);

    const index = workout.exercises.findIndex((e) => e === exercise);
    const newExercises = [...workout.exercises];
    newExercises[index] = exercise;
    props.onChange(new Workout(workout.name, workout.totalTimeInMinutes, newExercises));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={workout.name}>
      <ModalWrapper>
        {workout.exercises.map((exercise, i) => (
          <ExerciseAccordion key={i} exercise={exercise} expanded={i === 0} onChange={handleOnChangeExercise} />
        ))}
        {changed && (
          <SaveOrDicardActivityChanges className="row">
            <CancelButton onClick={handleOnClickCancel} />
            <SaveButton onClick={handleOnClickSave} />
          </SaveOrDicardActivityChanges>
        )}
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

const SaveOrDicardActivityChanges = styled.div`
  margin-left: auto;
`;
