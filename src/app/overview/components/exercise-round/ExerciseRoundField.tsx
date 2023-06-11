import { Input, NumberInput } from "../../../shared/components/Input";

import styled from "styled-components";

export const ExerciseRoundField = (props: {
  caption: string;
  value: string | number;
  onChange: (value: string | number) => void;
}) => {
  const { caption, value, onChange } = props;
  return (
    <div className="col">
      <RoundFieldCaption>{caption}</RoundFieldCaption>
      {isNaN(Number(value)) ? (
        <Input type="text" onChange={(e) => onChange(e.target.value)} value={value} />
      ) : (
        <NumberInput onChange={(e) => onChange(e.target.value)} value={value} />
      )}
    </div>
  );
};

const RoundFieldCaption = styled.span`
  font-weight: 200;
  font-size: smaller;
`;
