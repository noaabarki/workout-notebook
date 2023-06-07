import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Subtitle, Title } from "../../../shared/components/Title";

import { Exercise } from "../../interfaces/exercise";
import { ExerciseActivity } from "./ExerciseActivity";
import { ExerciseRounds } from "./ExerciseRounds";
import { FiHeart } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";

export const ExerciseAccordion = (props: { exercise: Exercise; expanded: boolean }) => {
  const [expanded, setExpanded] = useState<boolean>(props.expanded);
  const { exercise } = props;

  return (
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
        <ExerciseActivity activity={exercise.activity} />
        <ExerciseRounds rounds={exercise.rounds} />
      </AccordionDetails>
    </Accordion>
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

const ExerciseHeader = (props: { exercise: Exercise }) => {
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
`;
