import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.styles";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons"

const Welcome = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText(COLORS.black, SIZES.extraSmall)}>{" "}Find the most</Text>
                <Text style={styles.welcomeText(COLORS.primary, 0)}>{" "}Luxurious furniture</Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>

                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => {}}
                        placeholder="What are you looking for?"
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchButton}>
                        <Ionicons 
                            name="camera-outline"
                            size={SIZES.extraLarge}
                            color={COLORS.offWhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default Welcome;