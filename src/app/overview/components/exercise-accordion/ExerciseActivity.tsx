import * as interfaces from "../../interfaces/exercise";

import { CancelButton, SaveButton } from "../../../shared/components/Button";

import { NumberInput } from "../../../shared/components/Input";
import { isEmomActivity } from "../../../../core/interfaces/exercises";
import styled from "styled-components";
import { useState } from "react";

const EXERCISE_ACTIVITY_TYPES: interfaces.ExerciseActivityType[] = ["emom", "tabata"];

interface ExerciseActivityProps {
  activity: interfaces.ExerciseActivity;
  onChange: (activity: interfaces.ExerciseActivity) => void;
}

export const ExerciseActivity = (props: ExerciseActivityProps) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [selected, setSelected] = useState<interfaces.ExerciseActivityType>(props.activity.type);
  const [activity, setActivity] = useState<interfaces.ExerciseActivity>(props.activity);

  const handleChangeActivityType = (type: interfaces.ExerciseActivityType) => {
    setSelected(type);
    setChanged(true);
  };

  const handleChangeActivityOptions = (activity: interfaces.ExerciseActivity) => {
    setActivity(activity);
    setChanged(true);
  };

  const handleCancel = () => {
    setSelected(props.activity.type);
    setActivity(props.activity);
    setChanged(false);
  };

  return (
    <ExerciseSection>
      <div className="col">
        <SectionTitle>Activity</SectionTitle>
        <SectionDescription>Choose the Kind of the exercise</SectionDescription>
      </div>
      <Box className="col">
        <div className="row">
          <SectionTitle>Type</SectionTitle>
          {EXERCISE_ACTIVITY_TYPES.map((type, i) => {
            return (
              <ActivityRadio key={i}>
                <label htmlFor={type}>{type}</label>
                <input
                  type="radio"
                  value={type}
                  checked={type.toLowerCase() === selected.toLowerCase()}
                  onChange={() => handleChangeActivityType(type)}
                />
              </ActivityRadio>
            );
          })}
        </div>

        {selected === "emom" && (
          <div className="row">
            <SectionTitle>Time</SectionTitle>
            <NumberInput
              value={isEmomActivity(activity) ? activity.time : ""}
              onChange={(e) =>
                handleChangeActivityOptions({ ...activity, time: e.target.value } as interfaces.ExerciseActivity)
              }
            />
          </div>
        )}
        {changed && (
          <SaveOrDicardActivityChanges className="row">
            <CancelButton onClick={handleCancel} />
            <SaveButton onClick={() => props.onChange(activity)} />
          </SaveOrDicardActivityChanges>
        )}
      </Box>
    </ExerciseSection>
  );
};

const SaveOrDicardActivityChanges = styled.div`
  margin-left: auto;
`;

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

const ActivityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;
