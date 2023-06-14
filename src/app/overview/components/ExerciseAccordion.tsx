import * as interfaces from "../interfaces/exercise";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CancelButton, SaveButton } from "../../shared/components/Button";
import { EmomRound, TabataRound } from "../../../core/interfaces";
import { Subtitle, Title } from "../../shared/components/Title";
import { newEmomRound, newExercise, newTabataRound } from "../utils/exercise";

import { EmomExerciseDetails } from "./exercise-details/EmomExerciseDetails";
import { ExerciseActivitiesRadio } from "./exercise-details/ExerciseActivitiesRadio";
import ExerciseDetails from "./exercise-details/ExerciseDetails";
import { ExerciseProvider } from "../contexts/exerciseContext";
import { FiHeart } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { TabataExerciseDetails } from "./exercise-details/TabataExerciseDetails";
import styled from "styled-components";
import { useState } from "react";

interface ExerciseAccordionProps {
  exercise: interfaces.Exercise;
  expanded: boolean;
  onChange: (exercise: interfaces.Exercise) => void;
}

export const ExerciseAccordion = (props: ExerciseAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(props.expanded);
  const [exercise, setExercise] = useState<interfaces.Exercise>(props.exercise);

  const handleOnChangeExerciseType = (type: interfaces.ExerciseActivityType) => {
    if (exercise.activityType !== type) {
      setExercise({ ...newExercise(type), name: exercise.name });
    }
  };

  const handleOnChangeExerciseOptions = (opts: interfaces.ExerciseActivityOptions) => {
    if (interfaces.isEmomExercise(exercise) && interfaces.isEmomActivityOptions(opts)) {
      setExercise({ ...exercise, activityOptions: opts });
    }
    if (interfaces.isTabataExercise(exercise) && interfaces.isTabataActivityOptions(opts)) {
      setExercise({ ...exercise, activityOptions: opts });
    }
  };

  const handleOnAddRound = () => {
    if (interfaces.isEmomExercise(exercise)) {
      setExercise({ ...exercise, rounds: [...exercise.rounds, newEmomRound()] });
    } else if (interfaces.isTabataExercise(exercise)) {
      setExercise({ ...exercise, rounds: [...exercise.rounds, newTabataRound()] });
    }
  };

  const handleOnDeleteRound = (round: interfaces.ExerciseRound) => {
    if (interfaces.isEmomExercise(exercise)) {
      setExercise({ ...exercise, rounds: exercise.rounds.filter((r) => r !== round) });
    } else if (interfaces.isTabataExercise(exercise)) {
      setExercise({ ...exercise, rounds: exercise.rounds.filter((r) => r !== round) });
    }
  };

  const handleOnChangeRound = (round: interfaces.ExerciseRound, index: number) => {
    if (interfaces.isTabataExercise(exercise)) {
      setExercise({ ...exercise, rounds: exercise.rounds.map((r, i) => (i === index ? (round as TabataRound) : r)) });
    } else if (interfaces.isEmomExercise(exercise)) {
      setExercise({ ...exercise, rounds: exercise.rounds.map((r, i) => (i === index ? (round as EmomRound) : r)) });
    }
  };

  return (
    <ExerciseProvider exercise={exercise}>
      <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          id="panel-header"
          style={exerciseAccordionSummaryStyle}
          onClick={() => setExpanded(!expanded)}
        >
          <ExerciseAccordionHeader exercise={exercise} />
        </AccordionSummary>
        <AccordionDetails style={accordionDetailsStyle}>
          <ExerciseDetails>
            <ExerciseDetails.Header title="Activity" description="Choose the Kind of the exercise" />
            <ExerciseDetails.Body>
              <ExerciseActivitiesRadio selected={exercise.activityType} onChange={handleOnChangeExerciseType} />
            </ExerciseDetails.Body>
          </ExerciseDetails>

          {interfaces.isEmomExercise(exercise) && (
            <EmomExerciseDetails
              exercise={exercise}
              onChangeOptions={handleOnChangeExerciseOptions}
              onAddRound={handleOnAddRound}
              onDeleteRound={handleOnDeleteRound}
              onChangeRound={handleOnChangeRound}
            />
          )}
          {interfaces.isTabataExercise(exercise) && (
            <TabataExerciseDetails
              exercise={exercise}
              onChangeOptions={handleOnChangeExerciseOptions}
              onAddRound={handleOnAddRound}
              onDeleteRound={handleOnDeleteRound}
              onChangeRound={handleOnChangeRound}
            />
          )}
          <footer className="row centered">
            <CancelButton onClick={() => setExercise(props.exercise)} />
            <SaveButton onClick={() => props.onChange(exercise)} title="Apply to workout" />
          </footer>
        </AccordionDetails>
      </Accordion>
    </ExerciseProvider>
  );
};

const exerciseAccordionSummaryStyle: React.CSSProperties = {
  display: "flex",
  gap: "var(--spacing-1)",
  alignItems: "baseline",
};

const accordionDetailsStyle = {
  backgroundColor: "var(--color-white-2)",
  boxShadow: "none",
};

const ExerciseAccordionHeader = (props: { exercise: interfaces.Exercise }) => {
  const { exercise } = props;
  return (
    <ExerciseAccordionHeaderLayout>
      <div className="row centered">
        <ExerciseIcon />
      </div>
      <ExerciseName>{exercise.name}</ExerciseName>
      <ExerciseDescription>Create an exercise and add it to your workout</ExerciseDescription>
    </ExerciseAccordionHeaderLayout>
  );
};

const ExerciseAccordionHeaderLayout = styled.div`
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
  fill: var(--color-gray-2);
`;
