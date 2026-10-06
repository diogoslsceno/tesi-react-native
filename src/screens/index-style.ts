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
    color: colors.text.primary,
    fontSize: textSize.title,
    fontFamily: fontFamily.semiBold,
  },
  subtitle: {
    fontSize: textSize.subtitle,
    fontFamily: fontFamily.regular,
    color: colors.text.secundary,
  },
})
