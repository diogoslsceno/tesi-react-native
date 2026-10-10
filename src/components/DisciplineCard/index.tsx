import { Text, View } from "react-native";
import { styles } from "./style";

type DisciplineCardProps = {
  title: string;
  teacher: string;
  time: string;
  room: string;
  borderColor: string;
  icon: React.ReactNode;
  timeIcon: React.ReactNode;
  roomIcon: React.ReactNode;
  teacherIcon: React.ReactNode;
};

export default function DisciplineCard({title, teacher, time, room, borderColor, icon, roomIcon, teacherIcon, timeIcon}: DisciplineCardProps) {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {icon}
      </View>

      <View style={styles.infoRow}>
        {teacherIcon}
        <Text style={styles.infoText}>{teacher}</Text>
      </View>

      <View style={styles.infoRow}>
        {timeIcon}
        <Text style={styles.infoText}>{time}</Text>
      </View>

      <View style={styles.infoRow}>
        {roomIcon}
        <Text style={styles.infoText}>{room}</Text>
      </View>
    </View>
  );
}
