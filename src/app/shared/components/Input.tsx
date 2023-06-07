import styled from "styled-components";

interface InputProps {
  onChange: (event: any) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string | number;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { type, placeholder, value, onChange, className } = props;
  return (
    <StyledInput
      type={type || "text"}
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      className={className}
    />
  );
};

export const StyledInput = styled.input`
  padding: var(--spacing-1);
  border: solid 1px var(--color-gray-2);
  border-radius: 5px;

  :focus-within {
    outline: none;
    box-shadow: 0 0 2pt 1pt var(--color-blue-2);
  }
`;

export const NumberInput = (props: InputProps) => {
  const { placeholder, value, onChange, className } = props;
  return (
    <StyledNumberInput
      type="number"
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      className={className}
    />
  );
};

export const StyledNumberInput = styled(StyledInput)`
  width: var(--spacing-6);
`;
