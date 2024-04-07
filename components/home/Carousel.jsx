import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
    const slides = [
        "https://www.intagliahome.com/ih-content/uploads/2016/12/STEVENS_16399-94RM.jpg",
        "https://th.bing.com/th/id/R.66577a966aec9a500599b38ca330d6e5?rik=gkE%2bGRVnbX%2fMDQ&riu=http%3a%2f%2fwww.daxertrading.com%2fwp-content%2fuploads%2f2017%2f11%2fHeadland-311-seater.jpg&ehk=Hk1vzpQJ1LfIlTnaQk0S7UagOx2cfqIe%2bsJs24Gh3qs%3d&risl=&pid=ImgRaw&r=0",
        "https://www.ganeshtimberdepot.com/img/furniture.jpg",
    ];
    
    return (
        <View style={styles.carouselContainer}>
            <SliderBox 
                images={slides}
                dotColor = {COLORS.primary}
                inactiveDotColor = {COLORS.secondary}
                ImageComponentStyle = {{
                    borderRadius: 15,
                    width: "95%",
                    marginTop: 15
                }}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    }
});