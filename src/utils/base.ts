import { AppRegistry, Dimensions } from 'react-native';

/**
 * 屏幕的宽度
 */
export const screen_width = Dimensions.get("window").width;

/**
 * 屏幕的高度
 */
export const screen_height = Dimensions.get("window").height;

/**
 * 将px转换为dp
 * @param { Number } px 元素的宽度或高度
 * @returns 
 */
export const px_to_dp = (px: number) => screen_width * px / 375;

/**
 * 校验手机号
 * @param {String} phone 要校验的手机号
 * @returns 
 */
export const valite_phone_number = (phone: string) => /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(phone);



