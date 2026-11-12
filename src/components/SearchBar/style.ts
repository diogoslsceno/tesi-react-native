import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  TextInputContent: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 0,
    backgroundColor: "transparent",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: "hidden",
  },

  iconContainer: {
    paddingLeft: 14,
    paddingRight: 4,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
})
