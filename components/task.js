// task.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    const { text, completed, onComplete, onDelete } = props;

    return (
        <View style={[styles.item, completed && styles.completedItem]}>
            <View style={styles.itemLeft}>
                <TouchableOpacity
                    style={[styles.square, completed && styles.completed]}
                    onPress={onComplete}
                ></TouchableOpacity>
                <Text style={[styles.itemText, completed && styles.completedText]}>
                    {text}
                </Text>
            </View>
            
            <TouchableOpacity style={styles.circular} onPress={onDelete}>
                {/* Yuvarlak buton */}
            </TouchableOpacity>
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
    completedItem: {
        backgroundColor: "#E8EAED",
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
        backgroundColor: "#55BCF6",
        opacity: 1,
    },
    itemText: {
        maxWidth: "80%",
    },
    completedText: {
        textDecorationLine: "line-through",
        color: "#888",
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