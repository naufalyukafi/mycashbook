import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function SettingScreen({ navigation }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleSimpan = () => {
        // Lakukan logika penyimpanan pengaturan di sini
        // Anda dapat menggunakan state passwordSaatIni dan passwordBaru
        // Setelah pengaturan disimpan, Anda dapat kembali ke halaman sebelumnya
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pengaturan</Text>

            <Text style={styles.label}>Ganti Password</Text>

            <Text style={styles.subLabel}>Password Saat Ini</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan password saat ini"
                secureTextEntry
                value={currentPassword}
                onChangeText={(text) => setCurrentPassword(text)}
            />

            <Text style={styles.subLabel}>Password Baru</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan password baru"
                secureTextEntry
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSimpan}>
                <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>

            <View style={styles.aboutButton}>
                <FontAwesome
                    name="user-circle"
                    color="blue"
                    size={24}
                    style={{ marginRight: 10 }}
                />
                <View style={styles.aboutContent}>
                    <Text style={styles.aboutText}>About this app</Text>
                    <Text style={styles.aboutInfo}>
                        Aplikasi ini dibuat oleh:
                        {'\n'}Nama: Naufal Yukafi Ridlo
                        {'\n'}NIM: 1941720040
                        {'\n'}Tanggal: 28 September 2023
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
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
    subLabel: {
        fontSize: 14,
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
    aboutButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    aboutContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    aboutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    aboutInfo: {
        fontSize: 14,
    },
});

export default SettingScreen;
