import React from 'react';
import { SafeAreaView, createAppContainer } from 'react-navigation';
import Main from './src/Components/Main/Main';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          'Roboto': require('./src/assets/font/Roboto-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView style={{flex: 1, position: 'relative'}} forceInset={{ top: 'always', bottom: 'always' }}>
        <Main/>
      </SafeAreaView>
    );
  }
  
}

export default App;