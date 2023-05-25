import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import HeaderLikes from "../components/HeaderLikes";
import NoEvents from "../components/NoEvents";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import EventSquareQueryWrapper from "../components/EventSquareQueryWrapper";

export default function LikesScreen() {
  const [likesArray, setLikesArray] = useState(null);
  user = getAuth().currentUser.uid;

  useEffect(() => {
    const q = query(collection(db, "Likes"), where("userId", "==", user));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedLikes = [];
      querySnapshot.forEach((doc) => {
        updatedLikes.push(doc.data().eventId);
      });
      setLikesArray(updatedLikes);
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, []);
  const i = 0;
  if (likesArray === null || !likesArray) {
    return <NoEvents />;
  }
  return (
    <ScrollView>
      <HeaderLikes />
      {console.log("heey" + likesArray)}
      <View /*style={styles.container}*/>
        {likesArray.map((event) => (
          <View>
            <EventSquareQueryWrapper
              key={Math.random()
                .toString(36)
                .substring(2, event + 2)}
              eventId={event}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

/*Al useEffect fa una primera consulta per agafar tots els likes que 
  corresponen a la sessió actual (A cada un d'aquests likes hi ha 
  un userId i eventId associats). 
  Seguidament, per cada un d'aquests documents fa una segona consulta
  amb la eventId per busca l'event guardat a una altra col·lecció
  i recollir nom i imatge per renderitzar a la pàgina yourlikes
  

  const eventDocRef = doc(db, "Events", doc.id);
  const eventDocSnapshot = await getDoc(eventDocRef);
  if (eventDocSnapshot.exists()) {
          const eventData = eventDocSnapshot.data();
          const eventDetails = {
            eventId: doc.id,
            name: eventData.name,
            image: eventData.image
        
          
          //He aconseguit fer la primera consulta i que a la pàgina de likes
          //apareguin les ids dels events per fer la segona consulta, però
          //no consegueixo fer que updatedLikes amb la segona consulta s'ompli.
        }
  updatedLikes.push(eventDetails);
  
  
  */
