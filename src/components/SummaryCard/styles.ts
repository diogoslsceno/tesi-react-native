import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 24,
    paddingStart: 24,
    paddingBottom: 24,
    paddingEnd: 16,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
  },
  decoratedCard: {
    flex: 1,
    height: 147,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  decoration: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    opacity: 0.5,
    zIndex: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    zIndex: 1,
  },
  textRow: {
    fontFamily: fontFamily.semiBold,
    fontSize: textSize.label,
    marginTop: Platform.OS === "android" ? -3 : -1,
  },
  content: {
    paddingTop: 12,
    zIndex: 1,
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
