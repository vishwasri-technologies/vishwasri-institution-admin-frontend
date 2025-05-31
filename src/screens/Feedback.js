
import React, { useState } from 'react';
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

export default function Feedback() {
  const [openCourse, setOpenCourse] = useState(false);
  const [valueCourse, setValueCourse] = useState(null);
  const [courses, setCourses] = useState([
    { label: 'B.Tech', value: 'btech' },
    { label: 'M.Tech', value: 'mtech' },
  ]);

  const [openDept, setOpenDept] = useState(false);
  const [valueDept, setValueDept] = useState(null);
  const [departments, setDepartments] = useState([
    { label: 'CSE', value: 'cse' },
    { label: 'ECE', value: 'ece' },
  ]);

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
          open={openCourse}
          value={valueCourse}
          items={courses}
          setOpen={setOpenCourse}
          setValue={setValueCourse}
          setItems={setCourses}
          placeholder="Course"
          containerStyle={styles.dropdown}
          zIndex={3000}
          zIndexInverse={1000}
        />

        <DropDownPicker
          open={openDept}
          value={valueDept}
          items={departments}
          setOpen={setOpenDept}
          setValue={setValueDept}
          setItems={setDepartments}
          placeholder="Department"
          containerStyle={styles.dropdown}
          zIndex={2000}
          zIndexInverse={2000}
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
    justifyContent: 'space-between',
    zIndex: 1000,
    marginBottom: 20,
    width: 400,
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 5,
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