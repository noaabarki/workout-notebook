import { ActivityApi } from "../../core/api/workouts/client";
import React from "react";
import { Title } from "../shared/components/Title";
import { Workout } from "./entities/workout";
import { WorkoutCard } from "./components/WorkoutCard";
import { WorkoutDetailsModal } from "./components/WorkoutDetailsModal";
import styled from "styled-components";
import { useActivities } from "./hooks/useActivities";

export const OverviewPage = () => {
  const { isLoading, activities } = useActivities();
  const [selectedActivity, setSelectedActivity] = React.useState<ActivityApi | null>(null);

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
            // I don't really like to write js scripts inside the jsx
            // I would extract this to dictionary and use it: activityCard[activity.type];
            if (activity.type === "workout") {
              return (
                <WorkoutCard
                  key={i}
                  workout={new Workout(activity.name, activity.totalTime, activity.exercises)}
                  onClick={() => setSelectedActivity(activity)}
                />
              );
            }
            return null;
          })}
        </OverviewCardsSection>
      )}
      {selectedActivity?.type === "workout" && (
        <WorkoutDetailsModal
          isOpen={selectedActivity != null}
          onClose={() => setSelectedActivity(null)}
          workout={new Workout(selectedActivity.name, selectedActivity.totalTime, selectedActivity.exercises)}
          onChange={(workout) => {
            setSelectedActivity({ ...selectedActivity, ...workout });
          }}
        />
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
