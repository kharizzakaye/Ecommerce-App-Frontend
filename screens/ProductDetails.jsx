import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const ProductDetails= ({navigation}) => {
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1)
        {
            setCount(count - 1);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="heart" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            <Image
                source={{uri: "https://www.ganeshtimberdepot.com/img/furniture.jpg"}}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Product</Text>

                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$250.00</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => (
                            <Ionicons key={index} name="star" size={24} color="gold" />
                        ))}

                        <Text style={styles.ratingText}> 4.9</Text>
                    </View>
                    
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons name="minus" size={20} />
                        </TouchableOpacity>

                        <Text style={styles.ratingText}> {count} </Text>
                        
                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons name="plus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Description
                    </Text>

                    <Text style={styles.descriptionText}>
                    Fusce mi nisl, euismod tempus consectetur sagittis, sodales id tortor. In vehicula nunc augue, a scelerisque risus dapibus in. Mauris ut mauris id odio ornare laoreet at non orci. Aliquam vitae nisl et lacus hendrerit bibendum. 
                    </Text>
                </View>

                <View style={{marginBottom: SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection: "row"}}>
                            <Ionicons name="location-outline" size={20} />
                            <Text>Tokyo</Text>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
                            <Text> Free Delivery</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
                        <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails;