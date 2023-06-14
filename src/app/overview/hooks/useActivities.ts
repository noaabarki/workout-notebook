import { ActivityApi, getActivities } from "../../../core/api/workouts/client";
import { useEffect, useState } from "react";

export function useActivities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityApi[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const activities = await getActivities();

      setActivities(activities);
      setIsLoading(false);
    }

    fetchActivities();
  }, []);

  return { isLoading, activities };
}
