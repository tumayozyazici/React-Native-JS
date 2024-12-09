import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from "../api/yelp";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultShowScreen({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async () => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.icons}>
                {result.is_closed ? <AntDesign name="closecircleo" size={30} color="black" /> : <MaterialIcons name="delivery-dining" size={30} color="black" />}
            </View>
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        margin: 10,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        marginVertical: 10
    },
    phone: {
        alignSelf: 'center',
        fontSize: 20
    },
    icons:{
        alignSelf:'center'
    }
})