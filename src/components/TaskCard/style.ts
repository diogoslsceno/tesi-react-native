import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingTop: 24,
        paddingStart: 24,
        paddingBottom: 24,
        paddingEnd: Platform.OS === "android" ? 24: 16,
        borderRadius: 12,
    },
    TopRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    title: {
        fontSize: textSize.title.segundary,
        color: colors.text.primary,
        fontFamily: fontFamily.semibold
    },
    subtitle: {
        fontSize: textSize.subtitle.primary,
        fontFamily: fontFamily.regular,
        color: colors.text.segondary,
    },

    barge: {
        borderRadius: 300,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
})