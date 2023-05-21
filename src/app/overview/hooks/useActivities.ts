import { useState, useEffect } from "react";
import { ActivityApi, getActivities } from "../../../core/api/workouts/client";

export function useActivities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityApi[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const activities = await getActivities();

      setActivities(activities);
      setIsLoading(false);
    }

    fetchApi();
  }, []);

  return { isLoading, activities };
}
