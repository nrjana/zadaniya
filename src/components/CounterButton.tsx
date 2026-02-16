import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CounterButtonProps {
  title: string;
  step?: number;
  initialValue?: number;
}

export default function CounterButton({
  title,
  step = 1,
  initialValue = 0,
}: CounterButtonProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setCount(prev => prev + step)}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
      <Text style={styles.counterText}>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  counterText: {
    marginTop: 5,
    fontSize: 16,
  },
});
