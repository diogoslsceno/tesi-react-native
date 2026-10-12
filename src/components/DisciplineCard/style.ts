import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },

  scheduleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flex: 1.25,
    minWidth: 0,
  },

  roomRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flex: 1,
    minWidth: 0,
  },

  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.blue,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 2,
  },

  textGroup: {
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
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
