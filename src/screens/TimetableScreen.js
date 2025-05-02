

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TimetableScreen = () => {
//   const [activeTab, setActiveTab] = useState('Student Timetable');
  
//   // Common state for both tabs
//   const [courseOpen, setCourseOpen] = useState(false);
//   const [course, setCourse] = useState(null);
//   const [courseItems, setCourseItems] = useState([
//     { label: 'M.Tech', value: 'M.Tech' },
//     { label: 'MBBS', value: 'MBBS' },
//     { label: 'B.Tech', value: 'B.Tech' },
//   ]);

//   const [deptOpen, setDeptOpen] = useState(false);
//   const [department, setDepartment] = useState(null);
//   const [deptItems, setDeptItems] = useState([
//     { label: 'CSE', value: 'CSE' },
//     { label: 'ECE', value: 'ECE' },
//     { label: 'IT', value: 'IT' },
//     { label: 'EEE', value: 'EEE' },
//   ]);

//   // Student-specific dropdowns
//   const [yearOpen, setYearOpen] = useState(false);
//   const [year, setYear] = useState(null);
//   const [yearItems, setYearItems] = useState([
//     { label: '1', value: '1' },
//     { label: '2', value: '2' },
//     { label: '3', value: '3' },
//     { label: '4', value: '4' },
//   ]);

//   const [sectionOpen, setSectionOpen] = useState(false);
//   const [section, setSection] = useState(null);
//   const [sectionItems, setSectionItems] = useState([
//     { label: 'A', value: 'A' },
//     { label: 'B', value: 'B' },
//     { label: 'C', value: 'C' },
//     { label: 'D', value: 'D' },
//   ]);

//   // Faculty-specific dropdown
//   const [facultyOpen, setFacultyOpen] = useState(false);
//   const [facultyName, setFacultyName] = useState(null);
//   const [facultyItems, setFacultyItems] = useState([
//     { label: 'Dr. Smith', value: 'Dr. Smith' },
//     { label: 'Prof. Johnson', value: 'Prof. Johnson' },
//     { label: 'Dr. Williams', value: 'Dr. Williams' },
//     { label: 'Prof. Brown', value: 'Prof. Brown' },
//   ]);

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const [timeSlots, setTimeSlots] = useState(['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM']);
//   const [timetable, setTimetable] = useState(() => ({
//     '9:00 AM': {},
//     '10:00 AM': {},
//     '11:00 AM': {},
//     '12:00 AM': {},
//   }));

//   // Handle changes to the timetable
//   const handleChange = (time, day, value) => {
//     setTimetable((prev) => ({
//       ...prev,
//       [time]: {
//         ...prev[time],
//         [day]: value,
//       },
//     }));
//   };

//   // Handle the change of time slot labels
//   const handleTimeChange = (index, newTimeLabel) => {
//     const oldTime = timeSlots[index];
//     const newTimeSlots = [...timeSlots];
//     newTimeSlots[index] = newTimeLabel;

//     const newTimetable = { ...timetable };
//     newTimetable[newTimeLabel] = newTimetable[oldTime] || {};
//     delete newTimetable[oldTime];

//     setTimeSlots(newTimeSlots);
//     setTimetable(newTimetable);
//   };

//   // Add a new row
//   const handleAddRow = () => {
//     const nextTime = `Extra ${timeSlots.length + 1}`;
//     setTimeSlots([...timeSlots, nextTime]);
//     setTimetable((prev) => ({
//       ...prev,
//       [nextTime]: days.reduce((acc, day) => {
//         acc[day] = '';
//         return acc;
//       }, {}),
//     }));
//   };

//   // Save the timetable
//   const handleSave = async () => {
//     try {
//       const key = activeTab === 'Student Timetable' 
//         ? `${course}_${department}_${year}_${section}`
//         : `${course}_${department}_${facultyName}`;
      
//       await AsyncStorage.setItem(key, JSON.stringify(timetable));
//       Alert.alert('Success', 'Timetable saved successfully!');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save timetable.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Tabs */}
//       <View style={styles.tabs}>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'Student Timetable' && styles.activeTab]}
//           onPress={() => setActiveTab('Student Timetable')}
//         >
//           <Text style={styles.tabText}>Student Timetable</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'Faculty Timetable' && styles.activeTab]}
//           onPress={() => setActiveTab('Faculty Timetable')}
//         >
//           <Text style={styles.tabText}>Faculty Timetable</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Dropdowns */}
//       <View style={styles.filters}>
//         <DropDownPicker
//           open={courseOpen}
//           value={course}
//           items={courseItems}
//           setOpen={setCourseOpen}
//           setValue={setCourse}
//           setItems={setCourseItems}
//           placeholder="Course"
//           style={styles.dropdown}
//           containerStyle={styles.dropdownContainer}
//           zIndex={6000}
//         />
//         <DropDownPicker
//           open={deptOpen}
//           value={department}
//           items={deptItems}
//           setOpen={setDeptOpen}
//           setValue={setDepartment}
//           setItems={setDeptItems}
//           placeholder="Department"
//           style={styles.dropdown}
//           containerStyle={styles.dropdownContainer}
//           zIndex={5000}
//         />

//         {activeTab === 'Student Timetable' ? (
//           <>
//             <DropDownPicker
//               open={yearOpen}
//               value={year}
//               items={yearItems}
//               setOpen={setYearOpen}
//               setValue={setYear}
//               setItems={setYearItems}
//               placeholder="Year"
//               style={styles.dropdown}
//               containerStyle={styles.dropdownContainer}
//               zIndex={4000}
//             />
//             <DropDownPicker
//               open={sectionOpen}
//               value={section}
//               items={sectionItems}
//               setOpen={setSectionOpen}
//               setValue={setSection}
//               setItems={setSectionItems}
//               placeholder="Section"
//               style={styles.dropdown}
//               containerStyle={styles.dropdownContainer}
//               zIndex={3000}
//             />
//           </>
//         ) : (
//           <DropDownPicker
//             open={facultyOpen}
//             value={facultyName}
//             items={facultyItems}
//             setOpen={setFacultyOpen}
//             setValue={setFacultyName}
//             setItems={setFacultyItems}
//             placeholder="Faculty Name"
//             style={styles.dropdown}
//             containerStyle={styles.dropdownContainer}
//             zIndex={4000}
//           />
//         )}

//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Timetable */}
//       <Text style={styles.title}>Daily Timetable</Text>
//       <View style={styles.table}>
//         <View style={styles.row}>
//           <View style={styles.headerCellTime} />
//           {days.map((day, index) => (
//             <View key={index} style={styles.headerCell}>
//               <Text style={styles.headerText}>{day}</Text>
//             </View>
//           ))}
//         </View>

//         {timeSlots.map((time, rowIndex) => (
//           <View key={rowIndex} style={styles.row}>
//             <View style={styles.timeCell}>
//               <TextInput
//                 style={styles.timeInput}
//                 value={time}
//                 onChangeText={(text) => handleTimeChange(rowIndex, text)}
//                 placeholder="Time"
//                 placeholderTextColor="#666"
//               />
//             </View>
//             {days.map((day, colIndex) => (
//               <View key={colIndex} style={styles.cell}>
//                 <TextInput
//                   style={styles.input}
//                   value={timetable[time]?.[day] || ''}
//                   onChangeText={(text) => handleChange(time, day, text)}
//                   multiline
//                   selectionColor="black"
//                 />
//               </View>
//             ))}
//           </View>
//         ))}

//         {/* Add Row Button */}
//         <TouchableOpacity style={styles.addRow} onPress={handleAddRow}>
//           <Text style={styles.addRowText}>+ Add Row</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 10 },
//   tabs: { flexDirection: 'row', marginBottom: 10 },
//   tab: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#eee',
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   activeTab: { backgroundColor: '#19747E' },
//   tabText: { color: 'black', textAlign: 'center' },
//   filters: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 10,
//     zIndex: 9999,
//   },
//   dropdownContainer: {
//     width: 230,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   dropdown: {
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   saveButton: {
//     backgroundColor: '#3c52e3',
//     paddingHorizontal: 40,
//     paddingVertical: 15,
//     borderRadius: 4,
//     marginLeft: 90,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 18,
//     marginVertical: 10,
//     fontWeight: '500',
//     color: 'black',
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   headerCellTime: {
//     width: 80,
//     height: 50,
//     backgroundColor: '#EDD6FB',
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: 'black',
//   },
//   headerCell: {
//     flex: 1,
//     height: 50,
//     backgroundColor: '#BD9EFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderLeftWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: 'black',
//   },
//   headerText: {
//     color: 'black',
//     fontWeight: '600',
//   },
//   timeCell: {
//     width: 80,
//     height: 90,
//     padding: 8,
//     backgroundColor: '#e1bbf7',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: 'black',
//   },
//   timeInput: {
//     color: 'black',
//     fontSize: 12,
//     textAlign: 'center',
//     width: '100%',
//     padding: 4,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   cell: {
//     flex: 1,
//     height: 90,
//     padding: 6,
//     borderLeftWidth: 1,
//     borderTopWidth: 1,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     color: 'black',
//     fontSize: 12,
//     textAlign: 'center',
//     width: '100%',
//     padding: 4,
//     backgroundColor: 'transparent',
//     borderWidth: 0,
//   },
//   addRow: {
//     backgroundColor: '#e6e6e6',
//     padding: 10,
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//   },
//   addRowText: {
//     color: '#3c52e3',
//     fontWeight: 'bold',
//   },
// });

// export default TimetableScreen;










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
  
  // Common state for both tabs
  const [courseOpen, setCourseOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([
    { label: 'M.Tech', value: 'M.Tech' },
    { label: 'MBBS', value: 'MBBS' },
    { label: 'B.Tech', value: 'B.Tech' },
  ]);

  const [deptOpen, setDeptOpen] = useState(false);
  const [department, setDepartment] = useState(null);
  const [deptItems, setDeptItems] = useState([
    { label: 'CSE', value: 'CSE' },
    { label: 'ECE', value: 'ECE' },
    { label: 'IT', value: 'IT' },
    { label: 'EEE', value: 'EEE' },
  ]);

  // Student-specific dropdowns
  const [yearOpen, setYearOpen] = useState(false);
  const [year, setYear] = useState(null);
  const [yearItems, setYearItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ]);

  const [sectionOpen, setSectionOpen] = useState(false);
  const [section, setSection] = useState(null);
  const [sectionItems, setSectionItems] = useState([
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
  ]);

  // Faculty-specific dropdown
  const [facultyOpen, setFacultyOpen] = useState(false);
  const [facultyName, setFacultyName] = useState(null);
  const [facultyItems, setFacultyItems] = useState([
    { label: 'Dr. Smith', value: 'Dr. Smith' },
    { label: 'Prof. Johnson', value: 'Prof. Johnson' },
    { label: 'Dr. Williams', value: 'Dr. Williams' },
    { label: 'Prof. Brown', value: 'Prof. Brown' },
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [timeSlots, setTimeSlots] = useState(['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM']);
  const [timetable, setTimetable] = useState(() => ({
    '9:00 AM': {},
    '10:00 AM': {},
    '11:00 AM': {},
    '12:00 AM': {},
  }));

  // Handle changes to the timetable
  const handleChange = (time, day, value) => {
    setTimetable((prev) => ({
      ...prev,
      [time]: {
        ...prev[time],
        [day]: value,
      },
    }));
  };

  // Handle the change of time slot labels
  const handleTimeChange = (index, newTimeLabel) => {
    const oldTime = timeSlots[index];
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = newTimeLabel;

    const newTimetable = { ...timetable };
    newTimetable[newTimeLabel] = newTimetable[oldTime] || {};
    delete newTimetable[oldTime];

    setTimeSlots(newTimeSlots);
    setTimetable(newTimetable);
  };

  // Add a new row
  const handleAddRow = () => {
    const nextTime = `Extra ${timeSlots.length + 1}`;
    setTimeSlots([...timeSlots, nextTime]);
    setTimetable((prev) => ({
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
        ? `${course}_${department}_${year}_${section}`
        : `${course}_${department}_${facultyName}`;
      
      await AsyncStorage.setItem(key, JSON.stringify(timetable));
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

      {/* Dropdowns */}
      <View style={styles.filters}>
        <DropDownPicker
          open={courseOpen}
          value={course}
          items={courseItems}
          setOpen={setCourseOpen}
          setValue={setCourse}
          setItems={setCourseItems}
          placeholder="Course"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={6000}
          zIndexInverse={6000}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
        <DropDownPicker
          open={deptOpen}
          value={department}
          items={deptItems}
          setOpen={setDeptOpen}
          setValue={setDepartment}
          setItems={setDeptItems}
          placeholder="Department"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={5000}
          zIndexInverse={5000}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />

        {activeTab === 'Student Timetable' ? (
          <>
            <DropDownPicker
              open={yearOpen}
              value={year}
              items={yearItems}
              setOpen={setYearOpen}
              setValue={setYear}
              setItems={setYearItems}
              placeholder="Year"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={4000}
              zIndexInverse={4000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <DropDownPicker
              open={sectionOpen}
              value={section}
              items={sectionItems}
              setOpen={setSectionOpen}
              setValue={setSection}
              setItems={setSectionItems}
              placeholder="Section"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              zIndex={3000}
              zIndexInverse={3000}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </>
        ) : (
          <DropDownPicker
            open={facultyOpen}
            value={facultyName}
            items={facultyItems}
            setOpen={setFacultyOpen}
            setValue={setFacultyName}
            setItems={setFacultyItems}
            placeholder="Faculty Name"
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            zIndex={4000}
            zIndexInverse={4000}
            dropDownContainerStyle={styles.dropDownContainerStyle}
          />
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

          {timeSlots.map((time, rowIndex) => (
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
                    value={timetable[time]?.[day] || ''}
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

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  tabs: { 
    flexDirection: 'row', 
    marginBottom: 10,
    zIndex: 10000, // Highest z-index for tabs
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
    zIndex: 9000, // High z-index for dropdown container
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