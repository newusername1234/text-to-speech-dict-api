import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
// import Owlbot from 'owlbot-js';
// import Tts from 'react-native-tts';


// const client = Owlbot('4a91fb7f13edab4ceec6bf3e241ab2e679eb09c8');

// import Sound from 'react-native-sound';
import axios from 'axios';

// client.define('owl').then(function(result){
//   console.log(result);
// });

const ENDPOINT = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/sensei?key=039b95f8-c753-495b-8af0-5bf5f110cde2`;

// curl --header "Authorization: Token 4a91fb7f13edab4ceec6bf3e241ab2e679eb09c8" https://owlbot.info/api/v4/dictionary/owl -s | json_pp

// An audio reference URL should be in the following form: 
// https://media.merriam-webster.com/soundc11/[subdirectory]/[base filename].wav 
// where [base filename] equals the value of audio, and [subdirectory] is determined as follows:

// if audio begins with "bix", the subdirectory should be "bix",
// if audio begins with "gg", the subdirectory should be "gg",
// if audio begins with a number or punctuation (eg, "_"), the subdirectory should be "number",
// otherwise, the subdirectory is equal to the first letter of audio.
// For example, the URL for the object {"audio":"3d000001","ref":"c","stat":"1"} in the entry "3-D" would be: 
// https://media.merriam-webster.com/soundc11/number/3d000001.wav

///////////////////////////////////////////////////////////////

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      partOfSpeech: '',
      // example: '',
      // subDirectory: '',
      // baseFilename: ''
    }
  }

  render() {
    this.makeApiRequest();
    return (
      <View syle={{flex: 1}}>
        <Text>{this.state.word}</Text>
        <Button title='Word' onPress={this.sayWord} />
        <Button title='Definition' onPress={this.sayDefinition} />
        <Button title='Part of Speech' onPress={this.sayPartOfSpeech} />
        {/* <Button title='Example' onPress={this.sayExample} /> */}
        {/* <Button title='Api Request' onPress={this.makeApiRequest} /> */}
        {/* <Text>{this.state.example}</Text> */}
      </View>
    );
  }

  sayWord = () => {
    let thingToSay = this.state.word;
    Speech.speak(thingToSay);
  }

  sayPartOfSpeech = () => {
    let thingToSay = this.state.partOfSpeech;
    Speech.speak(thingToSay);
  }

  sayDefinition = () => {
    let thingToSay = this.state.definition;
    Speech.speak(thingToSay);
  }

  sayExample = () => {
    let thingToSay = this.state.example;
    Speech.speak(thingToSay);
  }

  makeApiRequest = () => {
    axios.get(ENDPOINT)
        .then(r => {
          this.setState({
            word: r.data[0].meta.id,
            definition: r.data[0].shortdef[0],
            partOfSpeech: r.data[0].fl,
            // example: r.data[0].suppl.examples[0].t,
            // subDirectory: r.data[0].hwi.prs[0].sound.audio.slice(0, 1),
            // baseFilename: r.data[0].hwi.prs[0].sound.audio
          }, () => console.log(r.data[0]));
        })
    }
}



// export default class App extends Component {
  
  
  // render() {
  //   <View>
  //     <View>
  //       hi
        {/* {this.state.definition && <View>{this.state.definition}</View>}
        {this.state.partOfSpeech && <View>{this.state.partOfSpeech}</View>}
        <Button style={{backgroundColor: 'yellow', borderRadius: 20, height: 50, width: 75}} onClick={this.makeAjaxRequest}>Gimme the word</Button> */}
      // </View>
      {/* <View>
        <Button title="Press to hear some words" onPress={this.speak} />
      </View> */}
      {/* <View>
        <Button title="Play sound" onPress={this.playTrack} />
      </View> */}
  //   </View>
  // };

  

  // playTrack = () => {
  //   let soundfile = `https://media.merriam-webster.com/soundc11/${this.state.subDirectory}/${this.state.baseFilename}.wav`;
  //   const track = new Sound(soundfile, null, (e) => {
  //     if (e) {
  //       console.log('error loading track:', e)
  //     } else {
  //       track.play()
  //     }
  //   })
  // }



          // switch(r.data[0].hwi.prs[0].sound.audio.slice(0, 2)) {
          //   case "bix":
          //     this.setState({
          //       word: r.data[0].meta.id,
          //       audio: r.data[0].hwi.prs[0].sound,
          //       subDirectory: "bix",
          //       baseFilename: r.data[0].hwi.prs[0].sound.audio
          //     });
          //     break;
          //   case /gg./:
          //     this.setState({
          //       word: r.data[0].meta.id,
          //       audio: r.data[0].hwi.prs[0].sound,
          //       subDirectory: "gg",
          //       baseFilename: r.data[0].hwi.prs[0].sound.audio
          //     });
          //     break;
          //   case "3d0":
          //     this.setState({
          //       word: r.data[0].meta.id,
          //       audio: r.data[0].hwi.prs[0].sound,
          //       subDirectory: "number",
          //       baseFilename: r.data[0].hwi.prs[0].sound.audio
          //     });
          //   default:
          //     console.table(this.state);
          //     console.log(r.data);
          //     break;
          // }


// }
