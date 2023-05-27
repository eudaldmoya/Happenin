import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View, Image } from "react-native";
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
  if (likesArray === null || !likesArray || likesArray.length === 0) {
    return (
      <View>
        <HeaderLikes />
        <View style={styles.resultsText}>
          <Image
            source={require("../assets/NOLIKES.png")}
            style={styles.likesImg}
          />
          <Text style={styles.textBold}>No liked events</Text>
          <Text style={styles.textNormal}>
            Start looking around to find events you might like.
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <ScrollView>
        <HeaderLikes />
        <View style={styles.container}>
          {likesArray.map((event) => (
            <View style={styles.card}>
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
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 30,
    margin: 40,
  },
  card: {},
  resultsText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: 30,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    paddingTop: 10,
  },
  textNormal: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8a8a8a",
    textAlign: "center",
    paddingTop: 5,
  },
  likesImg: {
    aspectRatio: 751 / 659,
    height: "52.5%",
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
