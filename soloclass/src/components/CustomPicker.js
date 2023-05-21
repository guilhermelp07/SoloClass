import { Picker } from "@react-native-picker/picker";
import Styles from "../styles/Styles";



export default function CustomPicker(props){
    return (
        <Picker
            style={Styles.picker}
            prompt={props.prompt}
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
        >
            {
                props.items.map((value, key) => {
                    return <Picker.Item key={key} value={key} label={value.description} />
                })
            }
        </Picker>
    );
}