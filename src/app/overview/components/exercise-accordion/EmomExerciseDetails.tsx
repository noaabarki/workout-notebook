import * as core from "../../../../core/interfaces";

import { AddRoundButton, RoundBox, RoundField } from "./ExerciseRoundBox";

import { ExerciseActivitiesRadio } from "./ExerciseActivitiesRadio";
import ExerciseDetails from "./ExerciseDetails";
import { NumberInput } from "../../../shared/components/Input";

interface EmomExerciseDetailsProps {
  exercise: core.EmomExercise;
  onChangeOptions: (type: core.EmomActivityOptions) => void;
}

export const EmomExerciseDetails = (props: EmomExerciseDetailsProps) => {
  return (
    <>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Activity" description="Choose the Kind of the exercise" />
        <ExerciseDetails.Body>
          <ExerciseActivitiesRadio selected="emom" onChange={() => {}} />
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
          <AddRoundButton onClick={() => {}} />
          {props.exercise.rounds.map((round, i) => (
            <RoundBox className="row" key={i}>
              <EmomRound round={round} onChange={(round) => {}} />
            </RoundBox>
          ))}
        </ExerciseDetails.Body>
      </ExerciseDetails>
    </>
  );
};

const EmomRound = (props: { round: core.EmomRound; onChange: (round: core.EmomRound) => void }) => {
  const { round, onChange } = props;
  return (
    <>
      <RoundField
        caption="name"
        value={round.name}
        onChange={(value) => onChange({ ...round, name: value as string })}
      />
      <RoundField
        caption="weight"
        value={round.weight}
        onChange={(value) => onChange({ ...round, weight: value as number })}
      />
      <RoundField
        caption="reps"
        value={round.reps || 0}
        onChange={(value) => onChange({ ...round, reps: value as number })}
      />
      <RoundField
        caption="time"
        value={round.time || 0}
        onChange={(value) => onChange({ ...round, time: value as number })}
      />
    </>
  );
};
