import { ExerciseAccordion } from "../exercise-accordion/ExerciseAccordion";
import { Modal } from "../../../shared/components/Modal";
import { Workout } from "../../interfaces/workout";
import styled from "styled-components";

export const WorkoutDetails = (props: { workout: Workout; isOpen: boolean; onClose: () => void }) => {
  const { workout, isOpen, onClose } = props;
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader>
          <h2>{workout.name}</h2>
        </ModalHeader>
        {workout.exercises.map((exercise, i) => (
          <ExerciseAccordion key={i} exercise={exercise} expanded={i === 0} />
        ))}
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  width: 600px;
  height: 600px;
  overflow-y: scroll;
  background-color: var(--color-gray-100);
  padding: var(--spacing-3);
`;

const ModalHeader = styled.div`
  padding: var(--spacing-3) 0;
`;
