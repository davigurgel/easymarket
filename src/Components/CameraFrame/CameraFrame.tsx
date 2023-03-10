import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';
import { IconButton } from 'native-base';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import { Ionicons } from '@expo/vector-icons';
import { scanOCR } from 'vision-camera-ocr';
import * as REA from 'react-native-reanimated';
import { Svg, Rect } from 'react-native-svg';

import Loading from '../Loading/Loading';
import Dialog from '../Dialog/Dialog';

type CameraProps = {
  enableCamera: boolean,
  onClose: () => void,
  handleText: (value:number | null | string) => void
}

const scanRegion = {
  left: 5,
  top: 40,
  width: 90,
  height: 10
}

const COLOR = '#00fff5'
const windowWidth = Dimensions.get('window').width;

const CameraFrame = ({enableCamera, onClose, handleText}: CameraProps) => {
  const [isFlashOn, setIsFlashOn] = useState(false)
  const [text, setText] = useState<number | null | string>(null)
  const [showDialog, setShowDialog] = useState(false)
  const dialogVisible = REA.useSharedValue(false);

  const [frameWidth, setFrameWidth] = React.useState(1280);
  const [frameHeight, setFrameHeight] = React.useState(720);

  const devices = useCameraDevices()
  const device = devices.back

  const updateFrameSize = (width:number, height:number) => {
    if (width != frameWidth && height!= frameHeight) {
      setFrameWidth(width);
      setFrameHeight(height);
    }
  }

  const getFrameSize = ():{width:number,height:number} => {
    return {width:frameWidth,height:frameHeight};
  }

  const getViewBox = () => {
    const frameSize = getFrameSize();
    const viewBox = "0 0 "+frameSize.width+" "+frameSize.height;
    return viewBox;
  }

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';

    if (dialogVisible.value === false) {
      REA.runOnJS(updateFrameSize)(frame.width, frame.height);

      const data = scanOCR(frame);
      const number = data.result.text.replace(/[^\d, \./,\,/]+/g,'')

      if (number !== '') {
        REA.runOnJS(setText)(number);
        dialogVisible.value = true;
        REA.runOnJS(setShowDialog)(true);
      }
    }
  }, [])

  const handleFlash = () => {
    setIsFlashOn((state) => !state)
  }

  if (!device) {
    return (
      <Loading
        size='large'
        color={COLOR}
      />
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.options}>
          <IconButton
            onPress={onClose}
            size={12}
            variant='ghost'
            _icon={{
              as: Ionicons,
              name: 'close',
              size: 8,
              color: '#fff'
            }}
          />
          <IconButton
            onPress={handleFlash}
            colorScheme='cyan'
            size={12}
            variant='solid'
            rounded='full'
            _icon={{
              as: Ionicons,
              name: isFlashOn ? 'ios-flash-off' : 'ios-flash',
              size: 6,
            }}
          />
        </View>
        <Camera
          style={styles.camera}
          isActive={enableCamera}
          device={device}
          torch={isFlashOn ? 'on' : 'off'}
          frameProcessor={frameProcessor}
          frameProcessorFps={1}
        />
        <Svg preserveAspectRatio='xMidYMid slice' style={StyleSheet.absoluteFill} viewBox={getViewBox()}>
          <Rect
            x={scanRegion.left/100*getFrameSize().width}
            y={scanRegion.top/100*getFrameSize().height}
            width={scanRegion.width/100*getFrameSize().width}
            height={scanRegion.height/100*getFrameSize().height}
            strokeWidth="2"
            stroke="red"
          />
        </Svg>
      </View>
      <Dialog
        text={`O valor do produto é ${text}?`}
        isOpen={showDialog}
        onConfirm={() => {
          setShowDialog(false)
          dialogVisible.value = false
          handleText(text)
          onClose()
        }}
        onClose={() => {
          setShowDialog(false)
          dialogVisible.value = false
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  options: {
    height: 20,
    width: windowWidth,
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  capture: {
    height: 50,
    width: windowWidth,
    position: 'absolute',
    bottom: 70,
    left: 0,
    zIndex: 999,
    alignItems: 'center'
  },
  camera: {
    flex: 1
  }
})

export default CameraFrame;
