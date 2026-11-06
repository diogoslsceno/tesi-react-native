import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 6,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 17,
    fontFamily: fontFamily.semibold,
    color: colors.text.primary,
    flex: 1,
  },

  badge: {
    backgroundColor: colors.background.red,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    fontSize: 12,
    fontFamily: fontFamily.semibold,
    color: colors.red,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },

  infoText: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.text.segondary,
  },
})
