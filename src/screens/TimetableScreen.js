
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimetableScreen = () => {
  const [activeTab, setActiveTab] = useState('Student Timetable');
  
  // Student dropdown states
  const [studentCourseOpen, setStudentCourseOpen] = useState(false);
  const [studentCourse, setStudentCourse] = useState(null);
  const [studentCourseItems, setStudentCourseItems] = useState([
    { label: 'M.Tech', value: 'M.Tech' },
    { label: 'MBBS', value: 'MBBS' },
    { label: 'B.Tech', value: 'B.Tech' },
  ]);

  const [studentDeptOpen, setStudentDeptOpen] = useState(false);
  const [studentDepartment, setStudentDepartment] = useState(null);
  const [studentDeptItems, setStudentDeptItems] = useState([
    { label: 'CSE', value: 'CSE' },
    { label: 'ECE', value: 'ECE' },
    { label: 'IT', value: 'IT' },
    { label: 'EEE', value: 'EEE' },
  ]);

  const [studentYearOpen, setStudentYearOpen] = useState(false);
  const [studentYear, setStudentYear] = useState(null);
  const [studentYearItems, setStudentYearItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ]);

  const [studentSectionOpen, setStudentSectionOpen] = useState(false);
  const [studentSection, setStudentSection] = useState(null);
  const [studentSectionItems, setStudentSectionItems] = useState([
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
  ]);

  // Faculty dropdown states
  const [facultyCourseOpen, setFacultyCourseOpen] = useState(false);
  const [facultyCourse, setFacultyCourse] = useState(null);
  const [facultyCourseItems, setFacultyCourseItems] = useState([
    { label: 'M.Tech', value: 'M.Tech' },
    { label: 'MBBS', value: 'MBBS' },
    { label: 'B.Tech', value: 'B.Tech' },
  ]);

  const [facultyDeptOpen, setFacultyDeptOpen] = useState(false);
  const [facultyDepartment, setFacultyDepartment] = useState(null);
  const [facultyDeptItems, setFacultyDeptItems] = useState([
    { label: 'CSE', value: 'CSE' },
    { label: 'ECE', value: 'ECE' },
    { label: 'IT', value: 'IT' },
    { label: 'EEE', value: 'EEE' },
  ]);

  const [facultyNameOpen, setFacultyNameOpen] = useState(false);
  const [facultyName, setFacultyName] = useState(null);
  const [facultyNameItems, setFacultyNameItems] = useState([
    { label: 'Dr. Smith', value: 'Dr. Smith' },
    { label: 'Prof. Johnson', value: 'Prof. Johnson' },
    { label: 'Dr. Williams', value: 'Dr. Williams' },
    { label: 'Prof. Brown', value: 'Prof. Brown' },
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Student timetable state
  const [studentTimeSlots, setStudentTimeSlots] = useState(['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM']);
  const [studentTimetable, setStudentTimetable] = useState(() => ({
    '9:00 AM': {},
    '10:00 AM': {},
    '11:00 AM': {},
    '12:00 AM': {},
  }));

  // Faculty timetable state
  const [facultyTimeSlots, setFacultyTimeSlots] = useState(['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM']);
  const [facultyTimetable, setFacultyTimetable] = useState(() => ({
    '9:00 AM': {},
    '10:00 AM': {},
    '11:00 AM': {},
    '12:00 AM': {},
  }));

  // Get current active timetable data
  const currentTimeSlots = activeTab === 'Student Timetable' ? studentTimeSlots : facultyTimeSlots;
  const currentTimetable = activeTab === 'Student Timetable' ? studentTimetable : facultyTimetable;
  const setCurrentTimeSlots = activeTab === 'Student Timetable' ? setStudentTimeSlots : setFacultyTimeSlots;
  const setCurrentTimetable = activeTab === 'Student Timetable' ? setStudentTimetable : setFacultyTimetable;

  // Handle changes to the timetable
  const handleChange = (time, day, value) => {
    setCurrentTimetable((prev) => ({
      ...prev,
      [time]: {
        ...prev[time],
        [day]: value,
      },
    }));
  };

  // Handle the change of time slot labels
  const handleTimeChange = (index, newTimeLabel) => {
    const oldTime = currentTimeSlots[index];
    const newTimeSlots = [...currentTimeSlots];
    newTimeSlots[index] = newTimeLabel;

    const newTimetable = { ...currentTimetable };
    newTimetable[newTimeLabel] = newTimetable[oldTime] || {};
    delete newTimetable[oldTime];

    setCurrentTimeSlots(newTimeSlots);
    setCurrentTimetable(newTimetable);
  };

  // Add a new row
  const handleAddRow = () => {
    const nextTime = `Extra ${currentTimeSlots.length + 1}`;
    setCurrentTimeSlots([...currentTimeSlots, nextTime]);
    setCurrentTimetable((prev) => ({
      ...prev,
      [nextTime]: days.reduce((acc, day) => {
        acc[day] = '';
        return acc;
      }, {}),
    }));
  };

  // Save the timetable
  const handleSave = async () => {
    try {
      const key = activeTab === 'Student Timetable' 
        ? `STUDENT_${studentCourse}_${studentDepartment}_${studentYear}_${studentSection}`
        : `FACULTY_${facultyCourse}_${facultyDepartment}_${facultyName}`;
      
      const dataToSave = activeTab === 'Student Timetable' ? studentTimetable : facultyTimetable;
      
      await AsyncStorage.setItem(key, JSON.stringify(dataToSave));
      Alert.alert('Success', 'Timetable saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save timetable.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Student Timetable' && styles.activeTab]}
          onPress={() => setActiveTab('Student Timetable')}
        >
          <Text style={styles.tabText}>Student Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Faculty Timetable' && styles.activeTab]}
          onPress={() => setActiveTab('Faculty Timetable')}
        >
          <Text style={styles.tabText}>Faculty Timetable</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdowns - Conditionally render based on active tab */}
      <View style={styles.filters}>
        {activeTab === 'Student Timetable' ? (
          <>
            <DropDownPicker
              open={studentCourseOpen}
              value={studentCourse}
              items={studentCourseItems}
              setOpen={setStudentCourseOpen}
              setValue={setStudentCourse}
              setItems={setStudentCourseItems}
              placeholder="Course"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={6000}
              zIndexInverse={6000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={studentDeptOpen}
              value={studentDepartment}
              items={studentDeptItems}
              setOpen={setStudentDeptOpen}
              setValue={setStudentDepartment}
              setItems={setStudentDeptItems}
              placeholder="Department"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={5000}
              zIndexInverse={5000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={studentYearOpen}
              value={studentYear}
              items={studentYearItems}
              setOpen={setStudentYearOpen}
              setValue={setStudentYear}
              setItems={setStudentYearItems}
              placeholder="Year"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={4000}
              zIndexInverse={4000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={studentSectionOpen}
              value={studentSection}
              items={studentSectionItems}
              setOpen={setStudentSectionOpen}
              setValue={setStudentSection}
              setItems={setStudentSectionItems}
              placeholder="Section"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={3000}
              zIndexInverse={3000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </>
        ) : (
          <>
            <DropDownPicker
              open={facultyCourseOpen}
              value={facultyCourse}
              items={facultyCourseItems}
              setOpen={setFacultyCourseOpen}
              setValue={setFacultyCourse}
              setItems={setFacultyCourseItems}
              placeholder="Course"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={6000}
              zIndexInverse={6000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={facultyDeptOpen}
              value={facultyDepartment}
              items={facultyDeptItems}
              setOpen={setFacultyDeptOpen}
              setValue={setFacultyDepartment}
              setItems={setFacultyDeptItems}
              placeholder="Department"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={5000}
              zIndexInverse={5000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={facultyNameOpen}
              value={facultyName}
              items={facultyNameItems}
              setOpen={setFacultyNameOpen}
              setValue={setFacultyName}
              setItems={setFacultyNameItems}
              placeholder="Faculty Name"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={4000}
              zIndexInverse={4000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Timetable - ScrollView only for this part */}
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Daily Timetable</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.headerCellTime} />
            {days.map((day, index) => (
              <View key={index} style={styles.headerCell}>
                <Text style={styles.headerText}>{day}</Text>
              </View>
            ))}
          </View>

          {currentTimeSlots.map((time, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <View style={styles.timeCell}>
                <TextInput
                  style={styles.timeInput}
                  value={time}
                  onChangeText={(text) => handleTimeChange(rowIndex, text)}
                  placeholder="Time"
                  placeholderTextColor="#666"
                />
              </View>
              {days.map((day, colIndex) => (
                <View key={colIndex} style={styles.cell}>
                  <TextInput
                    style={styles.input}
                    value={currentTimetable[time]?.[day] || ''}
                    onChangeText={(text) => handleChange(time, day, text)}
                    multiline
                    selectionColor="black"
                  />
                </View>
              ))}
            </View>
          ))}

          {/* Add Row Button */}
          <TouchableOpacity style={styles.addRow} onPress={handleAddRow}>
            <Text style={styles.addRowText}>+ Add Row</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Keep the same styles as before
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10,
    // backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  tabs: { 
    flexDirection: 'row', 
    marginBottom: 10,
    zIndex: 10000,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  activeTab: { backgroundColor: '#19747E' },
  tabText: { 
    color: 'black', 
    textAlign: 'center',
    fontWeight: '500',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    zIndex: 9000,
  },
  dropdownContainer: {
    width: 230,
    marginRight: 10,
    marginBottom: 10,
  },
  dropDownContainerStyle: {
    borderColor: '#ccc',
    marginTop: 2,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#3c52e3',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 4,
    marginLeft: 90,
    height: 50,
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '500',
    color: 'black',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  headerCellTime: {
    width: 80,
    height: 50,
    backgroundColor: '#EDD6FB',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  headerCell: {
    flex: 1,
    height: 50,
    backgroundColor: '#BD9EFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    color: 'black',
    fontWeight: '600',
  },
  timeCell: {
    width: 80,
    height: 90,
    padding: 8,
    backgroundColor: '#e1bbf7',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  timeInput: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
    padding: 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
    height: 90,
    padding: 6,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
    padding: 4,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  addRow: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  addRowText: {
    color: '#3c52e3',
    fontWeight: 'bold',
  },
});

export default TimetableScreen;