import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const DashboardScreen = () => {

  const mockUserName = "tech coder";

  const menuItems = [
    { title: "Posts", icon: "post", path: '/PostsScreen' }, //Path for Expo Router
    { title: "Profile", icon: "profile", path: '/UserProfile', },
    { title: "Settings", icon: "settings", path: '/Settings' },
  ];

  const handleNavigate = (item) => {
    if (item.path) {
      router.push(item.path); //  Navigation using using path
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: "#F9FAFB" }]}>
      <Text style={styles.welcomeText} variant="headlineMedium">Hello, {mockUserName}</Text>
      <Text style={styles.subtitle} variant="bodyMedium">Navigate to your services:</Text>

      {menuItems.map((item, index) => (
        <Card
          key={index}
          style={styles.card}
          mode="elevated"
          onPress={() => handleNavigate(item)} // 👈 Calls refactored logic
        >
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardTitle} variant="titleLarge">{item.title}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, },
  welcomeText: { marginBottom: 5, fontWeight: 'bold', color: 'green' },
  subtitle: { marginBottom: 30, color: 'orange', fontSize: 20 },
  card: {
    marginBottom: 15,
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  cardTitle: { fontWeight: '600', },
});

export default DashboardScreen;