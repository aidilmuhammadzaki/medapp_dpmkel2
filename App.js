const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Loginsuccess from "./screens/Loginsuccess";
import GetStarted2 from "./screens/GetStarted2";
import SubmitBtn from "./components/SubmitBtn";
import GetStarted from "./screens/GetStarted";
import AddToCart from "./screens/AddToCart";
import HomePage from "./screens/HomePage";
import Medicines from "./screens/Medicines";
import SelectAPlan from "./screens/SelectAPlan";
import Success from "./screens/Success";
import GetStarted1 from "./screens/GetStarted1";
import SelectAPlan1 from "./screens/SelectAPlan1";
import ProductPage from "./screens/ProductPage";
import UploadAPrescription from "./screens/UploadAPrescription";
import Checkout from "./screens/Checkout";
import Profile from "./screens/Profile";
import Notification1 from "./screens/Notification1";
import CartEmpty from "./screens/CartEmpty";
import Splash from "./screens/Splash";
import Verifyotp from "./screens/Verifyotp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Overpass-Regular": require("./assets/fonts/Overpass-Regular.ttf"),
    "Overpass-Medium": require("./assets/fonts/Overpass-Medium.ttf"),
    "Overpass-SemiBold": require("./assets/fonts/Overpass-SemiBold.ttf"),
    "Overpass-Bold": require("./assets/fonts/Overpass-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Abel-Regular": require("./assets/fonts/Abel-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loginsuccess"
              component={Loginsuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted2"
              component={GetStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToCart"
              component={AddToCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Medicines"
              component={Medicines}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectAPlan"
              component={SelectAPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted1"
              component={GetStarted1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectAPlan1"
              component={SelectAPlan1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductPage"
              component={ProductPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadAPrescription"
              component={UploadAPrescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartEmpty"
              component={CartEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verifyotp"
              component={Verifyotp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
