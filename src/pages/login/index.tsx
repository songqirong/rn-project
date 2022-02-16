import React, { FC, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image, Input } from 'react-native-elements'
import { px_to_dp, valite_phone_number } from '../../utils/base';
import { useNavigation } from '@react-navigation/native';

export const LoginPage: FC = () => {

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valiteBol, setValiteBol] = useState<boolean>(true);
  const navgation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // 点击软键盘确定触发的提交事件
  const submit = async() => {
    const bol = valite_phone_number(phoneNumber);
    setValiteBol(bol);
    if(!bol) return;
    navgation.navigate('qrcode' as any)
  }

  return (
    <View>
      <Image source={ { uri: 'https://nest.persion.cn/static/rn/image/1642129449310.webp' } } containerStyle={styles.image} PlaceholderContent={<ActivityIndicator />} />
      <View >
        <Text style={styles.title}>手机号登录注册</Text>
        <Input
          placeholder='请输入你的手机号'
          maxLength={11}
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          keyboardType="phone-pad"
          onSubmitEditing={submit}
          inputStyle={styles.inputStyle}
          errorMessage={valiteBol ? '' : '手机号码格式不正确'}
          leftIcon={{ type: 'font-awesome', name: 'phone', size: px_to_dp(20), color: '#039FCC' }} autoCompleteType={undefined}        />
      </View>
    </View>
    
  )

}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: px_to_dp(200),
  },
  title: {
    padding: px_to_dp(20),
    fontSize: px_to_dp(20),
    color: '#039FCC',
    fontWeight: 'bold'
  },
  inputStyle: {
    color: '#333',
    letterSpacing: px_to_dp(1)
  }
})