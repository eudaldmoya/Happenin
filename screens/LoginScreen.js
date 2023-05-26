import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { app } from "../firebaseConfig";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        Alert.alert(error.message);
        console.log(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Bottom Nav");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.centered}>
      <View style={styles.imageParent}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.input}>
        <View>
          <Text style={styles.signin}>Welcome back!</Text>
          <Text style={styles.welcomeTxt}>It's good to see you again.</Text>
        </View>
        <View>
          <View style={styles.textinputParent}>
            <MaterialIcons name="email" size={24} color="white" />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholder="youremail@email.com"
              placeholderTextColor="#fdfdfd"
              style={styles.textinput}
            ></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.textinputParent}>
            <Entypo name="key" size={24} color="white" />
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor="#fdfdfd"
              style={styles.textinput}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleCreateAccount}
        >
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#67E5BF",
    paddingTop: Constants.statusBarHeight + 30,
  },
  imageParent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15%",
    marginBottom: "25%",
  },
  logo: {
    aspectRatio: 1735 / 362,
    width: "100%",
    height: "auto",
  },
  signin: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingBottom: 5,
  },
  welcomeTxt: {
    fontSize: 16,
    color: "white",
    paddingBottom: 20,
  },
  textinputParent: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  textinput: {
    position: "relative",
    paddingLeft: 10,
    paddingBottom: 2.5,
    color: 'white',
    width: '100%',
  },
  signInButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
  },
  signUpButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "none",
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
  },
  signInText: {
    fontSize: 16,
    color: "#67E5BF",
    fontWeight: 'bold',
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonView: {
    gap: 20,
  },
  input: {
    paddingLeft: "10%",
    paddingRight: "15%",
    marginBottom: "10%",
  },
});
