import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ResultsScreen from './Results';

const ExamTimetable = () => {
  const [activeTab, setActiveTab] = useState('Exams');
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

  return (
    <View style={{ flex: 1 }}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Exams' && styles.activeTab]}
          onPress={() => setActiveTab('Exams')}
        >
          <Text style={styles.tabText}>Exams</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Results' && styles.activeTab]}
          onPress={() => setActiveTab('Results')}
        >
          <Text style={styles.tabText}>Results</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === 'Exams' ? (
        <View style={styles.container}>
          <Text style={styles.heading}>Exam Timetable</Text>

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
          </View>

          <Text style={styles.label}>Exam Title</Text>
          <TextInput style={styles.input} placeholder="Enter exam title"  placeholderTextColor="black"   />

          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      ) : (

        <ResultsScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 50,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'transparent',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  activeTab: {
    backgroundColor: '#1b7b89',
    borderColor: '#fff',
  },
  tabText: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'black',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    zIndex: 1000,
  },
  dropdownWrapper: {
    flex: 1,
    marginRight: 10,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    borderColor: '#999',
  },
  dropdownBox: {
    backgroundColor: '#e6e6e6',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 6,
    color:'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    color:'black',
    paddingTop:10,
  },
  uploadBox: {
    height: 300,
    // width:300,

    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadText: {
    color: '#888',
    fontSize: 18,
  },
  uploadButton: {
    backgroundColor: '#1b7b89',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    width:300,
    alignSelf:'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ExamTimetable;






