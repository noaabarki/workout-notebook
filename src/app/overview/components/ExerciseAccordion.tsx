import * as core from "../../../core/interfaces";
import * as interfaces from "../interfaces/exercise";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Subtitle, Title } from "../../shared/components/Title";
import { addRound, newEmomExercise, newTabataExercise } from "../utils/exercise";

import { EmomExerciseDetails } from "./exercise-accordion/EmomExerciseDetails";
import { ExerciseActivitiesRadio } from "./exercise-accordion/ExerciseActivitiesRadio";
import { ExerciseProvider } from "../contexts/exerciseContext";
import { FiHeart } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { TabataExerciseDetails } from "./exercise-accordion/TabataExerciseDetails";
import styled from "styled-components";
import { useState } from "react";

interface ExerciseAccordionProps {
  exercise: interfaces.Exercise;
  expanded: boolean;
  onChange: (exercise: interfaces.Exercise) => void;
}

export const ExerciseAccordion = (props: ExerciseAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(props.expanded);
  const [exercise, setExercise] = useState(props.exercise);

  const handleOnChangeExerciseType = (type: interfaces.ExerciseActivityType) => {
    if (exercise.activityType !== type) {
      switch (type) {
        case "tabata":
          setExercise(newTabataExercise());
          return;
        case "emom":
          setExercise(newEmomExercise());
          return;
      }
    }
  };

  const handleOnChangeEmomExerciseOptions = (opts: core.EmomActivityOptions) => {
    if (interfaces.isEmomExercise(exercise)) {
      setExercise({ ...exercise, activityOptions: opts });
    }
  };

  const handleOnChangeTabataExerciseOptions = (opts: core.TabataActivityOptions) => {
    if (interfaces.isTabataExercise(exercise)) {
      setExercise({ ...exercise, activityOptions: opts });
    }
  };

  const handleAddRound = () => {
    const newExercise = addRound(exercise);
    setExercise(newExercise);
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
          <ExerciseActivitiesRadio selected={exercise.activityType} onChange={handleOnChangeExerciseType} />
          {exercise.activityType === "emom" && interfaces.isEmomExercise(exercise) && (
            <EmomExerciseDetails
              exercise={exercise}
              onChangeOptions={handleOnChangeEmomExerciseOptions}
              onAddRound={handleAddRound}
            />
          )}
          {exercise.activityType === "tabata" && interfaces.isTabataExercise(exercise) && (
            <TabataExerciseDetails
              exercise={exercise}
              onChangeOptions={handleOnChangeTabataExerciseOptions}
              onAddRound={handleAddRound}
            />
          )}
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
      <div className="centered">
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
