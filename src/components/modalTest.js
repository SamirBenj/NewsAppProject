import React from 'react'
import { Button, Text, View } from 'react-native'
import { useModal } from 'react-native-modalfy'

const Message = () => {
  const { openModal } = useModal()

  const sendMessage = () => openModal();

  return (
    <View>
      <Text>Just press send!</Text>
      <Button onPress={sendMessage} title="Send" />
    </View>
  )
}

export default Message
