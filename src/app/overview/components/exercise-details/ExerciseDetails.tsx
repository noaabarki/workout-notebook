import { Box } from "../../../shared/components/Box";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const ExerciseDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
`;

const SectionTitle = styled.span`
  font-weight: 600;
  padding-right: var(--spacing-2);
`;

const SectionDescription = styled.span`
  font-weight: 400;
  font-size: smaller;
`;

const ExerciseDetails = (props: PropsWithChildren) => {
  return <ExerciseDetailsSection>{props.children}</ExerciseDetailsSection>;
};

const ExerciseDetailsHeader = (props: { title: string; description: string }) => {
  return (
    <div className="col">
      <SectionTitle>{props.title}</SectionTitle>
      <SectionDescription>{props.description}</SectionDescription>
    </div>
  );
};

ExerciseDetails.Header = ExerciseDetailsHeader;

const ExerciseDetailsBody = (props: PropsWithChildren) => {
  return <Box className="col">{props.children}</Box>;
};

ExerciseDetails.Body = ExerciseDetailsBody;

const ExerciseDetailsCaption = (props: { title: string }) => <SectionTitle>{props.title}</SectionTitle>;
ExerciseDetails.Caption = ExerciseDetailsCaption;

export default ExerciseDetails;
