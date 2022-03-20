import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const Input = ({ label, error, ...props }) => {
  const containerStyles = [styles.inputContainer];
  if (error) {
    containerStyles.push(styles.inputContainerError);
  }

  return (
    <View style={containerStyles}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View style={styles.row}>
        <TextInput autoCapitalize="none" style={styles.input} {...props} />
      </View>
    </View>
  );
};

export const Button = ({ text, onPress, testID }) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ErrorText = ({ messages = [] }) => {
  const displayMessages = messages.filter((msg) => msg !== undefined);

  return (
    <View style={styles.errorContainer}>
      {displayMessages.map((msg) => (
        <Text key={msg} style={styles.errorText}>
          {msg}
        </Text>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "aliceblue",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "aliceblue",
  },
  inputContainerError: {
    borderColor: "red",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontSize: 10,
    color: "silver",
  },
  input: {
    color: "slategray",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 3,
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorContainer: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
});