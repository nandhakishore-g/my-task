import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Divider, Paragraph, Title, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy user data
const userData = {
    name: 'Nandha kishore G',
    email: 'gnandhakishore14@gmail.com',
    location: 'India',
    occupation: 'Software Developer',
    profilePictureUrl: 'https://picsum.photos/200', // Placeholder image URL
};

const SimpleProfileScreen = () => {

    const theme = useTheme(); // Access the current theme (e.g., light/dark)

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Card style={styles.card}>
                <View style={styles.header}>
                    {/* User Image/Avatar */}
                    <Avatar.Image
                        size={100}
                        source={{ uri: userData.profilePictureUrl }}
                        style={{ backgroundColor: theme.colors.primary }}
                    />
                    {/* User Name */}
                    <View style={styles.headerText}>
                        <Title style={styles.title}>{userData.name}</Title>
                        <Paragraph style={styles.subtitle}>{userData.occupation}</Paragraph>
                    </View>
                </View>

                <Divider style={styles.divider} />

                {/* Basic Details Section */}
                <Card.Content>
                    <View style={styles.detailItem}>
                        <Title style={styles.detailTitle}>📧 Email</Title>
                        <Paragraph style={styles.detailValue}>{userData.email}</Paragraph>
                    </View>

                    <View style={styles.detailItem}>
                        <Title style={styles.detailTitle}>📍 Location</Title>
                        <Paragraph style={styles.detailValue}>{userData.location}</Paragraph>
                    </View>

                    <View style={styles.detailItem}>
                        <Title style={styles.detailTitle}>✨ Bio</Title>
                        <Paragraph style={styles.detailValue}>
                            Passionate about React Native, building mobile apps, and exploring new technologies.
                        </Paragraph>
                    </View>
                </Card.Content>
            </Card>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        margin: 10,
        padding: 10,
        elevation: 4, // Add shadow for a raised effect
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    headerText: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    divider: {
        marginVertical: 10,
    },
    detailItem: {
        marginBottom: 15,
    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 14,
        marginLeft: 5, // Slight indentation
    },
});

export default SimpleProfileScreen;