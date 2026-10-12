import { Text, View } from "react-native"
import { styles } from "./style"

type DisciplineCardProps = {
  title: string
  teacher: string
  time: string
  room: string
  borderColor: string
  pendings: string
  pendingsColor?: string
  badgeColor: string
  icon?: React.ReactNode
  timeIcon?: React.ReactNode
  roomIcon?: React.ReactNode
  teacherIcon?: React.ReactNode
}

export default function DisciplineCard({
  title,
  teacher,
  time,
  room,
  borderColor,
  pendings,
  pendingsColor,
  badgeColor,
  icon,
  roomIcon,
  teacherIcon,
  timeIcon,
}: DisciplineCardProps) {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {pendings ? (
          <View style={[styles.badge, { backgroundColor: badgeColor }]}>
            <Text style={[styles.badgeText, { color: pendingsColor }]}>
              {pendings}
            </Text>
          </View>
        ) : (
          icon
        )}
      </View>

      <View style={styles.teacherRow}>
        {teacherIcon}
        <Text style={styles.infoText}>{teacher}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsContainer}>
        <View style={styles.scheduleRow}>
          <View style={styles.iconCircle}>{timeIcon}</View>
          <View style={styles.textGroup}>
            <Text style={styles.labelText}>Horário</Text>
            <Text style={styles.valueText}>{time}</Text>
          </View>
        </View>

        <View style={styles.roomRow}>
          <View style={styles.iconCircle}>{roomIcon}</View>
          <View style={styles.textGroup}>
            <Text style={styles.labelText}>Sala</Text>
            <Text style={styles.valueText}>{room}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
