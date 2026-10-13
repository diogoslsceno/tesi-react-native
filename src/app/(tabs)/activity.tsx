import { ActivityCard } from "@/components/activityCard"
import { ActivitiesList } from "@/components/activityList"
import { useLocalSearchParams } from "expo-router"

export default function Activity() {
  const { form, mode } = useLocalSearchParams<{
    form?: string
    mode?: string
  }>()

  if (form === "true" || form === "new" || mode === "new" || mode === "edit") {
    return <ActivityCard />
  }

  return <ActivitiesList />
}
