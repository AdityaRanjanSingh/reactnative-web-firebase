import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
      />
      <Button title="Add" onPress={props.addGoal.bind(this, enteredGoal)} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { borderWidth: 1, borderColor: "black", padding: 10, width: "80%" },
});

export default GoalInput;
