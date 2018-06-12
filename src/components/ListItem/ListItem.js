import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    placeImage: {
        marginRight: 8,
        width: 70,
        height: 70
    }
});

export default listItem;