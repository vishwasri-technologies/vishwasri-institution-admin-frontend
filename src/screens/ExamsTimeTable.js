




import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ResultsScreen from './Results';
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

const ExamTimetable = () => {
  const [activeTab, setActiveTab] = useState('Exams');

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
    <View style={{ flex: 1 }}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Exams' && styles.activeTab]}
          onPress={() => setActiveTab('Exams')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Exams' && styles.activeTabText,
            ]}>
            Exams
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Results' && styles.activeTab]}
          onPress={() => setActiveTab('Results')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Results' && styles.activeTabText,
            ]}>
            Results
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        {activeTab === 'Exams' ? (
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            bounces={false}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={styles.heading}>Exam Timetable</Text>

              <View style={styles.dropdownContainer}>
                <View style={styles.dropdownWrapper}>
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

                <View style={styles.dropdownWrapper}>
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

                <View style={styles.dropdownWrapper}>
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

              <Text style={styles.label}>Exam Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter exam title"
                placeholderTextColor="black"
              />

              <View style={styles.uploadBox}>
                <Text style={styles.uploadText}>Upload</Text>
              </View>

              <TouchableOpacity style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ResultsScreen />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    textAlign: 'center',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    minHeight: windowHeight - 50, // Ensure container takes at least full screen height minus tab height
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  dropdownContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
    zIndex: 1000,
  },
  dropdownWrapper: {
    marginRight: 8,
    width: windowWidth < 400 ? '45%' : 180, // Adjust width for small screens
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    borderColor: '#999',
    width: '100%',
  },
  dropdownBox: {
    backgroundColor: '#e6e6e6',
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 6,
    color: 'black',
  },
  input: {
    height: 40,
    width: windowWidth < 400 ? '100%' : 300, // Adjust input width for small screens
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    color: 'black',
    paddingTop: 10,
  },
  uploadBox: {
    height: 300,
    width: windowWidth < 400 ? '100%' : 300, // Adjust upload box width for small screens
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
    width: windowWidth < 400 ? '100%' : 300,
    alignSelf: 'flex-start',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ExamTimetable;