import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    TextInputContent: {
        flex: 1,
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.text.primary,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderWidth: 0,
        backgroundColor: 'transparent',
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.borderLight,
        overflow: 'hidden',
    },

    iconContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRightWidth: 1,
        borderRightColor: colors.borderLight,
        justifyContent: 'center',
        alignItems: 'center',
    },


    screenContainer: {
        flex: 1,
        backgroundColor: colors.background.primary,
        paddingHorizontal: 24,
        paddingTop: 64,
      },

    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text.primary,
        marginBottom: 12,
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
        fontFamily: fontFamily.semibol,
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