// // TimetableScreen.js
// import React, { useState } from 'react';
// import { View, ScrollView } from 'react-native';
// import Sidebar from './Sidebar';
// import TopTabs from './TopTabs';
// import Filters from './Filters';
// import TimetableGrid from './TimetableGrid';

// const TimetableScreen = () => {
//   const [activeTab, setActiveTab] = useState('Student Timetable');
//   const [filters, setFilters] = useState({ Course: '', Department: '', Year: '', Section: '' });

//   return (
//     <View style={{ flexDirection: 'row', flex: 1 }}>
//       <Sidebar onSelectSection={section => console.log(section)} />
//       <ScrollView style={{ flex: 1, padding: 10 }}>
//         <TopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
//         <Filters filters={filters} setFilters={setFilters} />
//         <TimetableGrid />
//       </ScrollView>
//     </View>
//   );
// };

// export default TimetableScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';


const TimetableScreen = () => {
  const [activeTab, setActiveTab] = useState('Student Timetable');
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Student Timetable' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Student Timetable')}
        >
          <Text style={styles.tabText}>Student Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Faculty Timetable' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Faculty Timetable')}
        >
          <Text style={styles.tabText}>Faculty Timetable</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Filters */}
      <View style={styles.dropdownRow}>
        <Picker
          selectedValue={course}
          style={styles.dropdown}
          onValueChange={(itemValue) => setCourse(itemValue)}
        >
          <Picker.Item   label="Course" value="" color="black" />
          <Picker.Item label="M.Tech" value="Mtech"  />
          <Picker.Item label="MBBS" value="Mbbs"  />
          <Picker.Item label="B.Tech" value="btech"  />
          <Picker.Item label="Bpharm" value="Bpharm"  />
        </Picker>

        <Picker
          selectedValue={department}
          style={styles.dropdown}
          onValueChange={(itemValue) => setDepartment(itemValue)}
        >
          <Picker.Item label="Department" value=""  color="black" />
          <Picker.Item label="CSE" value="cse" />
          <Picker.Item label="IT" value="it" />
          <Picker.Item label="EEE" value="eee" />
        </Picker>

        <Picker
          selectedValue={year}
          style={styles.dropdown}
          onValueChange={(itemValue) => setYear(itemValue)}
        >
          <Picker.Item label="Year" value=""  color="black" />
          <Picker.Item label="1st" value="1" />
          <Picker.Item label="2nd" value="2" />
          <Picker.Item label="3rd" value="3" />
          <Picker.Item label="4th" value="4" />
        </Picker>

        <Picker
          selectedValue={section}
          style={styles.dropdown}
          onValueChange={(itemValue) => setSection(itemValue)}
        >
          <Picker.Item label="Section" value=""  color="black" />
          <Picker.Item label="A" value="a" />
          <Picker.Item label="B" value="b" />
          <Picker.Item label="C" value="c" />
        </Picker>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Daily Timetable</Text>

      {/* Table */}
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.row}>
          <View style={styles.headerCellTime}></View>
          {days.map((day, index) => (
            <View key={index} style={styles.headerCell}>
              <Text style={styles.headerText}>{day}</Text>
            </View>
          ))}
        </View>

        {/* Timetable Rows */}
        {timeSlots.map((time, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <View style={styles.timeCell}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            {days.map((day, colIndex) => {
              const isDataSlot = time === '9:00 AM' && day === 'Monday';
              return (
                <View key={colIndex} style={styles.cell}>
                  {isDataSlot ? (
                    <>
                      <Text style={styles.subjectText}>Data Structures</Text>
                      <Text style={styles.teacherText}>k_jackson</Text>
                    </>
                  ) : (
                    <Text style={styles.plusSign}>+</Text>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10,  },
  tabs: { flexDirection: 'row', marginBottom: 10, },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  activeTab: {
    backgroundColor: '#19747E',
  },
  tabText: {
    color: 'black',
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  
  },
  dropdown: {
    height: 43,
    width: 220,
    marginHorizontal: 10,
    backgroundColor: '#e0d4fa',
  },

  saveButton: {
    backgroundColor: '#3c52e3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '500',
    color:'black',
  },
  table: {
    borderWidth: 1,
  borderColor: '#aaa',
  },
  row: {
    flexDirection: 'row',
  },
  headerCellTime: {
    width: 80,
    height:50,
    backgroundColor: '#d2a4f3',
  },
  headerCell: {
    flex: 1,
    padding: 8,
    backgroundColor: '#a371ea',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    color: 'black',
  },
  timeCell: {
    width: 80,
    height:90,
    padding: 8,
    backgroundColor: '#e1bbf7',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  timeText: {
    color:"black",
  },
  cell: {
    flex: 1,
    height: 60,
    padding: 6,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    // borderBottomWidth:1,
    // borderRightWidth:1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',

  },

  
  subjectText: {
    // fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  teacherText: {
    fontSize: 10,
    color: 'black',
  },
  plusSign: {
    fontSize: 20,
    color: '#aaa',
  },
});

export default TimetableScreen;
