import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/TextSize";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background.primary,
        flex: 1,
        
    },

    content: {
        paddingTop: Platform.OS === "android" ? 54: 64,
        paddingHorizontal: 24,
    },

    titleContent: {
        paddingTop: 28,
        marginBottom: 32,
    },

    label: {
        fontSize: textSize.Label,
        fontFamily: fontFamily.semibold,
        color: colors.primary,
    },

    title: {
        fontSize: textSize.title.primary,
        color: colors.text.primary,
        fontFamily: fontFamily.semibold
    },

    subtitle: {
        fontSize: textSize.subtitle.primary,
        fontFamily: fontFamily.regular,
        color: colors.text.segondary,
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
        fontFamily: fontFamily.semibold,
    },

    actionText: {
        fontSize: textSize.subtitle.segundary,
        color: colors.primary,
        fontFamily: fontFamily.regular
    },
})