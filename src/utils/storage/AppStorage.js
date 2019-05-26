import _ from "lodash";
import { AsyncStorage } from "react-native";

export default class AppStorage {
  constructor(key) {
    this.key = key;
  }

  async save(data: mixed) {
    try {
      await AsyncStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      console.error("AsyncStorage error: " + error.message);
    }
  }

  async fetch() {
    try {
      const item = await AsyncStorage.getItem(this.key);
      return JSON.parse(item);
    } catch (error) {
      console.error("AsyncStorage error: " + error.message);
    }
  }

  async clear() {
    try {
      await AsyncStorage.removeItem(this.key);
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }
}
