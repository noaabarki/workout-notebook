import styled from "styled-components";

export const Button = styled.button`
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-blue-1);
  color: var(--color-white-1);
  border-radius: 5px;
  border: none;
  width: fit-content;
  cursor: pointer;
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: var(--color-blue-2);
`;

export const SaveButton = styled(Button)`
  background-color: var(--color-blue-1);
  color: var(--color-white-1);
  border: solid 1px var(--color-blue-1);
  ::after {
    content: "Save";
  }

  :hover {
    background-color: var(--color-blue-2);
    border: solid 1px var(--color-blue-2);
  }
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  border: solid 1px var(--color-blue-1);
  color: var(--color-blue-1);
  ::after {
    content: "Cancel";
  }

  :hover {
    border: solid 1px var(--color-blue-2);
    color: var(--color-blue-2);
  }
`;
