import * as core from "../../../../core/interfaces/exercises";
import * as interfaces from "../../interfaces/exercise";

import { Input, NumberInput } from "../../../shared/components/Input";

import { TextButton } from "../../../shared/components/Button";
import styled from "styled-components";
import { useExercise } from "../../contexts/exerciseContext";

interface ExerciseRoundsProps {
  rounds: interfaces.ExerciseRounds;
}

export const ExerciseRounds = (props: ExerciseRoundsProps) => {
  const { rounds } = props;
  const exercise = useExercise();

  return (
    <ExerciseSection>
      <SectionTitle>Rounds</SectionTitle>
      <SectionDescription>Describe the rounds of your exercise</SectionDescription>
      <Box>
        <AddRoundButton />
        {rounds.map((round, i) => (
          <RoundBox className="row" key={i}>
            {exercise.activity.type === "tabata" && core.isTabataRound(round) ? (
              <>
                <RoundField caption="name" value={round.name} onChange={() => {}} />
                <RoundField caption="weight" value={round.weight} onChange={() => {}} />
                <RoundField caption="reps" value={round.reps || 0} onChange={() => {}} />
              </>
            ) : exercise.activity.type === "emom" && core.isEmomRound(round) ? (
              <>
                <RoundField caption="name" value={round.name} onChange={() => {}} />
                <RoundField caption="weight" value={round.weight} onChange={() => {}} />
                <RoundField caption="reps" value={round.reps || 0} onChange={() => {}} />
                <RoundField caption="time" value={round.time || 0} onChange={() => {}} />
              </>
            ) : (
              <p>Unknown round type</p>
            )}
          </RoundBox>
        ))}
      </Box>
    </ExerciseSection>
  );
};

const RoundField = (props: { caption: string; value: number | string; onChange: () => void }) => {
  const { caption, value, onChange } = props;
  return (
    <div className="col">
      <RoundFieldCaption>{caption}</RoundFieldCaption>
      {typeof value === "number" ? (
        <NumberInput onChange={onChange} value={value} />
      ) : (
        <Input onChange={onChange} value={value.toString()} />
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
