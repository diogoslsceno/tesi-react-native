import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./style";

type DisciplineCardProps = {
  title: string;
  teacher: string;
  time: string;
  room: string;
  borderColor: string;
};

export default function DisciplineCard({
  title,
  teacher,
  time,
  room,
  borderColor,
}: DisciplineCardProps) {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="code-slash-outline" size={24} color={borderColor} />
      </View>

      <View style={styles.infoRow}>
        <Ionicons
          name="person-outline"
          size={16}
          color={colors.text.segondary}
        />
        <Text style={styles.infoText}>{teacher}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="time-outline" size={16} color={colors.text.segondary} />
        <Text style={styles.infoText}>{time}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons
          name="location-outline"
          size={16}
          color={colors.text.segondary}
        />
        <Text style={styles.infoText}>{room}</Text>
      </View>
    </View>
  );
}
