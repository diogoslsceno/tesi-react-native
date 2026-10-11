import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 12,
    borderLeftWidth: 6,
    marginBottom: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  title: {
    fontSize: textSize.title.segundary,
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

  teacherRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: 14,
  },

  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  scheduleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  roomRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    justifyContent: "flex-end",
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  textGroup: {
    flexDirection: "column",
  },

  labelText: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: colors.text.secundary,
  },

  valueText: {
    fontSize: 12,
    fontFamily: fontFamily.medium || fontFamily.regular,
    color: colors.text.primary,
    marginTop: 2,
  },

  infoText: {
    fontSize: textSize.subtitle.primary,
    fontFamily: fontFamily.regular,
    color: colors.text.segondary,
  },
});
