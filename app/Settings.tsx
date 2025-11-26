import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Divider, List, useTheme } from 'react-native-paper';
import { SafeAreaView, } from 'react-native-safe-area-context';

const SimpleSettingsScreen = () => {
    const theme = useTheme();

    // Styling to ensure the background follows the current theme
    const containerStyle = { backgroundColor: theme.colors.background };

    // Example functions for actions
    const handleSignOut = () => {
        router.push('/LoginScreen');
        // Navigation or authentication logic here
    };

    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Divider style={styles.divider} />

                {/* --- Actions Section --- */}
                <List.Section title="Actions">
                    <List.Item
                        title="Help & Support"
                        left={props => <List.Icon {...props} icon="help-circle" />}
                        onPress={() => console.log('Go to Help')}
                    />
                    <List.Item
                        title="Sign Out"
                        description="Log out of your account"
                        left={props => <List.Icon {...props} icon="logout" />}
                        onPress={handleSignOut}
                        // Optional: apply a red color to the sign out button for emphasis
                        titleStyle={{ color: theme.colors.error }}
                    />
                </List.Section>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 20, // Add some padding at the bottom for scrolling
    },
    divider: {
        marginVertical: 10,
        marginHorizontal: 15,
    }
});

export default SimpleSettingsScreen;