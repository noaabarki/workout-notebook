import * as core from "../../../../core/interfaces";

import { AddRoundButton, RoundBox } from "../exercise-round/ExerciseRoundBox";

import ExerciseDetails from "./ExerciseDetails";
import { ExerciseRound } from "../../interfaces/exercise";
import { ExerciseRoundField } from "../exercise-round/ExerciseRoundField";
import { NumberInput } from "../../../shared/components/Input";

interface TabataExerciseProps {
  exercise: core.TabataExercise;
  onChangeOptions: (type: core.TabataActivityOptions) => void;
  onAddRound: () => void;
  onDeleteRound: (round: ExerciseRound) => void;
  onChangeRound: (round: core.TabataRound, index: number) => void;
}

export const TabataExerciseDetails = (props: TabataExerciseProps) => {
  return (
    <>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Activity" description="Choose the Kind of the exercise" />
        <ExerciseDetails.Body>
          <ExerciseDetails.Caption title="Time" />
          <NumberInput
            value={props.exercise.activityOptions.count}
            onChange={(e) => props.onChangeOptions({ ...props.exercise.activityOptions, count: e.target.value })}
          />
        </ExerciseDetails.Body>
      </ExerciseDetails>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Rounds" description="Describe the rounds of your exercise" />
        <ExerciseDetails.Body>
          <AddRoundButton onClick={props.onAddRound} />
          {props.exercise.rounds.map((round, i) => (
            <RoundBox className="row" key={i}>
              <TabataRound round={round} onChange={(round) => props.onChangeRound(round, i)} />
            </RoundBox>
          ))}
        </ExerciseDetails.Body>
      </ExerciseDetails>
    </>
  );
};

const TabataRound = (props: { round: core.TabataRound; onChange: (round: core.TabataRound) => void }) => {
  const { round, onChange } = props;
  return (
    <>
      <ExerciseRoundField
        caption="name"
        value={round.name}
        onChange={(value: string) => onChange({ ...round, name: value })}
      />
      <ExerciseRoundField
        caption="weight"
        value={round.weight}
        onChange={(value: number) => onChange({ ...round, weight: value })}
      />
      <ExerciseRoundField
        caption="reps"
        value={round.reps || 0}
        onChange={(value: number) => onChange({ ...round, reps: value })}
      />
    </>
  );
};
