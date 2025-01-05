import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

function Dropbox(props) {
    const [selectedOption, setSelectedOption] = useState("All");

    const optionsStatus = [
        { label: "All", value: "All" },
        { label: "Pending", value: "Pending" },
        { label: "Completed", value: "Completed" },
    ];
    return (
        <View style={styles.body}>
            <Dropdown
                data={optionsStatus}
                labelField="label"
                valueField="value"
                placeholder="Select an option"
                value={selectedOption}
                onChange={(item) => setSelectedOption(item.value)}
            />
            {/* <Text>Selected: {selectedOption || "none"}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        marginTop: 50,
        marginBottom: 10,
        padding: 10,
        height: 40,
    }

})
export default Dropbox;