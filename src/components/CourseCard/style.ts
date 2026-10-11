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

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },

  infoText: {
    fontSize: textSize.subtitle.primary,
    fontFamily: fontFamily.regular,
    color: colors.text.segondary,
  },
});
