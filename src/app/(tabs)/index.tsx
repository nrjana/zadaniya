import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

     <View style={styles.header}>
       <Image
        source={require("../../assets/images/header.jpg")}
        style={styles.headerImage}
        resizeMode="cover"
      /> 
      </View>

    <View style={styles.content}>
      <Image
        source={require("../../assets/images/bts.jpg")}
        style={styles.avatar}
      />

      <Text style={styles.title}>Имя студента: Min Yoongi</Text>
      <Text style={styles.subtitle}>Название курса: K-pop rap lessons</Text>

      <Pressable 
        style={styles.button}
        onPress={() => Alert.alert("Кнопка работает!")}
      >
        <Text style={styles.buttonText}>click here</Text>
      </Pressable>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 200,
    width: "100%",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,  
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
