import { Input, NumberInput } from "../../../shared/components/Input";

import styled from "styled-components";

export const ExerciseRoundField = <T extends unknown>(props: {
  caption: string;
  value: number | string;
  onChange: (value: T) => void;
}) => {
  const { caption, value, onChange } = props;
  return (
    <div className="col">
      <RoundFieldCaption>{caption}</RoundFieldCaption>
      {typeof value === "number" ? (
        <NumberInput onChange={(e) => onChange(e.target.value as T)} value={value} />
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
