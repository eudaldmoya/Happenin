import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BuyBtn from "./BuyBtn";

export default function EventTickets({ saleState }) {
  return (
    <View style={styles.container}>
      <View style={styles.tickets}>
        <Text style={styles.title}>Tickets</Text>
        <Text style={styles.text}>{saleState}</Text>
      </View>
      <BuyBtn style={styles.buyBtn} buyLink={'https://blog.ticketmaster.es/primavera-sound/'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  tickets: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
  },
  buyBtn: {
    alignSelf: 'flex-start',
  }
});
