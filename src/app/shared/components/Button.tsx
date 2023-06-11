import styled from "styled-components";

export const Button = styled.button`
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-primary);
  color: var(--color-white-1);
  border-radius: 5px;
  border: solid 1px var(--color-primary);
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: var(--color-blue-1);
    border: solid 1px var(--color-blue-1);
  }
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: var(--color-primary);

  &:hover {
    background-color: transparent;
    color: var(--color-blue-2);
    border: solid 1px var(--color-blue-2);
  }
`;

export const SaveButton = styled(Button)`
  ::after {
    content: "Save";
  }
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  border: solid 1px var(--color-primary);
  color: var(--color-primary);
  ::after {
    content: "Cancel";
  }

  &:hover {
    border: solid 1px var(--color-blue-1);
    color: var(--color-blue-1);
  }
`;
