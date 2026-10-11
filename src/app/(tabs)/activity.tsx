import { ActivitiesList } from "@/components/activitiesList"
import { ActivityCard } from "@/components/activityCard"
import { useLocalSearchParams } from "expo-router"

export default function Activity() {
  const { form, mode } = useLocalSearchParams<{ form?: string; mode?: string }>()

  if (form === "true" || form === "new" || mode === "new") {
    return <ActivityCard />
  }

  return <ActivitiesList />
}

