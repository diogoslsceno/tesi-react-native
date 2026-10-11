import { Text, View } from "react-native";
import { styles } from "./style";

type CourseCardProps = {
  title: string;
  teacher: string;
  time: string;
  room: string;
  borderColor: string;
  pendings?: string;
  icon?: React.ReactNode;
  timeIcon?: React.ReactNode;
  roomIcon?: React.ReactNode;
  teacherIcon?: React.ReactNode;
};

export default function CourseCard({
  title,
  teacher,
  time,
  room,
  borderColor,
  pendings,
  icon,
  roomIcon,
  teacherIcon,
  timeIcon,
}: CourseCardProps) {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {pendings ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{pendings}</Text>
          </View>
        ) : (
          icon
        )}
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
