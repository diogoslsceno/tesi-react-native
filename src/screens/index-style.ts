import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { textSize } from "@/styles/textSize"
import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  content: {
    paddingTop: Platform.OS === "android" ? 54 : 64,
    paddingHorizontal: 24,
  },
  titleContent: {
    paddingTop: 28,
    marginBottom: 32,
  },
  label: {
    fontSize: textSize.label,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
  },
  title: {
    fontSize: textSize.title.primary,
    color: colors.text.primary,
    fontFamily: fontFamily.semiBold,
  },
  titlePrimary: {
    color: colors.text.primary,
    fontSize: textSize.title.primary,
    fontFamily: fontFamily.semiBold,
  },
  titleSecudary: {
    color: colors.text.secundary,
    fontSize: textSize.title.secundary,
    fontFamily: fontFamily.semiBold,
  },
  subtitle: {
    fontSize: textSize.subtitle.primary,
    fontFamily: fontFamily.regular,
    color: colors.text.secundary,
  },
  cardContent: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 24,
  },
  card: {
    flex: 1,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: textSize.title.segundary,
    color: colors.text.primary,
    fontFamily: fontFamily.semiBold,
  },
  actionText: {
    fontSize: textSize.subtitle.segundary,
    color: colors.primary,
    fontFamily: fontFamily.regular,
  },
})
