import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface titleProps{
    title:string | '';
}

const Title = (props : titleProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    title:{
        color:'#022150',
        fontSize:26,
    },
});


