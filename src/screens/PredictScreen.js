import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';

export default function PredictScreen({ route }) {
  const { photoUri, prediction } = route.params;
  const [ResultText,setResultText] = useState('');
  const [SuggestionText,setSuggestionText] = useState('');
  const [inputText, setInputText] = useState('My Plant');
  const windowWidth = Dimensions.get('window').width;


  useEffect(() => {
    if (prediction === 'Black_Rot') {
      setResultText("Your plant has Black Rot disease.");
      setSuggestionText("You can change and renew the soil of your plant.");
    } else if (prediction === 'Scab') {
      setResultText("Your plant has Scab disease.");
      setSuggestionText("Remove diseased leaves regularly. Keep the plant away from humid environments and excessive watering.");
    } else if (prediction === 'Cedar_Rust') {
      setResultText("Your plant has Cedar Rust disease.");
      setSuggestionText("Prevent the spread of the disease by regularly ventilating the plant's environment and exposing it to sunlight.");
    } else {
      setResultText("Your plant is Healthy.");
      setSuggestionText("Your plant is in fine conditions. You can continue your habits.");
    }
  }, [prediction]);
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Fotoğraf */}
      <View style={{ width: windowWidth - 40, height: windowWidth - 40, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Image source={{uri: photoUri}} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </View>

      {/* Text Input */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 3, borderColor: 'green', borderRadius: 10, width: windowWidth - 40,marginTop:30 }}>
          <TextInput
            style={{ flex: 1, fontSize: 18, fontWeight: 'bold', padding: 10, height: 50, textAlign: 'center' }}
            placeholder="Enter your text here"
            value={inputText}
            onChangeText={setInputText}
          />
          {/* İkon */}
          <Image source={require('../../assets/editing.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
        </View>
      </View>

      {/* Result ve Suggestions */}
      <View style={{ backgroundColor: '#E3EFE9', borderRadius: 10, padding: 10, width: windowWidth - 40, marginBottom: 20,marginTop:20 }}>
        {/* Result */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }}>Result</Text>
          <Text style={{ fontSize: 16}}>{ResultText}</Text>
        </View>

        {/* Suggestions */}
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', marginBottom: 10 }}>Suggestions</Text>
          <Text style={{ fontSize: 16}}>{SuggestionText}</Text>
        </View>
      </View>

      {/* Save Butonu */}
      <TouchableOpacity style={{ width: 70, padding: 10, backgroundColor: 'green', borderRadius: 5,marginTop:20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
