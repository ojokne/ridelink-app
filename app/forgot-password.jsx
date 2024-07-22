import { Link } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { primaryColor } from "../constants";
import RidelinkButton from "../components/RidelinkButton";

export default function Page() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Handle login logic
    console.log("Email:", email);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <Text
          style={{
            fontSize: 18,
            marginBottom: 50,
            color:"#888",
            textAlign: "center",
          }}
        >
          We will send you a link to reset your password
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <View style={{ width: "100%" }}>
            <RidelinkButton
              title="Reset password"
              onPress={() => {
                handlePasswordReset();
              }}
              style={{ marginVertical: 10 }}
            />
          </View>
          <View style={styles.linkContainer}>
            <Text>Don't have an account?</Text>
            <Link href="/signup">
              <Text style={styles.linkText}> Sign Up</Text>
            </Link>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 200,
  },
  inputContainer: {
    width: "75%",
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#ddd",
  },

  linkContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: primaryColor,
  },
});
