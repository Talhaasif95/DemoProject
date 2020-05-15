/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TextInput,
    Text,
    StatusBar,
} from 'react-native';

const textInput = (props) => {
    return (
        <View style={{ elevation: 5 }}>
            <TextInput keyboardType={props.keyboardType} placeholder={props.placeholder} style={{ padding: 10, borderRadius: 40, shadowColor: 'black', shadowRadius: 4, shadowOffset: { width: 4, height: 4 }, elevation: 4, backgroundColor: 'white', height: 40, width: '100%', alignSelf: 'flex-start' }}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: {
        width: '100%', alignItems: 'center',
        flexDirection: 'row', backgroundColor: 'black', height: 50,
        justifyContent: 'space-between'
    }

});

export default textInput;
