import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/button";

const SignUp = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 10, marginBottom: 60 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginVertical: 12,
              color: "black",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            by creating a free account.
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
              backgroundColor: "#F6F5F5",
            }}
          >
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#B4B4B8"
              keyboardType="name-phone-pad"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
              backgroundColor: "#F6F5F5",
            }}
          >
            <TextInput
              placeholder="E-mail address"
              placeholderTextColor="#B4B4B8"
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
              backgroundColor: "#F6F5F5",
            }}
          >
            <TextInput
              placeholder="+90"
              placeholderTextColor="#B4B4B8"
              keyboardType="numeric"
              style={{
                width: "12%",
                height: "100%",
              }}
            />

            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#B4B4B8"
              keyboardType="numeric"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#F6F5F5",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#B4B4B8"
              secureTextEntry={!isPasswordShown}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          style={{
            marginTop: 25,
            marginBottom: 4,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 25,
          }}
        >
          <Text style={{ fontSize: 14, color: COLORS.black }}>
            Already a member ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
