import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Modal } from "../../../shared/components/Modal";
import { Exercise, Workout } from "../../interfaces/workout";
import styled from "styled-components";
import { Subtitle, Title } from "../../../shared/components/Title";
import { Input } from "../../../shared/components/Input";

export const WorkoutDetails = (props: { workout: Workout; isOpen: boolean; onClose: () => void }) => {
  const { workout, isOpen, onClose } = props;
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader>
          <h2>{workout.name}</h2>
        </ModalHeader>
        {workout.exercises.map((exercise, i) => (
          <ExerciseAccordion key={i} exercise={exercise} />
        ))}
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  min-width: 500px;
  min-height: 500px;
  overflow-y: scroll;
  background-color: var(--color-gray-100);
  padding: var(--spacing-3);
`;

const ModalHeader = styled.div`
  padding: var(--spacing-3) 0;
`;

const ExerciseAccordion = (props: { exercise: Exercise }) => {
  const { exercise } = props;

  return (
    <Accordion style={exerciseAccordionStyle}>
      {/* Exercise Accordion Header */}
      <AccordionSummary expandIcon={<MdExpandMore />} id="panel1a-header" style={exerciseAccordionSummaryStyle}>
        <ExerciseAccordionSummaryWrapper>
          <div className="centered">
            <ExerciseIcon />
          </div>
          <ExerciseName>{exercise.name}</ExerciseName>
          <ExerciseDescription>Create an exercise and add it to your workout</ExerciseDescription>
        </ExerciseAccordionSummaryWrapper>
      </AccordionSummary>

      {/* Exercise Accordion Detail */}
      <AccordionDetails style={accordionDetailsStyle}>
        {/* Exercise Name */}
        <ExerciseDetailsSection className="row">
          <ExerciseDetailsLabel>Name</ExerciseDetailsLabel>
          <Input type="text" value={exercise.name} onChange={() => {}} />
        </ExerciseDetailsSection>

        {/* Exercise Kind */}
        <ExerciseDetailsSection className="column">
          <ExerciseDetailsLabel>Kind</ExerciseDetailsLabel>
          <ExerciseDetailsLabelDescription>Choose the Kind of the exercise</ExerciseDetailsLabelDescription>
          <Box>
            <ExerciseDetailsGroup className="row">
              <ExerciseDetailsLabel>Kind</ExerciseDetailsLabel>
              {/* Exercise Kind types */}
              <ExerciseDetailsGroup className="row">
                <ExerciseType>
                  <label htmlFor="emom">Emom</label>
                  <input type="radio" id="emom" name="emom" value="emom" />
                </ExerciseType>
                <ExerciseType>
                  <label htmlFor="tabata">Tabata</label>
                  <input type="radio" id="tabata" name="tabata" value="tabata" />
                </ExerciseType>
              </ExerciseDetailsGroup>
            </ExerciseDetailsGroup>

            {/* Exercise Time */}
            <ExerciseDetailsGroup className="row">
              <ExerciseDetailsLabel>Time</ExerciseDetailsLabel>
              {exercise.activity.type === "emom" && (
                <Input type="text" value={exercise.activity.time.toString()} onChange={() => {}} />
              )}
            </ExerciseDetailsGroup>
          </Box>
        </ExerciseDetailsSection>

        {/* Exercise Rounds */}
        <ExerciseDetailsSection className="column">
          <ExerciseDetailsLabel>Rounds</ExerciseDetailsLabel>
          <ExerciseDetailsLabelDescription>Describe the rounds of your exercise</ExerciseDetailsLabelDescription>
          <Box></Box>
        </ExerciseDetailsSection>
      </AccordionDetails>
    </Accordion>
  );
};

const exerciseAccordionStyle: React.CSSProperties = {
  boxShadow: "none",
};

const exerciseAccordionSummaryStyle: React.CSSProperties = {
  display: "flex",
  gap: "var(--spacing-1)",
  alignItems: "baseline",
};

const ExerciseAccordionSummaryWrapper = styled.div`
  display: grid;
  grid-template-areas: "icon name" "icon description";
  gap: var(--spacing-1);
`;

const ExerciseName = styled(Title)`
  font-weight: 600;
  text-transform: none;
  margin: 0;
  grid-area: name;
`;

const ExerciseDescription = styled(Subtitle)`
  font-weight: 400;
  grid-area: description;
  font-size: smaller;
`;

const ExerciseIcon = styled(FiHeart)`
  grid-area: icon;
`;

const accordionDetailsStyle = {
  backgroundColor: "var(--color-white-2)",
};

const ExerciseDetailsGroup = styled.div`
  display: flex;
  gap: var(--spacing-1);

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
    align-items: center;
  }
`;

const ExerciseDetailsSection = styled(ExerciseDetailsGroup)`
  margin: var(--spacing-4) 0;
`;

const ExerciseDetailsLabel = styled.span`
  font-weight: 600;
`;

const ExerciseDetailsLabelDescription = styled.span`
  font-weight: 400;
  font-size: smaller;
`;

const Box = styled.div`
  background-color: var(--color-white-1);
  padding: var(--spacing-3) var(--spacing-1);
  border-radius: 5px;
`;

const ExerciseType = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;
