import { Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import EventsSquare from "./EventsSquare";
import { db } from "../firebaseConfig";
import { doc, collection, getDoc } from "firebase/firestore";
import { ActivityIndicator } from "react-native-web";
import LongCard from "./LongCard";

export default function LongCardQueryWrapper({ eventId }) {
const [eventData, setEventData] = useState({
    eventId: eventId,
    name: '',
    description: '',
    date: '',
    image: '',
    location: '',
    city: '',
});

  console.log(eventId + 'queryyyyy');
  useEffect(() => {
    const buildJoinedDbEvent = async () =>{
        const docRef = doc(db, "Events", `${eventId}`);
        const docSnap = await getDoc(docRef);
        if ( docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setEventData({
            eventId: eventId,
            name: docSnap.data().name,
            description: docSnap.data().description,
            date: docSnap.data().date,
            image: docSnap.data().image, 
            location: docSnap.data().location,
            city: docSnap.data().city,
          });
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    }
    buildJoinedDbEvent();
    
  }, [eventId]);
  
    if(!eventData || eventData === null){
        <ActivityIndicator size="large" color={"blue"} />
    }
      return (
         <LongCard
           eventId={eventId}
           name={eventData.name}
           description={eventData.description}
           date={eventData.date}
           image={eventData.image}
           location={eventData.location}
           city={eventData.city}
         ></LongCard>
      );
}
