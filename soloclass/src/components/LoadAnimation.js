import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function LoadAnimation(props){
    return (
        <AnimatedLoader
            visible={props.visible}
            overlayColor="rgba(255,255,255,0.5)"
            animationStyle={styles.lottie}
            speed={1.5}
            source={require('../../assets/animations/126444-seeds.json')}
        />
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: 160,
        height: 160
    }
});