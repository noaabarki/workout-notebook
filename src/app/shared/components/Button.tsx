import styled from "styled-components";

export const Button = styled.button`
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: 5px;
  border: none;
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: var(--color-blue-2);
`;
