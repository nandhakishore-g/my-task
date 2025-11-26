// SplashScreen.js
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

// The logo text or image source should be passed as a prop,
// or you can hardcode it.
const SPLASH_TEXT = 'My Task';

// The duration for each step of the animation in milliseconds
const ANIMATION_DURATION = 800;
// The delay before the animation starts
const START_DELAY = 500;

const SplashScreen = ({ onAnimationFinish }) => {
    const { colors } = useTheme();

    // 1. Shared Value for Scale (size)
    const scale = useSharedValue(0.5);
    // 2. Shared Value for Opacity (fade)
    const opacity = useSharedValue(0);

    // Define the animated styles
    const animatedStyle = useAnimatedStyle(() => {
        return {
            // Apply scale transformation
            transform: [{ scale: scale.value }],
            // Apply opacity
            opacity: opacity.value,
        };
    });

    useEffect(() => {
        // A timeout to start the animation after a brief delay
        const startTimer = setTimeout(() => {
            // Animation Sequence:
            // 1. Fade in (opacity: 0 -> 1) and Scale up (scale: 0.5 -> 1.1)
            opacity.value = withTiming(1, { duration: ANIMATION_DURATION });
            scale.value = withTiming(1.1, {
                duration: ANIMATION_DURATION,
                easing: Easing.out(Easing.back(1)), // Use a bouncy easing for effect
            });

            // 2. Scale back down to the final size (1.1 -> 1.0)
            // This is chained after the first animation step completes.
            scale.value = withSequence(
                withTiming(1.1, { duration: ANIMATION_DURATION }), // Wait for first part
                withTiming(1.0, { duration: 400 }), // Scale to final size

                // 3. Chain the final action (hide splash screen) to the end
                withTiming(1.0, { duration: 0 }, (isFinished) => {
                    if (isFinished) {
                        // After the entire animation sequence is done,
                        // call the prop function to hide the splash screen.
                        onAnimationFinish && onAnimationFinish();
                    }
                })
            );
        }, START_DELAY);

        // Cleanup function
        return () => clearTimeout(startTimer);
    }, [onAnimationFinish]);

    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
            <Animated.View style={animatedStyle}>
                {/* Using a Paper Title component for the text */}
                <Title style={[styles.title, { color: colors.surface }]}>
                    {SPLASH_TEXT}
                </Title>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
//