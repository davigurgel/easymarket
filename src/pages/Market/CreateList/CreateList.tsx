import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Box, Button, Center, Input, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'react-native-vision-camera';

import CameraFrame from '~/components/CameraFrame/CameraFrame';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateList: React.FC = () => {
  const [activeCamera, setActiveCamera] = useState(false)
  const [cameraText, setCameraText] = useState<any>(null)

  const handleCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus()

    if (cameraPermission !== 'authorized') {
      await Camera.requestCameraPermission();
      setActiveCamera((state) => !state)
    }

    if (cameraPermission === 'authorized') {
      setActiveCamera((state) => !state)
    }
  }

  const handleCameraValue = (value: any) => {
    setCameraText(value)
  }

  return (
    <View style={styles.container}>
      <Center>
        <Box w="60%" alignItems="center" backgroundColor="white" p="8">
          <Box w="100%">
            <Box mb="3">
              <Text>Quantidade:</Text>
              <Input
                placeholder="Input"
                w="100%"
              />
            </Box>
            <Box>
              <Text>Valor:</Text>
              <Input
                placeholder="Input"
                w="100%"
                value={cameraText || ''}
                InputRightElement={
                  <Button
                    variant="solid"
                    size="xs"
                    rounded="none"
                    h="full"
                    onPress={handleCamera}
                  >
                    <Ionicons name="md-camera-sharp" size={24} color="white" />
                  </Button>
                }
              />
            </Box>
          </Box>
        </Box>
      </Center>
    {
      activeCamera && (
        <View style={styles.cameraContainer}>
          <CameraFrame
            enableCamera={activeCamera}
            onClose={handleCamera}
            handleText={handleCameraValue}
          />
        </View>
      )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  cameraContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    zIndex: 99,
    width: windowWidth,
    height: windowHeight
  }
})

export default CreateList;
