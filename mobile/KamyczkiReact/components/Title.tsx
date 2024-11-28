import React from 'react';
import { Text, View, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface titleProps {
  title: string | '';
  style?: StyleProp<TextStyle>;
}

const Title = (props: titleProps) => {
  return (
    <View>
      <Text style={[styles.title, props.style]}>{props.title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 28,
  },
});
