import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import HeaderLikes from "../components/HeaderLikes";
import NoEvents from "../components/NoEvents";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import EventsSquare from "../components/EventsSquare";

export default function LikesScreen() {
  const [likesArray, setLikesArray] = useState(null);
  user = getAuth().currentUser.uid;
  

  /*Al useEffect fa una primera consulta per agafar tots els likes que 
  corresponen a la sessió actual (A cada un d'aquests likes hi ha 
  un userId i eventId associats). 
  Seguidament, per cada un d'aquests documents fa una segona consulta
  amb la eventId per busca l'event guardat a una altra col·lecció
  i recollir nom i imatge per renderitzar a la pàgina yourlikes*/
  useEffect(() => {
    const q = query(collection(db, 'Likes'), where('userId', '==', user));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      const updatedLikes = [];
      querySnapshot.forEach(async (doc) => {
        const eventDocRef = doc(db, "Events", doc.id);
        const eventDocSnapshot = getDoc(eventDocRef);
        if( eventDocSnapshot.exists()){
        const eventData = eventDocSnapshot.data();
        const eventDetails = {
          eventId: doc.id,
          name: eventData.name,
          image: eventData.image
        }
        updatedLikes.push(eventDetails);
        //He aconseguit fer la primera consulta i que a la pàgina de likes
        //apareguin les ids dels events per fer la segona consulta, però
        //no consegueixo fer que updatedLikes amb la segona consulta s'ompli.
      }
      });
      setLikesArray(updatedLikes);
      
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
}, []);

  if(likesArray === null){
     return <NoEvents/>
  }
     return (
      
    <ScrollView>
      <HeaderLikes />
      {console.log(likesArray)}
      <View style={styles.container}>
        {likesArray.map((event) => {
         <EventsSquare
         name = {event.name}
         image={event.image}
         />

         
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  }
});