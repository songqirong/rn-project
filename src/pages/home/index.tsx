import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { fetch_playlist_hot } from '../../api/home';

export const HomePage: FC = () => {
  useEffect(() => {
    fetchMusic()
  }, [])
  const fetchMusic = async() => {
    const res = await fetch_playlist_hot({})
    console.log(res, 'res')
  }
  return (
    <View style={{ backgroundColor: 'pink', height: 200, width:200 }}><Text>homepage</Text></View>
  )
}