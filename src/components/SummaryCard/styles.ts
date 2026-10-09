import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/TextSize";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingTop: 24,
        paddingStart: 24,
        paddingBottom: 24,
        paddingEnd: Platform.OS === "android" ? 1: 16,
        borderRadius: 12,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    textRow: {
        fontFamily: fontFamily.semibold,
        fontSize: textSize.Label,
        marginTop: Platform.OS === "android" ? -3 : -1,
    },

    content: {
        paddingTop: 12,
    },

    titleContent: {
        color: colors.text.primary,
        fontFamily: fontFamily.semibold,
        fontSize: textSize.dashboard.title,
    },

    subtitleContent: {
        color: colors.text.segondary,
        fontFamily: fontFamily.regular,
        fontSize: textSize.dashboard.subtitle,
    },
})