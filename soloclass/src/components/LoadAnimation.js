import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function LoadAnimation(props){
    return (
        <AnimatedLoader
            visible={props.visible}
            overlayColor="rgba(255,255,255,0.5)"
            animationStyle={styles.lottie}
        />
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});