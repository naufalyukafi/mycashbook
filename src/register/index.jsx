import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config/db';

function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        db.transaction((tx) => {
            // Lakukan INSERT data pengguna ke dalam tabel users
            tx.executeSql(
                'INSERT INTO users (username, password) VALUES (?, ?);',
                [username, password],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        alert('Registrasi berhasil!');
                        navigation.navigate('Login'); // Navigasi ke halaman login setelah registrasi
                    } else {
                        alert('Registrasi gagal. Silakan coba lagi.');
                    }
                },
                (error) => {
                    alert('Terjadi kesalahan: ' + error);
                }
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'blue' }]}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Kembali ke Login</Text>
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
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textDecorationLine: 'underline',
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
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RegisterScreen;
