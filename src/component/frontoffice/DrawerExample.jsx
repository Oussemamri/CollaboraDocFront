import React, { useState, useRef } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  Box,
  IconButton, // Import IconButton
} from '@chakra-ui/react';
import { FcComments } from 'react-icons/fc'; // Import FcComments icon
import CommentComponent from './comment'; // Assuming you have the CommentComponent in a separate file

function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme='teal'
        aria-label="Open comments drawer"
        icon={<FcComments />}
        onClick={onOpen}
        position="absolute"
        top={4}
        right={4}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Comments</DrawerHeader>

          <DrawerBody>
            <CommentComponent />
          </DrawerBody>

          <DrawerFooter>
            <Box position="absolute" bottom={4} right={4}>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
