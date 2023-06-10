import * as core from "../../../../core/interfaces";
import * as interfaces from "../../interfaces/exercise";

import { AddRoundButton, RoundBox, RoundField } from "./ExerciseRoundBox";

import { Box } from "@mui/material";
import { ExerciseActivitiesRadio } from "./ExerciseActivitiesRadio";
import ExerciseDetails from "./ExerciseDetails";

interface TabataExerciseProps {
  exercise: core.TabataExercise;
  onChangeType: (type: interfaces.ExerciseActivityType) => void;
}

export const TabataExercise = (props: TabataExerciseProps) => {
  return (
    <>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Activity" description="Choose the Kind of the exercise" />
        <Box className="col">
          <ExerciseActivitiesRadio selected="tabata" onChange={() => {}} />
        </Box>
      </ExerciseDetails>
      <ExerciseDetails>
        <ExerciseDetails.Header title="Rounds" description="Describe the rounds of your exercise" />
        <ExerciseDetails.Body>
          <AddRoundButton onClick={() => {}} />
          {props.exercise.rounds.map((round, i) => (
            <RoundBox className="row" key={i}>
              <TabataRound round={round} onChange={(round) => {}} />
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
      <RoundField caption="name" value={round.name} onChange={(value: string) => onChange({ ...round, name: value })} />
      <RoundField
        caption="weight"
        value={round.weight}
        onChange={(value: number) => onChange({ ...round, weight: value })}
      />
      <RoundField
        caption="reps"
        value={round.reps || 0}
        onChange={(value: number) => onChange({ ...round, reps: value })}
      />
    </>
  );
};
