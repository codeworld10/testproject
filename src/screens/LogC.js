import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from 'expo-linear-gradient';
  
  const LogC = ({navigation}) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    return (
      <LinearGradient
      colors={['#E0ACBC', '#F1D9E0', 'transparent']}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 0.9 }}
    >
      <View>
        <ScrollView>
          <View style={styles.LogmainS}>
            <View style={styles.LogChild}>
              <Image
                style={styles.LoImg}
                source={require("../../assets/logo.png")}
              />
            </View>
            <View style={styles.LoGirl}>
              <Image
                style={styles.LoIcon}
                source={require("../../assets/tltL.png")}
              />
            </View>
            <View style={styles.LoIn}>
              <TextInput
                style={styles.InputL}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                placeholder="Enter Your Email Address"
                onChangeText={(actualdata) => setText(actualdata)}
              />
            </View>
            <View style={styles.LogIn1}>
              <TextInput
                style={styles.InputL1}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                placeholder="Enter Your Password"
                onChangeText={(actualdata) => setPassword(actualdata)}
              />
            </View>
            
            <View style={styles.Logbt}>
              <Button
              onPress={() => navigation.navigate("Worker")}
              title="Sign In" color="#008000" />
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.LogFor}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.LogAc}>
                  Don't Have An Account?
                  <Text
                    onPress={() => navigation.navigate("Find Talent")}
                    style={styles.LogSuP}
                  >
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
  
  
    LogChild: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  
    LoImg: {
      height: 88,
      width: 82,
      marginTop: 40,
    },
    LoGirl:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    LoIcon:{
      height: 180,
      width: 190,
      marginTop: 50,
      paddingVertical: 10,
    },
    LoIn:{
      paddingHorizontal: 10,
    },
    InputL:{
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 20,
      height: 40,
    },
    LogIn1:{
      paddingHorizontal: 10,
    },
    InputL1:{
      
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        height: 40,
     
    },
    LogFor:{
      textAlign: "center",
      color: "#FF0099",
      fontSize: 17,
      paddingVertical: 3,
     
    },
    Logbt:{
      paddingHorizontal: 50,
      paddingVertical: 15,
    },
    LogAc:{
      color: "#008000",
      textAlign: "center",
      fontSize: 15,
      paddingBottom: 15,
    },
    LogSuP:{
      color: "#FF0099",
      textAlign: "center",
      margin: 5,
      fontWeight: 'bold',
    },
  });
  export default LogC;
  