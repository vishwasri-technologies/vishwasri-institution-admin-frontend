
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialStudents = [
  {
    name: 'Allary Hitesh',
    roll: '214420862852',
    CGPA: '70%',
    subjects: [
      {subject: 'Mathematics', mark: '85'},
      {subject: 'Physics', mark: '78'},
      {subject: 'Chemistry', mark: '72'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
  {
    name: 'Allu Lokesh',
    roll: '214420862658',
    CGPA: '30%',
    subjects: [
      {subject: 'Mathematics', mark: '35'},
      {subject: 'Physics', mark: '28'},
      {subject: 'Chemistry', mark: '32'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
  {
    name: 'Chadla Rajesh',
    roll: '214420862150',
    CGPA: '60%',
    subjects: [
      {subject: 'Mathematics', mark: '65'},
      {subject: 'Physics', mark: '58'},
      {subject: 'Chemistry', mark: '62'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
  {
    name: 'Dhis Suresh',
    roll: '214420862066',
    CGPA: '32%',
    subjects: [
      {subject: 'Mathematics', mark: '38'},
      {subject: 'Physics', mark: '30'},
      {subject: 'Chemistry', mark: '35'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
  {
    name: 'Eddy Tanesh',
    roll: '214420862058',
    CGPA: '71%',
    subjects: [
      {subject: 'Mathematics', mark: '80'},
      {subject: 'Physics', mark: '75'},
      {subject: 'Chemistry', mark: '68'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
  {
    name: 'Joss Umesh',
    roll: '214420862068',
    CGPA: '50%',
    subjects: [
      {subject: 'Mathematics', mark: '55'},
      {subject: 'Physics', mark: '48'},
      {subject: 'Chemistry', mark: '52'},
    ],
    showEditor: false,
    newSubject: '',
    newMark: '',
  },
];

const ResultsScreen = () => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([
    {label: 'M.Tech', value: 'M.Tech'},
    {label: 'MBBS', value: 'MBBS'},
    {label: 'B.Tech', value: 'B.Tech'},
  ]);

  const [deptOpen, setDeptOpen] = useState(false);
  const [department, setDepartment] = useState(null);
  const [deptItems, setDeptItems] = useState([
    {label: 'CSE', value: 'CSE'},
    {label: 'ECE', value: 'ECE'},
    {label: 'IT', value: 'IT'},
    {label: 'EEE', value: 'EEE'},
  ]);

  const [yearOpen, setYearOpen] = useState(false);
  const [year, setYear] = useState(null);
  const [yearItems, setYearItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);

  const [semesterOpen, setSemesterOpen] = useState(false);
  const [semester, setSemester] = useState(null);
  const [semesterItems, setSemesterItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
  ]);

  const [sectionOpen, setSectionOpen] = useState(false);
  const [section, setSection] = useState(null);
  const [sectionItems, setSectionItems] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
  ]);

  const [students, setStudents] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState('');

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    const loadStudents = async () => {
      try {
        const savedStudents = await AsyncStorage.getItem('@students');
        if (savedStudents !== null) {
          setStudents(JSON.parse(savedStudents));
        }
      } catch (e) {
        console.error('Failed to load students', e);
      }
    };
    loadStudents();
  }, []);

  // Save data to AsyncStorage whenever students change
  useEffect(() => {
    const saveStudents = async () => {
      try {
        await AsyncStorage.setItem('@students', JSON.stringify(students));
      } catch (e) {
        console.error('Failed to save students', e);
      }
    };
    saveStudents();
  }, [students]);

  const toggleEditor = index => {
    setStudents(prev =>
      prev.map((student, i) =>
        i === index
          ? {...student, showEditor: !student.showEditor}
          : {...student, showEditor: false},
      ),
    );
  };

  const handleInputChange = (index, field, value) => {
    setStudents(prev =>
      prev.map((student, i) =>
        i === index ? {...student, [field]: value} : student,
      ),
    );
  };

  const addSubjectMark = index => {
    const student = students[index];
    if (!student.newSubject || !student.newMark) return;

    const updatedSubjects = [
      ...student.subjects,
      {subject: student.newSubject, mark: student.newMark},
    ];

    const updatedStudent = {
      ...student,
      subjects: updatedSubjects,
      newSubject: '',
      newMark: '',
    };

    setStudents(prev => prev.map((s, i) => (i === index ? updatedStudent : s)));
  };

  const handleEditMark = (studentIndex, subjectIndex, newMark) => {
    setStudents(prev =>
      prev.map((student, i) =>
        i === studentIndex
          ? {
              ...student,
              subjects: student.subjects.map((s, j) =>
                j === subjectIndex ? {...s, mark: newMark} : s,
              ),
            }
          : student,
      ),
    );
  };

  const deleteSubject = (studentIndex, subjectIndex) => {
    setStudents(prev =>
      prev.map((student, i) =>
        i === studentIndex
          ? {
              ...student,
              subjects: student.subjects.filter((_, j) => j !== subjectIndex),
            }
          : student,
      ),
    );
  };

  const filteredStudents = students.filter(student =>
    student.roll.includes(searchQuery),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sem Results</Text>

      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/search.png')}
          style={styles.searchIconImage}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Search by roll number"
          placeholderTextColor="gray"
          style={styles.searchInput}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

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
        />
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
          zIndex={3000}
        />
        <DropDownPicker
          open={semesterOpen}
          value={semester}
          items={semesterItems}
          setOpen={setSemesterOpen}
          setValue={setSemester}
          setItems={setSemesterItems}
          placeholder="Semester"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={2000}
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
          zIndex={1000}
        />
      </View>

      <ScrollView>
        <View>
          <View style={styles.rowHeader}>
            <Text style={styles.cellHeader}>Name</Text>
            <Text style={styles.cellHeader}>Roll no</Text>
            <Text style={styles.cellHeader}>CGPA</Text>
            <Text style={styles.cellHeaderAction}>Subjects</Text>
          </View>

          {filteredStudents.map((student, idx) => (
            <View key={idx}>
              <View style={styles.row}>
                <Text style={styles.cell}>{student.name}</Text>
                <Text style={styles.cell}>{student.roll}</Text>
                <Text
                  style={[
                    styles.cell,
                    {color: parseInt(student.CGPA) < 45 ? 'red' : 'green'},
                  ]}>
                  {student.CGPA}
                </Text>
                <View style={styles.actionCell}>
                  <TouchableOpacity onPress={() => toggleEditor(idx)}>
                    <Text style={styles.viewButton}>
                      {student.showEditor ? 'Hide' : 'View/Edit'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {student.showEditor && (
                <View style={styles.subjectContainer}>
                  <Text style={styles.subjectTitle}>Subjects & Marks</Text>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.subjectsRow}>
                    {student.subjects.map((s, subIdx) => (
                      <View key={`subject-${subIdx}`} style={styles.subjectColumn}>
                        <View style={styles.subjectItemContainer}>
                          <Text style={styles.subjectName} numberOfLines={1}>
                            {s.subject}
                          </Text>
                          <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteSubject(idx, subIdx)}>
                            <Text style={styles.deleteButtonText}>×</Text>
                          </TouchableOpacity>
                        </View>
                        <TextInput
                          value={s.mark}
                          onChangeText={text => handleEditMark(idx, subIdx, text)}
                          style={styles.markInput}
                          keyboardType="numeric"
                        />
                      </View>
                    ))}
                  </ScrollView>

                  <View style={styles.addSubjectContainer}>
                    <TextInput
                      placeholder="Subject Name"
                      placeholderTextColor="#666"
                      value={student.newSubject}
                      onChangeText={text => handleInputChange(idx, 'newSubject', text)}
                      style={styles.subjectInput}
                    />
                    <TextInput
                      placeholder="Marks"
                      placeholderTextColor="#666"
                      value={student.newMark}
                      onChangeText={text => handleInputChange(idx, 'newMark', text)}
                      keyboardType="numeric"
                      style={styles.markInputAdd}
                    />
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => addSubjectMark(idx)}>
                      <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 20,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    zIndex: 9999,
  },
  dropdownContainer: {
    width: 150,
    marginRight: 10,
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#ddd',
    borderRadius: 8,
    height: 40,
    backgroundColor: '#f9f9f9',
  },
  rowHeader: {
    flexDirection: 'row',
    backgroundColor: '#d8bfd8',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cellHeader: {
    flex: 1,
    color: '#444',
    fontWeight: '600',
    fontSize: 14,
  },
  cellHeaderAction: {
    width: 80,
    color: '#444',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    color: '#333',
    fontSize: 14,
  },
  actionCell: {
    width: 80,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  searchIconImage: {
    height: 20,
    width: 25,
    marginRight: 10,
    tintColor: '#666',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  viewButton: {
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
  subjectContainer: {
    padding: 15,
    backgroundColor: '#f8f8ff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  subjectTitle: {
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  subjectsRow: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  subjectColumn: {
    marginRight: 15,
    minWidth: 100,
    alignItems: 'flex-start',
  },
  subjectItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
    padding: 8,
    borderRadius: 4,
    marginBottom: 5,
  },
  subjectName: {
    flex: 1,
    color: '#333',
    marginRight: 5,
  },
  markInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#fff',
    color: '#333',
    width: 100,
  },
  subjectInput: {
    width: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  markInputAdd: {
    width: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
  },
  addSubjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default ResultsScreen;
