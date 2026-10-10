import { Text, View } from "react-native";
import { styles } from "./style";

type ActivityCardProps = {
    title: string
    subTitle: string
    dataTitle: string
    alertTitle: string
    textColor: string
    colorBackgroud: string
};

export default function CardDiscipline({title, subTitle, dataTitle, alertTitle, textColor, colorBackgroud}: ActivityCardProps){
    return (
        <View style={styles.container}>
            <View style={styles.TopRow}>
                <View style={[styles.barge, {backgroundColor: colorBackgroud}]}>
                    <Text style={[{color: textColor}]}>{alertTitle}</Text>
                </View>
                    <Text style={[{color: textColor}]}>{dataTitle}</Text>
            </View>
            <View>
                <Text style = {styles.title}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    )
}
