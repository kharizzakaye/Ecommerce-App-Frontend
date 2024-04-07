import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: -SIZES.extraSmall,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: "semiBold",
        fontSize: SIZES.extraLarge -2,

    }
});

export default styles;