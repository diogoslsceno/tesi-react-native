import { ReactNode } from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import { styles } from "./styles"

type SummaryCardProps = {
  total?: number
  title: string
  subtitle: string
  icon?: ReactNode
  textColor?: string
  decorationColor?: string
  style?: StyleProp<ViewStyle>
}

export function SummaryCard({
  total,
  title,
  subtitle,
  icon,
  textColor,
  decorationColor,
  style,
}: SummaryCardProps) {
  return (
    <View
      style={[
        styles.container,
        decorationColor ? styles.decoratedCard : null,
        style,
      ]}
    >
      {decorationColor != null && (
        <View
          style={[styles.decoration, { backgroundColor: decorationColor }]}
        />
      )}

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
