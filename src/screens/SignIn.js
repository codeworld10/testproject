import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  
    Button,
    ScrollView,
  } from "react-native";
  import { LinearGradient } from 'expo-linear-gradient';
  import React, { useState } from "react";
  
  const SignIn = ({ navigation }) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <LinearGradient
      colors={['#E0ACBC', '#F1D9E0', 'transparent']}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 0.9 }}
    >
      <ScrollView>
        <View style={styles.mainS}>
          <View style={styles.sChild}>
            <Image
              style={styles.sImg}
              source={require("../../assets/logo.png")}
            />
          </View>
          <View style={styles.sGirl}>
            <Image
              style={styles.sIcon}
              source={require("../../assets/Wrksup.png")}
            />
          </View>
          <View style={styles.Inpt3}>
            <TextInput
              style={styles.Inpt1}
              autoCapitalize="none"
              autoCorrect={false}
              value={text}
              placeholder="Enter Your Email Address"
              onChangeText={(actualdata) => setText(actualdata)}
            />
          </View>
          <View style={styles.inpT4}>
            <TextInput
              style={styles.inpT2}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              placeholder="Enter Your Password"
              onChangeText={(actualdata) => setPassword(actualdata)}
            />
          </View>
         
          <View style={styles.btnspc}>
           
            <Button
            onPress={() => navigation.navigate("WForm")}
            style={styles.btnSign} title="Sign In" color="#008000" />
          </View>
          <View>
          <TouchableOpacity>
            <Text style={styles.txtS}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.txtS1}>
                Don't Have An Account?
                <Text
                  onPress={() => navigation.navigate("Sign Up")}
                  style={styles.txtS2}
                >
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
  
  
    sChild: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  
    sImg: {
      height: 88,
      width: 82,
      marginTop: 40,
    },
    sGirl: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
    sIcon: {
      height: 170,
      width: 190,
      marginTop: 50,
      paddingVertical: 10,
    },
    Inpt1: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 20,
      height: 40,
    },
    inpT2: {
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
      height: 40,
    },
    Inpt3: {
      paddingHorizontal: 10,
    },
    inpT4: {
      paddingHorizontal: 10,
    },
    txtS: {
      textAlign: "center",
      color: "#FF0099",
      fontSize: 17,
      paddingVertical: 3,
      
    },
    
    btnspc: {
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
    txtS1: {
      color: "#008000",
      textAlign: "center",
      fontSize: 15,
      paddingBottom: 15,
    },
    txtS2: {
      color: "#FF0099",
      textAlign: "center",
      margin: 5,
      fontWeight: 'bold',
    },
  });
  
  export default SignIn;
  