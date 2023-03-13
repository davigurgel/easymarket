import React, { createRef } from 'react'
import { AlertDialog, Button } from 'native-base';

type DialogProps = {
  text: string,
  isOpen: boolean,
  onConfirm: () => void,
  onClose: () => void,
}

export const dialogRef = createRef()

const Dialog = ({text, isOpen, onConfirm, onClose}: DialogProps) => {
  return (
    <AlertDialog leastDestructiveRef={dialogRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Body>
          {text}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={dialogRef}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={onConfirm}>
              Sim
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}

export default Dialog
