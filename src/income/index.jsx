import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

function AddIncomeScreen({ navigation }) {
    const [date, setDate] = useState(new Date(2023, 0, 1));
    const [nominal, setNominal] = useState('');
    const [keterangan, setKeterangan] = useState('');

    const resetDate = () => {
        setDate(new Date(2023, 0, 1));
    };

    const formatCurrency = (value) => {
        return 'Rp. ' + value.toLocaleString('id-ID');
    };

    const handleSimpan = () => {
        // Lakukan logika penyimpanan data pemasukan di sini
        // Anda dapat menggunakan state date, nominal, dan keterangan
        // Setelah data disimpan, Anda dapat kembali ke halaman sebelumnya (Home)
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tambah Pemasukan</Text>

            <Text style={styles.label}>Tanggal:</Text>
            <DatePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => setDate(selectedDate)}
            />

            <Text style={styles.label}>Nominal:</Text>
            <TextInput
                style={styles.input}
                value={formatCurrency(nominal)}
                onChangeText={(text) => setNominal(text.replace(/\D/g, ''))}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Keterangan:</Text>
            <TextInput
                style={styles.input}
                value={keterangan}
                onChangeText={(text) => setKeterangan(text)}
            />

            <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={resetDate}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSimpan}>
                <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddIncomeScreen;
