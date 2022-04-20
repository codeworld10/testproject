import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Button,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  
  const SignUp = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
      <LinearGradient
        colors={["#E0ACBC", "#F1D9E0", "transparent"]}
        style={styles.container}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0.9 }}
      >
        <ScrollView>
          <View style={styles.UpTop}>
            <View style={styles.Upcen}>
              <Image
                style={styles.UpImg}
                source={require("../../assets/logo.png")}
              />
            </View>
            <View style={styles.wrkcen}>
              <Image
                style={styles.sIcon}
                source={require("../../assets/signin.png")}
              />
            </View>
  
            <View style={styles.InUpT}>
              <TextInput
                style={styles.InptUp1}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                placeholder="Enter Your Name"
                onChangeText={(actualdata) => setName(actualdata)}
              />
            </View>
  
            <View style={styles.InUpT}>
              <TextInput
                style={styles.InptUP2}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                placeholder="Enter Your Email Address"
                onChangeText={(actualdata) => setEmail(actualdata)}
              />
            </View>
  
            <View style={styles.InUpT}>
              <TextInput
                style={styles.InptUp3}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={phone}
                placeholder="Enter Your Phone"
                onChangeText={(actualdata) => setPhone(actualdata)}
              />
            </View>
  
            <View style={styles.InUpT}>
              <TextInput
                style={styles.InptUp4}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                placeholder="Enter Your Password"
                onChangeText={(actualdata) => setPassword(actualdata)}
              />
            </View>
            <View>
              <View style={styles.btnspc}>
                <Button style={styles.btnSign} title="Sign In" color="#008000" />
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.txtS4}>
                Already Have An Account?
                <Text style={styles.txtS3}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    UpImg: {
      width: 75,
      height: 88,
      marginTop: 40,
    },
    wrkcen: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sIcon: {
      width: 140,
      height: 170,
      marginTop: 50,
      paddingVertical: 10,
    },
    Upcen: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    InptUp1: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 20,
      height: 40,
    },
    InptUP2: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
      height: 40,
    },
    InptUp3: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
      height: 40,
    },
    InptUp4: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
      height: 40,
    },
    InUpT: {
      paddingHorizontal: 10,
    },
    btnSign: {
      borderRadius: 90,
      fontSize: 20,
    },
    btnspc: {
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
    TxtS2: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#FF0099",
      marginVertical: 10,
      backgroundColor: "green",
    },
    txtS4: {
      color: "#008000",
      textAlign: "center",
      fontSize: 15,
      paddingBottom: 15,
    },
    txtS3: {
      color: "#FF0099",
      textAlign: "center",
      margin: 5,
      fontWeight: "bold",
    },
  });
  
  export default SignUp;
  