import { colors } from "@/styles/colors"
import { ActivityIndicator } from "react-native"
export function Loading() {
    return (
        <ActivityIndicator size={"large"} color={colors.primary}/>
    )
}