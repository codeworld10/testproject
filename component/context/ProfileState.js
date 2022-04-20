import { View, Text } from "react-native";
import React, { useState } from "react";

import profileContext from "./profileContext";

const ProfileState = (props) => {
 // const host = "http://localhost:5000";
  const profileInitial = [ {
    "_id": "625eb129f61a266f6bb8908a",
    "user": "625d68a690517259c70575c2",
    "price": "1000",
    "name": "Testing profile",
    "email": "testing123@gmail.com",
    "phone": "0099887760",
    "postal": "4990",
    "skills": "tester",
    "description": "hello hello",
    "Date": "2022-04-19T12:55:05.576Z",
    "__v": 0
  },

];

  const [profiles, setProfiles] = useState(profileInitial);

  //add a profile
const addProfile = (price, name, email, phone, postal, skills, description) =>{
  console.log("adding new")
  const profile= {

  "_id": "2625eb12bf61a266f6bb8908c",
  "user": "625d68a690517259c70575c2",
  "price": "price",
  "name": "name",
  "email": "email",
  "phone": "phone",
  "postal": "postal",
  "skills": "skills",
  "description": "description",
  "Date": "2022-04-19T12:55:07.666Z",
  "__v": 0
}

  setProfiles(profiles.concat(profile))
}

  //delete a profile
  const deleteProfile = () =>{
  
  }

  //update a profile
  const updateProfile = () =>{
  
  }


  

  return (
    <View>
      <profileContext.Provider
        value={{
          profiles,
          addProfile,
          updateProfile,
          deleteProfile,
          profileInitial,
       
        }}
      >
        {props.children}
      </profileContext.Provider>
    </View>
  );
};

export default ProfileState;
