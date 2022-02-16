import React, { FC, useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputKeyPressEventData, View } from 'react-native';
import { Toast } from '..';
import { px_to_dp } from '../../utils/base';

interface IProps{
  onSubmit: (captcha: string, errorCallback: () => void) => any;
}

export const InputGroup: FC<IProps> = (props) => {

  const { onSubmit } = props;
  const [editeIpt, setEditeIpt] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const Ref = useRef(null);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);

  useEffect(() => {
    const len = value.length;
    if(len >= 6){
      onSubmit(value, error_callback);
    } else {
       len > 0 && (iptArr[len].ref.current as any).focus();
    }
  }, [value])

  useEffect(() => {
    console.log(editeIpt, 'edi')
  }, [editeIpt])


  const iptProps = {
    style: styles.ipt,
    maxLength: 1,
  }

  const error_callback = () => {
    setValue('');
    setEditeIpt(0);
    Toast.fail({ text: '验证码错误' })
  }

  const onChange = (val: string) => {
    setValue(value+val);
    setEditeIpt(value.length + 1);
  } 

  const keyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const { key } = e.nativeEvent;
    if(key === 'Backspace'){
      console.log(key, value)
      if(value.length === 0) return;
      setEditeIpt(value.length - 1)
      setValue(value.substring(0, value.length - 1));
    }
    return;
  }

  const iptArr = [
    { ref: Ref },
    { ref: Ref1 },
    { ref: Ref2 },
    { ref: Ref3 },
    { ref: Ref4 },
    { ref: Ref5 },
  ]

  const getIpts = () => iptArr.map((item, i) => (
    <TextInput 
      { ...iptProps } 
      ref={item.ref} 
      key={i}
      autoFocus={ i === 0}
      value={value.substring(i, i+1)}
      keyboardType='number-pad' 
      onChangeText={onChange}
      editable={editeIpt === i}
      onKeyPress={keyPress}
    />
  ))

  return (
    <View style={ styles.iptGroup } >
      { getIpts() }

    </View>
  )
}
 
const styles = StyleSheet.create({
  iptGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ipt: {
    width: px_to_dp(40),
    height: px_to_dp(40),
    fontSize: px_to_dp(20),
    fontWeight: '500',
    color: '#333',
    borderBottomWidth: px_to_dp(2),
    borderBottomColor: "#ccc",
    textAlign: 'center',
  }
})