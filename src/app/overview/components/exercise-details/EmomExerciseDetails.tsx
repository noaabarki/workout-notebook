import * as core from "../../../../core/interfaces";

import { AddRoundButton, RoundBox } from "../exercise-round/ExerciseRoundBox";

import { BsTrash } from "react-icons/bs";
import { Button } from "../../../shared/components/Button";
import ExerciseDetails from "./ExerciseDetails";
import { ExerciseRound } from "../../interfaces/exercise";
import { ExerciseRoundField } from "../exercise-round/ExerciseRoundField";
import { NumberInput } from "../../../shared/components/Input";
import styled from "styled-components";

interface EmomExerciseDetailsProps {
  exercise: core.EmomExercise;
  onChangeOptions: (type: core.EmomActivityOptions) => void;
  onAddRound: () => void;
  onDeleteRound: (round: ExerciseRound) => void;
  onChangeRound: (round: core.EmomRound, index: number) => void;
}

export const EmomExerciseDetails = (props: EmomExerciseDetailsProps) => {
  return (
    <>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Activity" description="Choose the Kind of the exercise" />
        <ExerciseDetails.Body>
          <div className="row">
            <ExerciseDetails.Caption title="Time" />
            <NumberInput
              value={props.exercise.activityOptions.time}
              onChange={(e) => props.onChangeOptions({ ...props.exercise.activityOptions, time: e.target.value })}
            />
          </div>
        </ExerciseDetails.Body>
      </ExerciseDetails>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Rounds" description="Describe the rounds of your exercise" />
        <ExerciseDetails.Body>
          <AddRoundButton onClick={props.onAddRound} />
          {props.exercise.rounds.map((round, i) => (
            <RoundBox className="row" key={i}>
              <EmomRound
                round={round}
                onChange={(r) => props.onChangeRound(r, i)}
                onDelete={() => props.onDeleteRound(round)}
              />
            </RoundBox>
          ))}
        </ExerciseDetails.Body>
      </ExerciseDetails>
    </>
  );
};

interface EmomRoundProps {
  round: core.EmomRound;
  onChange: (round: core.EmomRound) => void;
  onDelete: () => void;
}

const EmomRound = (props: EmomRoundProps) => {
  const { round, onChange } = props;
  return (
    <>
      <ExerciseRoundField
        caption="name"
        value={round.name}
        onChange={(value) => onChange({ ...round, name: value as string })}
      />
      <ExerciseRoundField
        caption="weight"
        value={round.weight}
        onChange={(value) => onChange({ ...round, weight: value as number })}
      />
      <ExerciseRoundField
        caption="reps"
        value={round.reps || 0}
        onChange={(value) => onChange({ ...round, reps: value as number })}
      />
      <ExerciseRoundField
        caption="time"
        value={round.time || 0}
        onChange={(value) => onChange({ ...round, time: value as number })}
      />
      <DeleteRoundButton onClick={props.onDelete}>
        <BsTrash />
      </DeleteRoundButton>
    </>
  );
};

const DeleteRoundButton = styled(Button)`
  margin: auto 0 0 auto;
  display: flex;
`;
