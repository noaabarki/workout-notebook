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
