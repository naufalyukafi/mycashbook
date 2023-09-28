import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function CashflowScreen({ navigation }) {
    const data = [
        { type: 'pemasukan', amount: 250000, description: 'Dapat bayaran panitia', date: '18-10-2023' },
        { type: 'pengeluaran', amount: 150000, description: 'Beli barang', date: '20-10-2023' },
        { type: 'pemasukan', amount: 500000, description: 'Bonus', date: '22-10-2023' },
        // Tambahkan data transaksi lainnya di sini
    ];

    const renderItem = ({ item }) => (
        <View style={styles.transactionItem}>
            <FontAwesome
                name={item.type === 'pemasukan' ? 'arrow-left' : 'arrow-right'}
                color={item.type === 'pemasukan' ? 'green' : 'red'}
                size={24}
            />
            <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmount}>
                    {[item.type === 'pemasukan' ? '+ ' : '- ', 'Rp. ', item.amount.toLocaleString('id-ID')]}
                </Text>
                <Text style={styles.transactionDescription}>{item.description}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Cash Flow</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Kembali</Text>
            </TouchableOpacity>
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
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 10,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    transactionDescription: {
        fontSize: 14,
        color: 'black',
    },
    transactionDate: {
        fontSize: 12,
        color: 'grey',
    },
    backButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CashflowScreen;
