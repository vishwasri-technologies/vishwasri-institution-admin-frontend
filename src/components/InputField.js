import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../styles/color';

export default function InputField({ placeholder, value, onChangeText, secureTextEntry = false, keyboardType = 'default' }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={styles.input}
      placeholderTextColor={colors.gray}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
});
