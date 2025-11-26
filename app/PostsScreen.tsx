// Fetching posts with axios, pull-to-refresh, loading & error UI
import axios from "axios";
import { MotiView } from "moti";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { ActivityIndicator, Button, Card } from "react-native-paper";

export default function PostsScreen() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refreshing, setRefreshing] = useState(false);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data.slice(0, 20)); // limit results
            setError("");
        } catch (err) {
            setError("Failed to load posts. Check internet connection.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchPosts().finally(() => setRefreshing(false));
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={50} />
                <Text style={{ marginTop: 10 }}>Loading posts...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
                <Text style={{ fontSize: 18, color: "red", textAlign: "center" }}>{error}</Text>
                <Button mode="contained" style={{ marginTop: 16 }} onPress={fetchPosts}>
                    Retry
                </Button>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#F9FAFB" }}>
            <FlatList
                data={posts}
                keyExtractor={(item) => String(item.id)}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item, index }) => (
                    <MotiView
                        from={{ opacity: 0, translateY: 15 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: index * 100 }}
                    >
                        <Card style={{ padding: 16, borderRadius: 16, marginBottom: 12, elevation: 4 }}>
                            <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 6, color: 'orange' }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontSize: 16, color: "white" }}>{item.body}</Text>
                        </Card>
                    </MotiView>
                )}
            />
        </View>
    );
}
