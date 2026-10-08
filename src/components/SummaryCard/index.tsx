import { ReactNode } from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"

type SummaryCardProps = {
  total?: number
  title: string
  subtitle: string
  icon?: ReactNode
  textColor?: string
}

export function SummaryCard({
  total,
  title,
  subtitle,
  icon,
  textColor,
}: SummaryCardProps) {
  return (
    <View style={styles.container}>
      {(icon != null || total != null) && (
        <View style={styles.row}>
          {icon}
          {total != null && (
            <Text
              style={[
                styles.textRow,
                {
                  color: textColor,
                },
              ]}
            >
              {total}
            </Text>
          )}
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.titleContent}>{title}</Text>
        <Text style={styles.subtitleContent}>{subtitle}</Text>
      </View>
    </View>
  )
}
