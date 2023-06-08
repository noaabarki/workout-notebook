import * as interfaces from "../../interfaces/exercise";

import { CancelButton, SaveButton } from "../../../shared/components/Button";

import { NumberInput } from "../../../shared/components/Input";
import styled from "styled-components";
import { useState } from "react";

const EXERCISE_ACTIVITY_TYPES: interfaces.ExerciseActivityType[] = ["emom", "tabata"];

interface ExerciseActivityProps {
  activityType: interfaces.ExerciseActivityType;
  activityOptions: interfaces.ExerciseActivityOptions;
  onChangeActivityType: (type: interfaces.ExerciseActivityType) => void;
  onChangeActivityOptions: (opts: interfaces.ExerciseActivityOptions) => void;
}

export const ExerciseActivity = (props: ExerciseActivityProps) => {
  const selectedActivityType = props.activityType;
  const selectedActivityOptions = props.activityOptions;
  // const [changed, setChanged] = useState<boolean>(false);
  // const [selectedActivityType, setSelectedActivityType] = useState<interfaces.ExerciseActivityType>(props.activityType);
  // const [selectedActivityOptions, setSelectedActivityOptions] = useState<interfaces.ExerciseActivityOptions>(
  // props.activityOptions
  // );

  const handleOnChangeActivityType = (type: interfaces.ExerciseActivityType) => {
    // if (selectedActivityType !== type) {
    // reset
    // setSelectedActivityOptions(interfaces.newExerciseActivityOptions(type));
    // }

    // setSelectedActivityType(type);
    props.onChangeActivityType(type);
    // setChanged(true);
  };

  const handleOnChangeActivityOptions = (opts: interfaces.ExerciseActivityOptions) => {
    // setSelectedActivityOptions(opts);
    props.onChangeActivityOptions(opts);
    // setChanged(true);
  };

  // const handleOnClickCancel = () => {
  //   setSelectedActivityType(props.activityType);
  //   setSelectedActivityOptions(props.activityOptions);
  //   // setChanged(false);
  // };

  // const handleOnClickSave = () => {};

  return (
    <ExerciseSection>
      <div className="col">
        <SectionTitle>Activity</SectionTitle>
        <SectionDescription>Choose the Kind of the exercise</SectionDescription>
      </div>
      <Box className="col">
        <ActivityTypes selected={selectedActivityType} onChange={handleOnChangeActivityType} />
        {selectedActivityType === "emom" && interfaces.isEmomActivityOptions(selectedActivityOptions) && (
          <div className="row">
            <SectionTitle>Time</SectionTitle>
            <NumberInput
              value={selectedActivityOptions.time}
              onChange={(e) => handleOnChangeActivityOptions({ ...selectedActivityOptions, time: e.target.value })}
            />
          </div>
        )}
        {/* {changed && (
          <SaveOrDicardActivityChanges className="row">
            <CancelButton onClick={handleOnClickCancel} />
            <SaveButton onClick={handleOnClickSave} />
          </SaveOrDicardActivityChanges>
        )} */}
      </Box>
    </ExerciseSection>
  );
};

interface ActivityTypeProps {
  selected: interfaces.ExerciseActivityType;
  onChange: (type: interfaces.ExerciseActivityType) => void;
}

export const ActivityTypes = (props: ActivityTypeProps) => {
  const handleOnChangeActivityType = (type: interfaces.ExerciseActivityType) => {
    props.onChange(type);
  };

  return (
    <div className="row">
      <SectionTitle>Type</SectionTitle>
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
