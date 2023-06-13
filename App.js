// import React from "react";
// import RadarChart from "./SpiderGraph";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <RadarChart
//         graphSize={400}
//         scaleCount={3}
//         numberInterval={3}
//         data={[
//           {
//             BENIFIT: 1,
//             RISK: 1,
//             ASSUMPTION: 1,
//             ISSUE: 1,
//             DEPENDENCY: 0,
//             REQUIREMENT: 0,
//             DELIVERABLE: 1,
//             CHANGE: 1,
//             ACTION: 1,
//             MILESTONE: 1,
//             COSY: 0

//           },
//           {
//             BENIFIT: 1,
//             RISK: 1,
//             ASSUMPTION: 1,
//             ISSUE: 1,
//             DEPENDENCY: 0,
//             REQUIREMENT: 0,
//             DELIVERABLE: 1,
//             CHANGE: 1,
//             ACTION: 1,
//             MILESTONE: 0.2,
//             COSY: 0

//           },
//         ]}
//         options={{
//           graphShape: 1,
//           showAxis: true,
//           showIndicator: true,
//           colorList: ["green", "red"],
//           dotList: [false, false],
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';

import { MotiView } from 'moti';
const App = () => {
  const data = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      price: '$100',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      price: '$110',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      price: '$90',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 4,
      name: 'Lorem Ipsum',
      price: '$95',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 5,
      name: 'Lorem Ipsum',
      price: '$115',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 6,
      name: 'Lorem Ipsum',
      price: '$120',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 7,
      name: 'Lorem Ipsum',
      price: '$100',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 8,
      name: 'Lorem Ipsum',
      price: '$99',
      image: require('./assets/image1.jpg'),
    },
    {
      id: 9,
      name: 'Lorem Ipsum',
      price: '$130',
      image: require('./assets/image1.jpg'),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <MotiView
        style={styles.listContainer}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1000 + index * 200 }}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={{ paddingBottom: 10 }}>

        </View>
      </MotiView>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: undefined, aspectRatio: 1 },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#62513E',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});