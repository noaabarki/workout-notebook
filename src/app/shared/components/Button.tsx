import styled from "styled-components";

export const Button = styled.button<{ title?: string }>`
  padding: var(--spacing-1) var(--spacing-6);
  background-color: var(--color-blue-3);
  color: var(--color-white-1);
  border-radius: 3px;
  border: solid 1px var(--color-blue-3);
  cursor: pointer;

  &:hover {
    background-color: var(--color-blue-2);
    border: solid 1px var(--color-blue-2);
  }
`;

export const TextButton = styled(Button)`
  padding: var(--color-blue-3);
  background-color: transparent;
  color: var(--color-blue-3);
  border: none;

  &:hover {
    background-color: transparent;
    color: var(--color-blue-2);
    border: none;
  }
`;

export const SaveButton = styled(Button)`
  &::after {
    content: "${(props) => props.title || "Save"}";
  }
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  border: solid 1px var(--color-blue-3);
  color: var(--color-blue-3);
  ::after {
    content: "Cancel";
  }

  &:hover {
    background-color: transparent;
    color: var(--color-blue-2);
    border: solid 1px var(--color-blue-2);
  }
`;

export const IconButton = styled(Button)`
  padding: var(--spacing-1);
`;
