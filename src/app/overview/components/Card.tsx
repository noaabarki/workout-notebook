import styled from "styled-components";

export const CardLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: var(--spacing-3);
  padding: var(--spacing-2);
  border-radius: 5px;
  background-color: var(--color-white-1);
  box-shadow: var(--shadow-1);
  min-width: 300px;
  max-width: 400px;
  height: calc(7 * var(--spacing-6));
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBody = styled.div`
  white-space: nowrap;
  display: contents;

  p {
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
    font-size: smaller;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-3);
`;

export const CardFooterItem = styled.div`
  display: flex;
  gap: var(--spacing-1);
  flex-direction: column;

  .footer-item-caption {
    font-weight: 600;
  }

  .footer-item-content {
    display: flex;
    gap: var(--spacing-1);
  }
`;
