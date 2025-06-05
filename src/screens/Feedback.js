
import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DATA = [
  {
    id: '214420862852',
    name: 'Allary Hitesh',
    complaints: 'Complaints 2',
    feedback: 5,
    description: [
      'The teacher is rushing through topics very fast. It is difficult to understand. Please help.',
      'The faculty often scolds students harshly in class. It makes the class environment uncomfortable.'
    ],
  },
  {
    id: '214420862658',
    name: 'Allu Lokesh',
    complaints: 'Complaints 1',
    feedback: 4,
    description: [
      'Complaint about lab availability. The equipment is often not working properly.'
    ],
  },
  {
    id: '214420862150',
    name: 'Chadla Rajesh',
    complaints: 'Complaints 3',
    feedback: 5,
    description: [
      'Slow response from faculty regarding doubts.',
      'Assignment deadlines are too strict.',
      'Need more practical examples in lectures.'
    ],
  },
  {
    id: '214420862066',
    name: 'Dhis Suresh',
    complaints: 'Complaints 5',
    feedback: 4,
    description: [
      'Need better project guidance.',
      'Library hours should be extended.',
      'More industry visits should be arranged.',
      'Course curriculum needs updating.',
      'Better WiFi connectivity in classrooms.'
    ],
  },
];

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


export default function Feedback() {
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
     // Update dependent dropdowns when course changes
      useEffect(() => {
        if (course && courseData[course]) {
          setDeptItems(courseData[course].departments);
       
          
          // Clear selected values if course changes
          setDepartment(null);
        
        }
      }, [course]);

  const [expandedRow, setExpandedRow] = useState(null);

  const renderStars = (count) => '⭐'.repeat(count);

  const handleView = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const renderDescription = (descriptions) => {
    return descriptions.map((item, index) => (
      <Text key={index} style={styles.descriptionItem}>
        {index + 1}. {item}
      </Text>
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.rowContainer}>
      <View style={styles.row}>
        <Text style={styles.cell}>{item.name}</Text>
        {/* <Text style={styles.cell}>{item.id}</Text> */}
        <View style={styles.cell}>
          <Text style={styles.complaintText}>  {item.complaints}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleView(item.id)}
          >
            <Text style={styles.buttonText}>
              {expandedRow === item.id ? 'Hide' : 'View'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cell}>{renderStars(item.feedback)}</Text>
      </View>
      {expandedRow === item.id && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Complaints</Text>
          {renderDescription(item.description)}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback & Complaints</Text>

      <View style={styles.dropdownContainer}>
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
          zIndex={5000}
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
          zIndex={4000}
          disabled={!course}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerCell}>Name</Text>
        {/* <Text style={styles.headerCell}>ID</Text> */}
        <Text style={styles.headerCell}>Complaints</Text>
        <Text style={styles.headerCell}>Feedback</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
    textAlign: 'left',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    zIndex: 1000,
    marginBottom: 20,
    width: 200,
    gap:10,
  },
  dropdown: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#DCC4EB',
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerCell: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  rowContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'black',
  },
  complaintText: {
    color: 'black',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#ddd',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 12,
    color: 'black',
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  descriptionTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionItem: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    marginLeft: 10,
  },
});