import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,SafeAreaView} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import React from 'react'
import {Camera} from 'expo-camera'

import CustomButton from "../../components/CustomButton";
import CustomPicker from "../../components/CustomPicker";
import CustomPickerColor from "../../components/CustomPickerColor";
import { pickerColors } from "../../components/ComponentData";
export default function CameraScreen(){
  let camera = Camera
    const [startCamera,setStartCamera] = React.useState(true)
    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState(null)
    const [flashMode, setFlashMode] = React.useState('off')
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
    const [ corDoSolo, setCorDoSolo ] = React.useState(0)

    
    const __handleFlashMode = () => {
     if (flashMode === 'on') {
       setFlashMode('off')
     } else if (flashMode === 'off') {
       setFlashMode('on')
     } else {
       setFlashMode('auto')
     }
  
   }
  
     const __switchCamera = () => {
      if (cameraType === 'back') {
        setCameraType('front')
      } else {
        setCameraType('back')
      }
    }
  
    const __startCamera = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      if (status === 'granted') {
        // start the camera
        Alert.alert('Access granted')
        setStartCamera(true)
      } else {
        Alert.alert('Access denied')
      }
    }
  
    const __takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCapturedImage(photo)
      savePhoto(photo)
    }
  
    const __retakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
      __startCamera()
    }

    const savePhoto = (photo) => {
      // TODO salvar no firebase
      // MediaLibrary.saveToLibraryAsync(photo['uri']).then(() => {
      //     setCapturedImage(photo);
      //     setPreviewVisible(true)
      // });
  }
    
  
    const CameraPreview = ({photo}) => {
      return (
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        >
          <ImageBackground
              source={{uri: photo && photo.uri}}
              style={{
                flex: 1
              }}
          >
          <Text style={{fontSize: 40}}>Cor: {corDoSolo}</Text>
          <View>
            <CustomPickerColor
              prompt="Cor do solo"
              selectedValue={corDoSolo}
              onValueChange={(itemValue, itemIndex) => setCorDoSolo(itemValue)}
              items={pickerColors}
              mode="dropdown"
            />
          </View>
            </ImageBackground>
        </View>
      )
    }
  
    return (
      previewVisible && capturedImage ? (
        // <CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={__retakePicture} />
        <CameraPreview photo={capturedImage} retakePicture={__retakePicture}></CameraPreview>
      ) : (
        <Camera
        type={cameraType}
        flashMode={flashMode}
        style={{flex: 1}}
        ref={(r) => {
        camera = r
        }}
        >
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
              }}
            >
              
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  alignItems: 'center'
                }}
              >      
               <TouchableOpacity
              onPress={__handleFlashMode}
              style={{
              position: 'absolute',
              left: '5%',
              top: '10%',
              backgroundColor: flashMode === 'off' ? '#000' : '#fff',
              borderRadius: 50,
              height: 25,
              width: 25
          }}
          >
              <Text
                  style={{
                  fontSize: 20
                  }}
              >
              ⚡️
              </Text>
          </TouchableOpacity>
                <TouchableOpacity
                  onPress={__takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
                <TouchableOpacity
      onPress={__switchCamera}
      style={{
      marginTop: 20,
      borderRadius: 50,
      height: 25,
      width: 25
      }}
     >
         <Text
             style={{
             fontSize: 20
             }}
             >
         {cameraType === 'front' ? '?' : '?'}
         </Text>
  </TouchableOpacity>
              </View>
            </View>
          </View>
        </Camera>
      )
    )
  }