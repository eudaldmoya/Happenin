import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { firebaseConfig } from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, ScrollView, TextInput, Text, View, Alert } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    const app = initializeApp(firebaseConfig);
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
          navigation.navigate('Bottom Nav');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <View>
        <ScrollView>
          <View>
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
            <Button onPress={handleSignIn} title="Login"></Button>
            <Button onPress={handleCreateAccount} title="Sign up"></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
  