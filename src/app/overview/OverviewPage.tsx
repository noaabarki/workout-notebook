import styled from "styled-components";
import { Title } from "../shared/components/Title";
import { WorkoutCard } from "./components/WorkoutCard";
import { useActivities } from "./hooks/useActivities";
import { Workout } from "./interfaces/workout";

export const OverviewPage = () => {
  const { isLoading, activities } = useActivities();

  return (
    <OverviewPageLayout>
      <section>
        <Title>Overview</Title>
      </section>
      <section>Search</section>
      <section>Filters</section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <OverviewCardsSection>
          {activities.map((activity, i) => {
            if (activity.type === "workout") {
              return (
                <WorkoutCard
                  key={i}
                  workout={
                    new Workout(
                      activity.name,
                      activity.totalTime,
                      activity.exercises
                    )
                  }
                />
              );
            }
            return null;
          })}
        </OverviewCardsSection>
      )}
    </OverviewPageLayout>
  );
};

const OverviewCardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  margin: var(--spacing-3) 0;
`;

const OverviewPageLayout = styled.div`
  padding: var(--spacing-3);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  ${OverviewCardsSection} {
    flex-grow: 1;
  }
`;
