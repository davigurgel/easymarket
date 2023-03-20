import React, { useState } from 'react';
import { Camera } from 'react-native-vision-camera';
import Button from '~/components/Button/Button';

import CameraFrame from '~/components/CameraFrame/CameraFrame';
import { Card } from '~/components/Card/Card';
import Input from '~/components/Input/Input';
import Separator from '~/components/ListItem/Separator';
import {
  CameraContainer,
  Container,
  FormContainer
} from './styles';

const CreateList: React.FC = () => {
  const [activeCamera, setActiveCamera] = useState(false)
  const [cameraText, setCameraText] = useState(null)

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
    <Container>
      <Card>
        <FormContainer>
          <Input
            label='Label'
          />
          <Input
            label='Label'
          />
          <Input
            label='Label'
            icon='md-camera-sharp'
            iconPress={handleCamera}
          />
          <Separator />
          <Button label='Adicionar' onPress={() => {}} />
        </FormContainer>
      </Card>
      {
      activeCamera && (
        <CameraContainer>
          <CameraFrame
            enableCamera={activeCamera}
            onClose={handleCamera}
            handleText={handleCameraValue}
          />
        </CameraContainer>
      )
    }
    </Container>
  );
}

export default CreateList;
