import { CardBody, CardFooter, CardFooterItem, CardHeader, CardLayout } from "../../shared/components/Card";

import { Badge } from "../../shared/components/Badge";
import { Workout } from "../entities/workout";
import styled from "styled-components";

interface CardProps {
  workout: Workout;
  onClick: () => void;
}

export const WorkoutCard = (props: CardProps) => {
  const { workout } = props;
  const workoutTypesOfExercises = new Set(workout.exercises.map((exercise) => exercise.activityType));

  return (
    <CardLayout onClick={props.onClick}>
      <CardHeader>
        <h2>{workout.name}</h2>
        <WorkoutBadge content="workout" className="badge-info" />
      </CardHeader>
      <CardBody>
        <p>{workout.description}</p>
      </CardBody>
      <div>
        <Divider />
        <CardFooter>
          <CardFooterItem>
            <span>Kind</span>
            <WorkoutBadges>
              {workoutTypesOfExercises.has("emom") && <WorkoutBadge content="emom" className="badge-emom" />}
              {workoutTypesOfExercises.has("tabata") && <WorkoutBadge content="tabata" className="badge-tabata" />}
            </WorkoutBadges>
          </CardFooterItem>
          <CardFooterItem>
            <span>Duration</span>
            <WorkoutDuration content={workout.totalTimeInMinutes.toString()} />
          </CardFooterItem>
        </CardFooter>
      </div>
    </CardLayout>
  );
};

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: var(--color-gray-1);
  margin: var(--spacing-1) 0;
`;

const WorkoutBadge = styled(Badge)`
  &.badge-emom {
    background-color: var(--color-purple-2);
    color: var(--color-white-1);
  }

  &.badge-amrap {
    background-color: var(--color-red-1);
    color: var(--color-white-1);
  }

  &.badge-shape-outside {
    background-color: var(--color-green-1);
    color: var(--color-white-1);
  }

  &.badge-tabata {
    background-color: var(--color-black-1);
    color: var(--color-white-1);
  }
`;

const WorkoutDuration = styled.span<{ content: string }>`
  ::before {
    font-weight: 900;
    font-size: x-large;
    content: "${(props) => props.content} ";
  }

  ::after {
    font-size: smaller;
    content: "mins";
  }
`;

const WorkoutBadges = styled.div`
  display: flex;
  gap: var(--spacing-1);
`;
