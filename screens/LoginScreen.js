import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
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
    <View style={styles.mainView}>
      <ScrollView>
        <View style={styles.input}>
          <View>
            <Text>E-mail</Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholder="example@example.com"
            ></TextInput>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder="My password"
            ></TextInput>
          </View>
        </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignIn}
            >
              <Text style={styles.signText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleCreateAccount}
            >
              <Text style={styles.signText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  signInButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 30,
    backgroundColor: "#67E5BF",
    borderRadius: 50,
  },
  signUpButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 30,
    backgroundColor: "#67E5BF",
    borderRadius: 50,
  },
  signText: {
    color: "white",
    fontSize: 16,
  },
  buttonView:{
    display: 'flex',
    gap: 20,
  },
  mainView:{
    marginTop: 50,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 40,
    marginBottom: 40
  }
});
