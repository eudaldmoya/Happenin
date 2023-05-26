import { Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import EventsSquare from "./EventsSquare";
import { db } from "../firebaseConfig";
import { doc, collection, getDoc } from "firebase/firestore";
import { ActivityIndicator } from "react-native-web";

export default function EventSquareQueryWrapper({ eventId }) {
const [eventData, setEventData] = useState({
    eventId: eventId,
    name: '',
    description: '',
    date: '',
    image: '',
});

  console.log(eventId + 'queryyyyy');
  useEffect(() => {
    const buildLikedDbEvent = async () =>{
      /*setEventData({
        eventId: eventId,
        name: '',
        description: '',
        date: '',
        image: '',
      });*/
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
          });
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    }
    buildLikedDbEvent();
    
  }, [eventId]);
  
    if(!eventData || eventData === null){
        <ActivityIndicator size="large" color={"blue"} />
    }
      return (
         <EventsSquare
           eventId={eventId}
           name={eventData.name}
           description={eventData.description}
           date={eventData.date}
           image={eventData.image}
           //location={doc.data().location}
           //city={doc.data().city}
         ></EventsSquare>
      );
}
