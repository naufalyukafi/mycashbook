import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.summaryTitle}>Rangkuman Bulan Ini</Text>
            <Text style={styles.summaryText}>Pengeluaran: Rp. 500.000</Text>
            <Text style={styles.summaryText}>Pemasukan: Rp. 1.500.000</Text>

            <View style={styles.imageButtonContainer}>
                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/pemasukan.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>Tambah Pemasukan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/pengeluaran.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>Tambah Pengeluaran</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/cashflow.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>Detail Cash Flow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/setting.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.imageText}>Pengaturan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    summaryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 16,
        marginBottom: 10,
    },
    imageButtonContainer: {
        flexDirection: 'row',
    },
    imageButton: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    imageText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
