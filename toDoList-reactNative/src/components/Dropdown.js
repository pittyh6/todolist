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
        <View>
            <Text>-------------------------------</Text>
            <Text>Filter by Status</Text>
            <Dropdown
                data={optionsStatus}
                labelField="label"
                valueField="value"
                placeholder="Select an option"
                value={selectedOption}
                onChange={(item) => setSelectedOption(item.value)}
            />
            <Text>Selected: {selectedOption || "none"}</Text>
            <Text>-------------------------------</Text>
        </View>
    );
}


export default Dropbox;