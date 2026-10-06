import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textRow: {
    color: colors.orange,
    fontFamily: fontFamily.semiBold,
    fontSize: textSize.label,
    marginTop: Platform.OS === "android" ? -3 : -1,
  },
  content: {
    paddingTop: 12,
  },
  titleContent: {
    color: colors.text.primary,
    fontFamily: fontFamily.semiBold,
    fontSize: textSize.dashboard.title,
  },
  subtitleContent: {
    color: colors.text.secundary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.dashboard.subtitle,
  },
})
