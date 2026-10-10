import { ReactNode } from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { styles } from "./style"

type ButtonProps = TouchableOpacityProps & {
  text: string
  color: string
  icon?: ReactNode
}

export function Button({ text, color, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
    >
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
