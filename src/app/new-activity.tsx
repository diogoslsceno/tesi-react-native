import { Redirect } from "expo-router"

export default function NewActivity() {
  return <Redirect href="/(tabs)/activity?form=true" />
}
