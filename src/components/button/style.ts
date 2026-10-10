import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: textSize.button,
  },
})
