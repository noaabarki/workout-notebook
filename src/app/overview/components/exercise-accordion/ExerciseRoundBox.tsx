import { Input, NumberInput } from "../../../shared/components/Input";

import { TextButton } from "../../../shared/components/Button";
import styled from "styled-components";

export const AddRoundButton = styled(TextButton)`
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

export const RoundField = <T extends unknown>(props: {
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
