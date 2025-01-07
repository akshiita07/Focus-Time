import * as React from 'react'; //to write javascript
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native'; //pull components to build UI

// import colors with hex codes:
import { colors } from './src/utils/colors';

// import focus code:
import { Focus } from './src/features/focus';

// import counter code:
import { Timer } from './src/features/timer';

// progress bar:
import { ProgressBar } from 'react-native-paper';

// import history:
import { FocusHistory } from './src/features/focusHistory';

//exports this one main function App:
export default function App() {
  // get that input that user_types:
  const [currentSubject, setCurrentSubject] = useState(null);
  // history of focus items:
  const [history, setHistory] = useState([]);

  return (
    // function body:
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        // <View>
        //   <Text style={styles.text}>Render Timer for {currentSubject}</Text>
        // </View>
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(currentSubject) => {setHistory([...history,currentSubject])}}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

//styles object:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:50, //to all 4 sides
    // paddingTop: Platform.OS==='ios'?50:100,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // backgroundColor:'#80c904',
    backgroundColor: colors.green,
  },
});
