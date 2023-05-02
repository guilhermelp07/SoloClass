import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import React from 'react'
import {Camera} from 'expo-camera'



import CustomButton from "../../components/CustomButton";
export default function CameraScreen(){
    const [startCamera,setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState(null)
    const [flashMode, setFlashMode] = React.useState('off')
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
    
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
    }
  
    const __retakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
      __startCamera()
    }
    
  
    const CameraPreview = ({photo}) => {
      console.log('sdsfds', photo)
      return (
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            width: '100%',
            height: '100%'
          }}
        >
          <ImageBackground
            source={{uri: photo && photo.uri}}
            style={{
              flex: 1
            }}
          />
        </View>
      )
    }
  
    return (
      
      previewVisible && capturedImage ? (
        // <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
        <CameraPreview photo={capturedImage} retakePicture={__retakePicture} />
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
              borderRadius: '50%',
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
      borderRadius: '50%',
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      }
});