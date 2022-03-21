import React from 'react';
import {
  StyleSheet,
} from "react-native";


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
})

export default styles;
