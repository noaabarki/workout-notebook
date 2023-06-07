import * as interfaces from "../../interfaces/exercise";

import { Input } from "../../../shared/components/Input";
import styled from "styled-components";

export const ExerciseActivity = (props: { activity: interfaces.ExerciseActivity }) => {
  const { activity } = props;

  return (
    <ExerciseSection>
      <div className="col">
        <SectionTitle>Activity</SectionTitle>
        <SectionDescription>Choose the Kind of the exercise</SectionDescription>
      </div>
      <Box className="col">
        <div className="row">
          <SectionTitle>Type</SectionTitle>
          <ExerciseActivities selected={activity.type} />
        </div>

        {activity.type === "emom" && (
          <div className="row">
            <SectionTitle>Time</SectionTitle>
            <Input type="text" value={activity.time.toString()} onChange={() => {}} />
          </div>
        )}
      </Box>
    </ExerciseSection>
  );
};

const ExerciseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
`;

const SectionTitle = styled.span`
  font-weight: 600;
  padding-right: var(--spacing-2);
`;

const SectionDescription = styled.span`
  font-weight: 400;
  font-size: smaller;
`;

const Box = styled.div`
  background-color: var(--color-white-1);
  padding: var(--spacing-3) var(--spacing-1);
  border-radius: 5px;
`;

const EXERCISE_ACTIVITY_TYPES: interfaces.ExerciseActivityType[] = ["emom", "tabata"];

interface ExerciseActivityProps {
  selected: interfaces.ExerciseActivityType;
}

export const ExerciseActivities = (props: ExerciseActivityProps) => {
  const { selected } = props;

  return (
    <>
      {EXERCISE_ACTIVITY_TYPES.map((type, i) => (
        <ActivityRadio key={i}>
          <label htmlFor={type}>{type}</label>
          <input type="radio" id={type} name={type} value={type} checked={type === selected} onChange={() => {}} />
        </ActivityRadio>
      ))}
    </>
  );
};

const ActivityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;
