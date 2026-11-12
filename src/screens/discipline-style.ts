import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32,
  },

  mainTitle: {
    fontSize: 26,
    fontFamily: fontFamily.bold,
    color: colors.text.primary,
    marginBottom: 14,
  },

  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  headerTitle: {
    fontSize: 21,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
  },

  titleContent: {
    paddingTop: 28,
    marginBottom: 32,
  },

  headerContent: {
    marginTop: 16,
  },

  card: {
    width: "100%",
  },
})
