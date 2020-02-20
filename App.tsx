import React from 'react';
import { SafeAreaView, createAppContainer } from 'react-navigation';
import Main from './src/Components/Main/Main';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { combineReducers, createStore } from 'redux';
import {screenReducer} from './src/common/reducer';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  screen: screenReducer
})

const configureStore = () => {
  return createStore(rootReducer);
}

const store = configureStore();

console.log(store.getState())
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
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#fff'}} forceInset={{ top: 'always', bottom: 'always' }}>
          <Main/>
        </SafeAreaView>
      </Provider>
    );
  }
  
}

export default App;