
import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// Course-based mapping
const courseData = {
  'B.Tech': {
    departments: [
      { label: 'CSE', value: 'CSE' },
      { label: 'ECE', value: 'ECE' },
      { label: 'IT', value: 'IT' },
      { label: 'EEE', value: 'EEE' },
    ],
    years: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
    sections: [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D', value: 'D' },
    ],
    facultyNames: {
      CSE: ['Dr.Ashwith', 'Prof.Naveen'],
      ECE: ['Dr.Chandhu', 'Prof.Murari'],
      IT: ['Dr.Ashok', 'Prof.Manikanta'],
      EEE: ['Dr.Venky', 'Prof.Mahesh'],
    },
  },
  'M.Tech': {
    departments: [
      { label: 'CSE', value: 'CSE' },
      { label: 'ECE', value: 'ECE' },
    ],
    years: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ],
    sections: [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
    ],
    facultyNames: {
      CSE: ['Dr. Rakesh', 'Prof.Gnani'],
      ECE: ['Dr. Shyam', 'Prof.Ram'],
    },
  },
  'MBBS': {
    departments: [
      { label: 'General Medicine', value: 'General Medicine' },
      { label: 'Surgery', value: 'Surgery' },
    ],
    years: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
    ],
    sections: [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
    ],
    facultyNames: {
      'General Medicine': ['Dr. MBBS-MED1', 'Prof. MBBS-MED2'],
      Surgery: ['Dr.Suresh', 'Prof.Vyas'],
    },
  },
};

const ResultsScreen = () => {
 
  const [courseOpen, setCourseOpen] = useState(false);
   const [course, setCourse] = useState(null);
   const [courseItems, setCourseItems] = useState([
     { label: 'M.Tech', value: 'M.Tech' },
     { label: 'MBBS', value: 'MBBS' },
     { label: 'B.Tech', value: 'B.Tech' },
   ]);
 
   const [deptOpen, setDeptOpen] = useState(false);
   const [department, setDepartment] = useState(null);
   const [deptItems, setDeptItems] = useState([]);
 
   const [yearOpen, setYearOpen] = useState(false);
   const [year, setYear] = useState(null);
   const [yearItems, setYearItems] = useState([]);
    // Update dependent dropdowns when course changes
     useEffect(() => {
       if (course && courseData[course]) {
         setDeptItems(courseData[course].departments);
         setYearItems(courseData[course].years);
         // Clear selected values if course changes
         setDepartment(null);
         setYear(null);
       }
     }, [course]);

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
              value={course}
              items={courseItems}
              setOpen={setCourseOpen}
              setValue={setCourse}
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
              value={department}
              items={deptItems}
              setOpen={setDeptOpen}
              setValue={setDepartment}
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
              value={year}
              items={yearItems}
              setOpen={setYearOpen}
              setValue={setYear}
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