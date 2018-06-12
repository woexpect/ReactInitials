import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class PlaceInput extends React.Component {

    state = {
        placeName: ""
    };

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ width: "80%" }}
                    placeholder="Agregar lugares"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                />
                <Button
                    title="Agregar"
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
