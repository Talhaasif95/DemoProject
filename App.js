/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import TextInput from '../DemoProject/Xomponent/textinput'
import { Picker } from 'native-base';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { CheckBox } from 'native-base'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '1', distance: '0', startAge: '1', endAge: '80', checked: true, milesSelected: true }
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}>
          <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
              <Image source={require('../DemoProject/assets/account.png')}
                resizeMode='contain' style={{ height: '50%', flex: 1 }} />

              <Image source={require('../DemoProject/assets/heart.png')}

                resizeMode='contain' style={{ flex: 4, height: '80%' }} />
              <Icon name={'message'} color='gray' type={'material'} containerStyle={{ flex: 1, height: '50%' }} />


            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
              <Icon type={'material'} color='gray' name={'keyboard-arrow-left'} />
              <Text style={{ fontSize: 20, color: 'gray' }}>Back</Text>
            </View>
            {/* Settings */}
            <Text style={{ fontSize: 25, color: 'red', marginVertical: 10, marginLeft: 30 }}>Settings</Text>

            <View style={{ width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 5, color: 'gray' }}>Account Settings</Text>
              <TextInput placeholder='Phone Number' keyboardType='phone-pad' />
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 5, color: 'gray' }}>Discovery Location</Text>
              <TextInput disabled placeholder={'choose'} />
            </View>

            <View style={{ width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 5, color: 'gray' }}>Show Me</Text>
              <Picker value={this.state.value} onValueChange={value => this.setState({ value })} selectedValue={this.state.value} style={{ backgroundColor: 'white', color: 'gray', borderRadius: 40 }}>
                <Picker.Item value='1' label="Women"></Picker.Item>
                <Picker.Item value='2' label="Men"></Picker.Item>

              </Picker>


            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 5, color: 'gray' }}>Maximum Distance</Text>
              <View style={styles.card}>
                <Text style={{ alignSelf: 'flex-start', marginLeft: 35, marginTop: 10 }}>{this.state.distance} mi</Text>
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: 'red',
                  }}
                  onValuesChange={this.nonCollidingMultiSliderValuesChange}
                  values={[0, 1]}
                  sliderLength={250}
                  min={0}
                  max={100}
                  step={10}
                  snapped
                  customMarker={() => (<View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'white' }}></View>
                  </View>)}
                />
              </View>
              <View style={{ width: '100%', alignSelf: 'center' }}>
                <Text style={{ margin: 5, color: 'gray' }}>Maximum Age</Text>
                <View style={styles.card}>
                  <Text style={{ alignSelf: 'flex-start', marginLeft: 35, marginTop: 10 }}>{this.state.startAge}-{this.state.endAge}</Text>
                  <MultiSlider
                    selectedStyle={{
                      backgroundColor: 'red',
                    }}
                    onValuesChange={this.ageChange}
                    values={[1, 80]}
                    sliderLength={250}
                    min={1}
                    max={79}
                    step={5}
                    snapped
                    customMarker={() => (<View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }}>
                      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'white' }}></View>
                    </View>)}
                  />
                </View>
              </View>
              {/*Checkbox */}
              <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <CheckBox color='red' checked={this.state.checked} onPress={() => this.setState({ checked: !this.state.checked })}></CheckBox>
                <Text style={{ marginLeft: 20, color: 'gray' }}>Show me on soulky</Text>
              </View>
            </View>
            {/* Button View  */}

            <View style={{ width: '80%', alignSelf: 'center' }}>
              <Text>Show distance in</Text>

              <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-evenly' }}>
                <TouchableHighlight onPress={() => this.setState({ milesSelected: true })}
                  style={this.state.milesSelected ? styles.solidButton : styles.hollowButton}><Text style={{ color: this.state.milesSelected ? 'white' : 'red' }}>mi</Text></TouchableHighlight>
                <TouchableHighlight onPress={() => this.setState({ milesSelected: false })} style={this.state.milesSelected ? styles.hollowButton : styles.solidButton}><Text style={{ color: this.state.milesSelected ? 'red' : 'white' }}>km</Text></TouchableHighlight>

              </View>
            </View>

          </View >
        </ScrollView>
      </SafeAreaView>
    );
  };
  nonCollidingMultiSliderValuesChange = values =>
    this.setState({ distance: values[1] })

  ageChange = values =>
    this.setState({ startAge: values[0], endAge: values[1] })
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f7f7', justifyContent: 'space-evenly' },
  header: {
    width: '100%', alignItems: 'center',
    flexDirection: 'row', backgroundColor: '#f7f7f7', height: 50,
    justifyContent: 'space-between'
  }
  , card: { backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }
  , hollowButton: { alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 2, height: 50, backgroundColor: '#f7f7f7', borderRadius: 30, flex: 0.45 }
  , solidButton: { alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', borderRadius: 30, height: 50, flex: 0.45 }

});

export default App;
