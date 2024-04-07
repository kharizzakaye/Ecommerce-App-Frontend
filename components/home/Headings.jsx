import React from "react";
import styles from "./headings.styles";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Headings = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Arrivals</Text>

                <TouchableOpacity>
                    <Ionicons
                        name="grid"
                        size={24}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Headings;