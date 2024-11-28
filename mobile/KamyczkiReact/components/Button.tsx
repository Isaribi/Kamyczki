import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { globalStyle } from '../assets/styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, style, textStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, style, pressed && { opacity: 0.85 }]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d6112',
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;
