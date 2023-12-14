import React from 'react';
import { requireNativeComponent, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; //GMap

//const TMap = requireNativeComponent('TMap', null); //TMap

function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <TMap style={{ flex: 1 }} setCenter={[127.0, 37.0]} /> */} {/* TMap */}
        <MapView //GMap
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37,
            longitude: 127,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>
    </>
  );
}

export default App;
