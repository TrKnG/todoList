import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleTaskCompletion = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity
                    style={[styles.square, isCompleted && styles.completed]}
                    onPress={handleTaskCompletion}
                ></TouchableOpacity>
                <Text style={[styles.itemText, isCompleted && styles.completedText]}>
                    {props.text}
                </Text>
            </View>
            <TouchableOpacity style={styles.circular}></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    completed: {
        backgroundColor: "#55BCF6", // Kare rengini değiştir
        opacity: 1, // Kareyi opak yap
    },
    itemText: {
        maxWidth: "80%",
    },
    completedText: {
        textDecorationLine: "line-through", // Tamamlanan görevin metnini üstü çizili yap
        color: "#888", // Tamamlanan görevin rengini değiştir
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
