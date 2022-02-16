import React, { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { InputGroup } from '../../components';
import { Toast } from '../../components/toast';
import { px_to_dp } from '../../utils/base';

export const Qrcode: FC = () => {
  const show = (type: 'success' | 'fail' | 'info' | 'loading' | 'hideLoading') => {
    type === 'hideLoading' ? Toast.hideLoading() : Toast.show({ text: type }, type);
  }
  return <View><Text>hello qrcode
  </Text>
    <InputGroup onSubmit={( captcha, cb ) => {
      console.log(captcha, 'ca')
      cb()
    }} />
  </View>
}

const styles = StyleSheet.create({

})