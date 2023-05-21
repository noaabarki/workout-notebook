import styled from "styled-components";

export const Badge = styled.div<{ content: string }>`
  padding: var(--spacing-1);
  border-radius: 5px;
  font-size: x-small;

  &.badge-info {
    background-color: var(--color-gray-1);
    color: var(--color-black-1);
  }

  ::before {
    content: "${(props) => props.content}";
  }
`;
