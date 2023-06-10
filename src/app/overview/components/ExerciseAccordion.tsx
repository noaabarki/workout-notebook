import * as interfaces from "../interfaces/exercise";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Subtitle, Title } from "../../shared/components/Title";

import { EmomExerciseDetails } from "./exercise-accordion/EmomExerciseDetails";
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
  const { exercise } = props;
  const [expanded, setExpanded] = useState<boolean>(props.expanded);
  const [selectedType, setSelectedType] = useState(exercise.activityType);

  const handleOnChangeExerciseType = (type: interfaces.ExerciseActivityType) => {
    if (selectedType !== type) {
      // reset rounds
    }
    setSelectedType(type);
  };

  // const handleOnChangeExerciseOptions = (opts: interfaces.ExerciseActivityOptions) => {};

  return (
    <ExerciseProvider exercise={exercise}>
      <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          id="panel1a-header"
          style={exerciseAccordionSummaryStyle}
          onClick={() => setExpanded(!expanded)}
        >
          <ExerciseHeader exercise={exercise} />
        </AccordionSummary>

        <AccordionDetails style={accordionDetailsStyle}>
          {selectedType === "emom" && interfaces.isEmomExercise(exercise) && (
            <EmomExerciseDetails exercise={exercise} onChangeType={handleOnChangeExerciseType} />
          )}
          {selectedType === "tabata" && interfaces.isTabataExercise(exercise) && (
            <TabataExerciseDetails exercise={exercise} onChangeType={handleOnChangeExerciseType} />
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

const ExerciseHeader = (props: { exercise: interfaces.Exercise }) => {
  const { exercise } = props;
  return (
    <ExerciseHeaderLayout>
      <div className="centered">
        <ExerciseIcon />
      </div>
      <ExerciseName>{exercise.name}</ExerciseName>
      <ExerciseDescription>Create an exercise and add it to your workout</ExerciseDescription>
    </ExerciseHeaderLayout>
  );
};

const ExerciseHeaderLayout = styled.div`
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
