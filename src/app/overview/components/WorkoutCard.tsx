import styled from "styled-components";
import { Badge } from "../../shared/components/Badge";
import { Workout } from "../interfaces/workout";
import { CardBody, CardFooter, CardFooterItem, CardHeader, CardLayout } from "./Card";

interface CardProps {
  workout: Workout;
}

export const WorkoutCard = (props: CardProps) => {
  const { workout } = props;
  const workoutTypesOfExercises = new Set(workout.exercises.map((exercise) => exercise.activity.type));

  return (
    <CardLayout>
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
            <span className="footer-item-caption">Kind</span>
            <div className="footer-item-content">
              {workoutTypesOfExercises.has("emom") && <WorkoutBadge content="emom" className="badge-emom" />}
              {workoutTypesOfExercises.has("tabata") && <WorkoutBadge content="tabata" className="badge-tabata" />}
            </div>
          </CardFooterItem>
          <CardFooterItem>
            <span className="footer-item-caption">Duration</span>
            <div className="footer-item-content">
              <span>{workout.totalTimeInMinutes} mins</span>
            </div>
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
    background-color: var(--color-blue-1);
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
