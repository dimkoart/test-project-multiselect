import { StyleSheet, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function HomeScreen() {
  const [imageUri, setImageUri] = useState(null);

  const pickMultipleImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
        quality: 0.8,
      });

      if (!result.canceled) {
        const uris = result.assets.map((img) => img.uri);
        console.log(uris);
        setImageUri(uris);
      }
    } catch (err) {
      console.log("Error picking images:", err);
    }
  };
  return (
    <View style={styles.containerStyle}>
      <Button title="Pick Images" onPress={pickMultipleImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
});
