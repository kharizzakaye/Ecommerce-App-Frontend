import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Home.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons"
import { Welcome } from "../components";

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24} />

                    <Text style={styles.location}>Tokyo, Japan</Text>

                    <View style={{ alignItems: "flex-end" }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>12</Text>
                        </View>

                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <ScrollView>
                <Welcome />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;