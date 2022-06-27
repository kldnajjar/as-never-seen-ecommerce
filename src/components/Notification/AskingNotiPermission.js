import * as Notifications from "expo-notifications";

const AskingNotificationPermissonToken = async () => {
  try {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) return;

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } catch (error) {
    console.log("Error getting a push token ", error);
  }
};

export default AskingNotificationPermissonToken;
