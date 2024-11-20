import React, {useRef, useState} from 'react';
import {Text, TextInput, View, StyleSheet, KeyboardTypeOptions, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface InputProps
{
    placeHolder:string;
    label:string;
    onChangeText(val: string):any;
    keyboardType?:KeyboardTypeOptions | undefined,
    isPassword:boolean,
    inputBackgroundColor?:string
    onFocusScroll?: (y: number) => void;
}

const Input: React.FC<InputProps> = ({ label, isPassword = false, onChangeText,inputBackgroundColor,onFocusScroll, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);
    const [value,setValue] = useState('');
    const inputRef = useRef<View>(null);

    const handleFocus = () => {
        if (inputRef.current) {
          // Pobieranie pozycji za pomocą measure
          inputRef.current.measure((x, y, width, height, pageX, pageY) => {
            if (onFocusScroll) {
              onFocusScroll(pageY-(height+y)); // Wywołanie funkcji rodzica
            }
          });
        }
    }
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View ref={inputRef} style={[styles.inputContainer,{backgroundColor:inputBackgroundColor}]}>
                <TextInput
                    autoCapitalize='none'
                    style={styles.input}
                    secureTextEntry={!isPasswordVisible}
                    value={value}
                    onFocus={handleFocus}
                    placeholder={props.placeHolder}
                    onChangeText={(val) => {setValue(val); onChangeText(val)}}
                    keyboardType={props.keyboardType}
                />
                {isPassword && (
                    <Pressable
                        style={styles.iconContainer}
                        onPress={() => setIsPasswordVisible((prev) => !prev)}>
                        <Ionicons
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                            size={28}
                            color="black"
                            style={{padding:5}}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        paddingHorizontal: 12,
        elevation:8,// cień dla androida
        backgroundColor: 'white',
        shadowColor: '#000', // Cień (opcjonalnie)
        shadowOpacity: 0.1, // Przezroczystość cienia (opcjonalnie)
        shadowOffset: { width: 0, height: 4 }, // Pozycja cienia (opcjonalnie)
        shadowRadius: 10, // Rozmycie cienia (opcjonalnie)
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingVertical: 0, // Usuń problematyczny padding
        height: 45, // Stała wysokość dla inputa
        lineHeight: 20, // Dodanie stałego odstępu w linii tekstu
    },
    iconContainer: {
        marginLeft: 8,
    },
});

export default Input;
