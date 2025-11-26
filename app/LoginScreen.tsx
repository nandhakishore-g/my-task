import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import { Button, Card, Snackbar, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
    const router = useRouter();
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState("");
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const validateMobile = () => {
        if (/^[0-9]{10}$/.test(mobile)) {
            setOtpSent(true);
            setError("");
            setSnackbarVisible(true);
        } else {
            setError("Enter a valid 10-digit mobile number");
        }
    };

    const validateOtp = () => {
        if (otp === "1234") {
            router.push("/DashboardScreen");
        } else {
            setError("Invalid OTP. Try 1234.");
        }
    };


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
            <Card style={{ width: "100%", padding: 20, borderRadius: 20 }}>
                <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>Login</Text>


                <TextInput
                    label="Mobile Number"
                    mode="outlined"
                    value={mobile}
                    onChangeText={setMobile}
                    keyboardType="number-pad"
                    maxLength={10}
                    style={{ marginTop: 16 }}
                />

                <Button mode="contained" onPress={validateMobile} disabled={mobile.length !== 10} style={{ marginTop: 16 }}>
                    Send OTP
                </Button>


                <TextInput
                    label="Enter OTP"
                    mode="outlined"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="number-pad"
                    maxLength={4}
                    disabled={!otpSent}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    style={{ marginTop: 16 }}
                />

                <Button mode="contained" onPress={validateOtp} disabled={!otpSent || otp.length < 4} style={{ marginTop: 16 }}>
                    Login
                </Button>


                {error ? <Text style={{ color: "red", marginTop: 16 }}>{error}</Text> : null}
            </Card>


            <Snackbar visible={snackbarVisible} onDismiss={() => setSnackbarVisible(false)} duration={2000}>
                OTP Sent Successfully!
            </Snackbar>
        </View>
    );
}