import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 18,
    paddingStart: 20,
    paddingBottom: 18,
    paddingEnd: Platform.OS === "android" ? 20 : 16,
    borderRadius: 12,
  },
  TopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: textSize.dashboard.title,
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: textSize.dashboard.subtitle,
    fontFamily: fontFamily.regular,
    color: colors.text.segondary,
  },
  barge: {
    borderRadius: 300,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
  dateText: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
})
