import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View>
      <Text style={style.header}>Name: {country.name.common}</Text>
      <Image
      source={{
          uri: country.flags.png
      }}
      style={{width:200, height: 200}}
      ></Image>
    </View>
  )
}

const style = StyleSheet.create({
    header: {
        marginTop: 40,
        fontSize: 30,
        color: 'blue'
    }
})