import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type BottonProps = {
    text: string
    color: string
};

export function Button({text, color, ...rest}: BottonProps){
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={[styles.container, {backgroundColor: color}]}
        {...rest}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}