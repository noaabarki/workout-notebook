import * as core from "../../../../core/interfaces";
import * as interfaces from "../../interfaces/exercise";

import { CancelButton, SaveButton, TextButton } from "../../../shared/components/Button";
import { Input, NumberInput } from "../../../shared/components/Input";

import styled from "styled-components";
import { useExercise } from "../../contexts/exerciseContext";
import { useState } from "react";

interface ExerciseRoundsProps {
  rounds: interfaces.ExerciseRounds;
  onChange: (rounds: interfaces.ExerciseRounds) => void;
}

export const ExerciseRounds = (props: ExerciseRoundsProps) => {
  const exercise = useExercise();
  const [rounds, setRounds] = useState<interfaces.ExerciseRounds>(props.rounds);
  const [changed, setChanged] = useState<boolean>(false);

  const handleOnClickAddRound = () => {
    let newRound: core.TabataRound | core.EmomRound;
    if (exercise.activityType === "tabata") {
      newRound = core.createNewTabataRound();
    } else if (exercise.activityType === "emom") {
      newRound = core.createNewEmomRound();
    } else {
      throw new Error("Unknown exercise activity type");
    }

    setRounds([...rounds, newRound]);
    setChanged(true);
  };

  const handleOnClickCancel = () => {
    setRounds(props.rounds);
    setChanged(false);
  };

  const handleOnClickSave = () => {
    props.onChange(rounds);
    setChanged(false);
  };

  const handleChangeRound = (round: core.EmomRound | core.TabataRound, index: number) => {
    const newRounds = [...rounds];
    newRounds[index] = round;
    setRounds(newRounds);
    setChanged(true);
  };

  return (
    <ExerciseSection>
      <SectionTitle>Rounds</SectionTitle>
      <SectionDescription>Describe the rounds of your exercise</SectionDescription>
      <Box className="col">
        <AddRoundButton onClick={handleOnClickAddRound} />
        {rounds.map((round, i) => (
          <RoundBox className="row" key={i}>
            {exercise.activityType === "tabata" && core.isTabataRound(round) ? (
              <TabataRound round={round} onChange={(round) => handleChangeRound(round, i)} />
            ) : exercise.activityType === "emom" && core.isEmomRound(round) ? (
              <EmomRound round={round} onChange={(round) => handleChangeRound(round, i)} />
            ) : (
              <p>Unknown round type</p>
            )}
          </RoundBox>
        ))}
        {changed && (
          <SaveOrDicardActivityChanges className="row">
            <CancelButton onClick={handleOnClickCancel} />
            <SaveButton onClick={handleOnClickSave} />
          </SaveOrDicardActivityChanges>
        )}
      </Box>
    </ExerciseSection>
  );
};

const TabataRound = (props: { round: core.TabataRound; onChange: (round: core.TabataRound) => void }) => {
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

const RoundField = (props: { caption: string; value: number | string; onChange: (value: string | number) => void }) => {
  const { caption, value, onChange } = props;
  return (
    <div className="col">
      <RoundFieldCaption>{caption}</RoundFieldCaption>
      {typeof value === "number" ? (
        <NumberInput onChange={(e) => onChange(Number(e.target.value))} value={value} />
      ) : (
        <Input onChange={(e) => onChange(e.target.value)} value={value} />
      )}
    </div>
  );
};

const RoundFieldCaption = styled.span`
  font-weight: 200;
  font-size: smaller;
`;

const AddRoundButton = styled(TextButton)`
  margin-left: auto;
  display: flex;
  ::after {
    content: "+ add round";
  }
`;

export const RoundBox = styled.div`
  background-color: var(--color-white-3);
  padding: var(--spacing-3);
  margin-top: var(--spacing-2);
`;

const SaveOrDicardActivityChanges = styled.div`
  margin-left: auto;
`;

/* Section stuff */
const ExerciseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
`;

const SectionTitle = styled.span`
  font-weight: 600;
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
