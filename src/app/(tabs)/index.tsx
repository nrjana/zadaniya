import Greeting from "@/components/Greeting";
import { View } from "react-native";

export default function HomeScreen() {
  return <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <Greeting name="Nasirdin" role="teacher"/>


    <ProfileCard name="student_name" role="student_role" course="course_name" bio="student_info"/>
 
  </View>;
}
