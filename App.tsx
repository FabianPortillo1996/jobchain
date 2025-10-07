import 'react-native-gesture-handler';

import { StatusBar, useColorScheme, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { COLORS } from './src/core/theme/theme';
import { InputCustom } from './src/core/components/input/input-custom';
import { scaleSize } from './src/core/theme/mixins';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider style={{ flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: scaleSize(20),
          }}
        >
          <InputCustom />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
