import React from "react";
import styles from "./ProductCardView.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const ProductCardView = () => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails")}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: "https://www.ganeshtimberdepot.com/img/furniture.jpg"}}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product Name</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Product Name</Text>
                    <Text style={styles.price}>$500.00</Text>
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Ionicons
                        name="add-circle"
                        size={35}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView;