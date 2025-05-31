
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ResultsScreen = () => {
   const [courseOpen, setCourseOpen] = useState(false);
    const [courseValue, setCourseValue] = useState(null);
    const [courseItems, setCourseItems] = useState([
      { label: 'B.Tech', value: 'btech' },
      { label: 'MBA', value: 'mba' },
      { label: 'MCA', value: 'mca' },
    ]);
    const [deptOpen, setDeptOpen] = useState(false);
    const [deptValue, setDeptValue] = useState(null);
    const [deptItems, setDeptItems] = useState([
      { label: 'Computer Science', value: 'cse' },
      { label: 'Electrical', value: 'eee' },
      { label: 'Mechanical', value: 'mech' },
    ]);
     const [yearOpen, setYearOpen] = useState(false);
    const [yearValue, setYearValue] = useState(null);
    const [yearItems, setYearItems] = useState([
      { label: '1st', value: '1st' },
      { label: '2nd', value: '2nd' },
      { label: '3rd', value: '3rd' },
       { label: '4th', value: '4th' },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sem Results</Text>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdownWrapper}>
              <DropDownPicker
                open={courseOpen}
                value={courseValue}
                items={courseItems}
                setOpen={setCourseOpen}
                setValue={setCourseValue}
                setItems={setCourseItems}
                placeholder="Select Course"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownBox}
              />
            </View>

            <View style={styles.dropdownWrapper}>
              <DropDownPicker
                open={deptOpen}
                value={deptValue}
                items={deptItems}
                setOpen={setDeptOpen}
                setValue={setDeptValue}
                setItems={setDeptItems}
                placeholder="Select Department"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownBox}
              />
            </View>
             <View style={styles.dropdownWrapper}>
              <DropDownPicker
                open={yearOpen}
                value={yearValue}
                items={yearItems}
                setOpen={setYearOpen}
                setValue={setYearValue}
                setItems={setYearItems}
                placeholder="Select Year"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownBox}
              />
            </View>
          </View>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor="black"
      />

      <Text style={styles.label}>Description & Link</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder=""
        placeholderTextColor="black"
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    width: '100%',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 24,
  },
   dropdownContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap', 
  gap: 0, 
  marginBottom: 16,
  zIndex: 1000,
},
dropdownWrapper: {
  marginRight: 8,
},
dropdown: {
  backgroundColor: '#f0f0f0',
  borderColor: '#999',
  width: 180,
},
dropdownBox: {
  backgroundColor: '#e6e6e6',
  width: 180,
},
 
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: '#f2f2f2',
    color: 'black',
    paddingTop:10,  },
  textArea: {
    height: 100,
  },
});

export default ResultsScreen;














