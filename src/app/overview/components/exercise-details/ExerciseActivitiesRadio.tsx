import * as interfaces from "../../interfaces/exercise";

import ExerciseDetails from "./ExerciseDetails";
import styled from "styled-components";

const EXERCISE_ACTIVITY_TYPES: interfaces.ExerciseActivityType[] = ["emom", "tabata"];

interface ActivityTypeProps {
  selected: interfaces.ExerciseActivityType;
  onChange: (type: interfaces.ExerciseActivityType) => void;
}

export const ExerciseActivitiesRadio = (props: ActivityTypeProps) => {
  const handleOnChangeActivityType = (type: interfaces.ExerciseActivityType) => {
    props.onChange(type);
  };

  return (
    <div className="row">
      <ExerciseDetails.Caption title="Type" />
      {EXERCISE_ACTIVITY_TYPES.map((type, i) => {
        return (
          <ActivityRadio key={i}>
            <label htmlFor={type}>{type}</label>
            <input
              type="radio"
              value={type}
              checked={type.toLowerCase() === props.selected.toLowerCase()}
              onChange={() => handleOnChangeActivityType(type)}
            />
          </ActivityRadio>
        );
      })}
    </div>
  );
};

const ActivityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;
