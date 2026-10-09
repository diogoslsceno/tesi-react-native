import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/TextSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    text: {
        color: colors.white,
        fontFamily: fontFamily.semibold,
        fontSize: textSize.subtitle.primary,
    },
})