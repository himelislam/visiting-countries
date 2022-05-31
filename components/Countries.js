import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country';

export default function countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setSearched(data)
            })
    }, []);

    const handleSearch = text =>{
        const filterd = countries.filter(country=> country.name.common.includes(text));
        setSearched(filterd);
    }
    return (
        <View>
            <Text style={styles.header}>countries{searched.length}</Text>
            <TextInput
            style={styles.input}
            onChangeText={handleSearch}
            ></TextInput>
            <ScrollView>
                {
                    searched.map(country => <Country key={country.car.ccn3} country={country}></Country>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        fontSize: 30,
        color: 'blue'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})