
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
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
    <View style={styles.outerContainer}>
      {/* ScrollView for the main content */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.heading}>Sem Results</Text>

          {/* Placeholder to reserve space for the absolutely positioned dropdowns */}
          <View style={styles.dropdownPlaceholder} />

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

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Dropdowns are isolated and positioned after the heading */}
      <View style={styles.dropdownSection}>
        <View style={styles.dropdownContainer}>
          <View style={[styles.dropdownWrapper, { zIndex: 3000 }]}>
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
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          <View style={[styles.dropdownWrapper, { zIndex: 2000 }]}>
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
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>

          <View style={[styles.dropdownWrapper, { zIndex: 1000 }]}>
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
              zIndex={1000}
              zIndexInverse={3000}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 32,
    width: '100%',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 24,
  },
  dropdownSection: {
    position: 'absolute',
    top: 84, // 32 (padding) + 28 (fontSize) + 24 (marginBottom) = 84
    left: 32,
    right: 32,
    zIndex: 5000,
  },
  dropdownContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  dropdownWrapper: {
    marginRight: 8,
    marginBottom: 8,
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
  dropdownPlaceholder: {
    height: 70, // Approximate height of the dropdown container (when closed)
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
    paddingTop: 10,
  },
  textArea: {
    height: 100,
  },
  uploadButton: {
    backgroundColor: '#1b7b89',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    width: 300,
    marginTop: 50,
    marginLeft: 100,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ResultsScreen;