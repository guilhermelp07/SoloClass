import { Picker } from "@react-native-picker/picker";
import Styles from "../styles/Styles";
import React from 'react'

export default function CustomPickerColor(props){
    const [ corDoSolo, setCorDoSolo ] = React.useState("black")

    return (
        <Picker
            style={{height: 90,
                width: 200,
                backgroundColor:props.items[props.selectedValue]["color"]}}
            prompt={props.prompt}
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
            mode={props.mode}
        >
            {
                props.items.map((value, key) => {
                    return <Picker.Item key={key} value={key} color={value.color} label={value.color}/>
                })
            }
        </Picker>
    );
}