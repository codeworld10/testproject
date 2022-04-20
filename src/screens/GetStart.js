import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
  } from "react-native";
  import { LinearGradient } from 'expo-linear-gradient';
  import React from "react";
  
  const GetStart = ({ navigation }) => {
    return (
      <LinearGradient
      colors={['#E0ACBC', '#F1D9E0', 'transparent']}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 0.9 }}
    >
      <ScrollView>
      <View style={styles.LogChild}>
      <Image
        style={styles.LoImg}
        source={require("../../assets/logo.png")}
      />
    </View>
        <View style={styles.flx}>
          <View style={styles.centimg}>
            <Image
              style={styles.getimg}
              source={require("../../assets/start.png")}
            />
          </View>
          <Text style={styles.control}>
            Control Your Daily
            {"\n"}
            Home Problems
          </Text>
          <Text style={styles.click}>By Just One Click</Text>
          <Text style={styles.create}>
            Create Your Account Search WORKER Near You
          </Text>
  
          <View style={styles.cenbtn}>
            <Button
              onPress={() => navigation.navigate("Talent Login")}
              style={styles.btnrad}
              title="Find Talent"
              color="#008000"
            />
          </View>
          <View style={styles.cenbtn}>
            <Button
              onPress={() => navigation.navigate("Login")}
              style={styles.btnrad}
              title="Find Work"
              color="#008000"
            />
          </View>
         
        </View>
      </ScrollView>
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
  
    control: {
      textAlign: "center",
      paddingVertical: 10,
      color: "#008000",
      fontSize: 24,
      fontWeight: "bold",
    },
    getimg: {
      width: 200,
      height: 185,
      marginTop: 40,
      paddingVertical: 10,
    },
    centimg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    click: {
      textAlign: "center",
      color: "#FF0099",
      fontSize: 24,
      fontWeight: "bold",
      paddingVertical: 10,
    },
    create: {
      textAlign: "center",
      color: "#008000",
      fontSize: 20,
      paddingHorizontal: 50,
      paddingVertical: 10,
    },
  
    cenbtn: {
      paddingVertical: 10,
      paddingHorizontal: 50,
    },
    btnrad: {
      borderRadius: 90,
      fontSize: 20,
    },
  });
  
  export default GetStart;
  