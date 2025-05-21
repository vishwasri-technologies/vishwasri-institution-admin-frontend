
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Platform, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FacultyProfiles from './FacultyProfiles';

const studentsData = [
  { name: 'Allary Hitesh', id: '214420862852' },
  { name: 'Allu Lokesh', id: '214420862658' },
  { name: 'Chadla Rajesh', id: '214420862150' },
  { name: 'Dhis Suresh', id: '214420862066' },
  { name: 'Eddy Tanes', id: '214420862058' },
  { name: 'Joss Umesh', id: '214420862068' },
  { name: 'Karnal Yogesh', id: '214420862000' },
  { name: 'Main Ganesh', id: '214420862456' },
];

const CustomCheckbox = ({ label, value, onValueChange }) => (
  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={() => onValueChange(!value)}
  >
    <View style={[styles.checkbox, value && styles.checkedCheckbox]} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function StudentProfiles() {
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('student');
  const [editingStudent, setEditingStudent] = useState(null);
  const [studentForm, setStudentForm] = useState({
    name: 'Allary Hitesh',
    id: '214420862852',
    course: 'B.Tech - Computer Science',
    department: 'Computer Engineering',
    semester: '4',
    admissionDate: '20-07-2025',
    dob: '20-05-2005',
    gender: 'Male',
    email: 'allaryhitesh@gmail.com',
    mobile: '93685 22508',
    address: '101, MG Road, Bangalore, Karnataka, India - 560001',
    guardianName: 'Raj Kumar',
    guardianRelation: 'Father',
    guardianEmail: 'allaryraj@gmail.com',
    guardianMobile: '93685 21120'
  });

  const filteredStudents = studentsData.filter(student =>
    student.id.includes(search)
  );

  const handleSaveEdit = () => {
    setEditingStudent(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}><Text style={styles.blackText}>{item.name}</Text></View>
      <View style={styles.cell}><Text style={styles.blackText}>{item.id}</Text></View>
      <View style={styles.cell}>
       <TouchableOpacity
  style={styles.editButton}
  onPress={() => {
    setEditingStudent(item);
    setStudentForm({
      ...studentForm,
      name: item.name,
      id: item.id,
    });
  }}
>
          <Text style={styles.blackText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEditForm = () => (
    <ScrollView contentContainerStyle={styles.editContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>{studentForm.name}</Text>
          <Text style={styles.profileId}>{studentForm.id}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
          <TouchableOpacity style={[styles.editButton, styles.cancelButton]} onPress={() => setEditingStudent(null)}>
            <Text style={styles.blackText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.editButton, styles.saveEditButton]} onPress={handleSaveEdit}>
            <Text style={styles.whiteText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Academic Details</Text>
      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Course</Text>
          <TextInput style={styles.editInput} value={studentForm.course} onChangeText={(text) => setStudentForm({ ...studentForm, course: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Department</Text>
          <TextInput style={styles.editInput} value={studentForm.department} onChangeText={(text) => setStudentForm({ ...studentForm, department: text })} />
        </View>
      </View>
      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Semester</Text>
          <TextInput style={styles.editInput} value={studentForm.semester} onChangeText={(text) => setStudentForm({ ...studentForm, semester: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Date of Admission</Text>
          <TextInput style={styles.editInput} value={studentForm.admissionDate} onChangeText={(text) => setStudentForm({ ...studentForm, admissionDate: text })} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Personal Details</Text>
      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Date of Birth</Text>
          <TextInput style={styles.editInput} value={studentForm.dob} onChangeText={(text) => setStudentForm({ ...studentForm, dob: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Gender</Text>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <CustomCheckbox label="Male" value={studentForm.gender === 'Male'} onValueChange={() => setStudentForm({ ...studentForm, gender: 'Male' })} />
            <CustomCheckbox label="Female" value={studentForm.gender === 'Female'} onValueChange={() => setStudentForm({ ...studentForm, gender: 'Female' })} />
          </View>
        </View>
      </View>

      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Email ID</Text>
          <TextInput style={styles.editInput} value={studentForm.email} onChangeText={(text) => setStudentForm({ ...studentForm, email: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Mobile Number</Text>
          <TextInput style={styles.editInput} value={studentForm.mobile} onChangeText={(text) => setStudentForm({ ...studentForm, mobile: text })} />
        </View>
      </View>
      <View style={styles.fullField}>
        <Text style={styles.editLabel}>Address</Text>
        <TextInput style={styles.editInput} value={studentForm.address} onChangeText={(text) => setStudentForm({ ...studentForm, address: text })} />
      </View>

      <Text style={styles.sectionTitle}>Guardian Details</Text>
      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Name</Text>
          <TextInput style={styles.editInput} value={studentForm.guardianName} onChangeText={(text) => setStudentForm({ ...studentForm, guardianName: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Relation</Text>
          <TextInput style={styles.editInput} value={studentForm.guardianRelation} onChangeText={(text) => setStudentForm({ ...studentForm, guardianRelation: text })} />
        </View>
      </View>
      <View style={styles.rowField}>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Email ID</Text>
          <TextInput style={styles.editInput} value={studentForm.guardianEmail} onChangeText={(text) => setStudentForm({ ...studentForm, guardianEmail: text })} />
        </View>
        <View style={styles.halfField}>
          <Text style={styles.editLabel}>Mobile Number</Text>
          <TextInput style={styles.editInput} value={studentForm.guardianMobile} onChangeText={(text) => setStudentForm({ ...studentForm, guardianMobile: text })} />
        </View>
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={activeTab === 'student' ? styles.activeTab : styles.inactiveTab} onPress={() => { setActiveTab('student'); setEditingStudent(null); }}>
          <Text style={activeTab === 'student' ? styles.activeTabText : styles.tabText}>Student profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={activeTab === 'faculty' ? styles.activeTab : styles.inactiveTab} onPress={() => { setActiveTab('faculty'); setEditingStudent(null); }}>
          <Text style={activeTab === 'faculty' ? styles.activeTabText : styles.tabText}>Faculty profiles</Text>
        </TouchableOpacity>
      </View>

      {editingStudent ? renderEditForm() : (
        activeTab === 'student' ? (
          <>
            <View style={styles.filters}>
              <Picker selectedValue={course} onValueChange={setCourse} style={[styles.picker, styles.purplePicker]} dropdownIconColor="white">
                <Picker.Item label="Course" value="" color="white" />
                <Picker.Item label="B.Tech" value="btech" color="white" />
                <Picker.Item label="M.Tech" value="Mtech" color="white" />
                <Picker.Item label="MBBS" value="MBBS" color="white" />
                <Picker.Item label="EEE" value="EEE" color="white" />
              </Picker>
              <Picker selectedValue={department} onValueChange={setDepartment} style={[styles.picker, styles.indigoPicker]} dropdownIconColor="white">
                <Picker.Item label="Department" value="" color="white" />
                <Picker.Item label="CSE" value="cse" color="white" />
                <Picker.Item label="ECE" value="ece" color="white" />
                <Picker.Item label="IT" value="it" color="white" />
                <Picker.Item label="EEE" value="eee" color="white" />
              </Picker>
              <Picker selectedValue={year} onValueChange={setYear} style={[styles.picker, styles.cyanPicker]} dropdownIconColor="white">
                <Picker.Item label="Year" value="" color="white" />
                <Picker.Item label="1st" value="1st" color="white" />
                <Picker.Item label="2nd" value="2nd" color="white" />
                <Picker.Item label="3rd" value="3rd" color="white" />
                <Picker.Item label="4th" value="4th" color="white" />
              </Picker>
              <Picker selectedValue={section} onValueChange={setSection} style={[styles.picker, styles.tealPicker]} dropdownIconColor="white">
                <Picker.Item label="Section" value="" color="white" />
                <Picker.Item label="A" value="A" color="white" />
                <Picker.Item label="B" value="B" color="white" />
                <Picker.Item label="C" value="C" color="white" />
                <Picker.Item label="D" value="D" color="white" />
              </Picker>
              <TextInput placeholder="Search by roll number" placeholderTextColor="#666" value={search} onChangeText={setSearch} style={styles.searchInput} />
              <TouchableOpacity style={styles.saveButton}><Text style={styles.whiteText}>Save</Text></TouchableOpacity>
            </View>

            <View style={styles.tableHeader}>
              <View style={styles.headerCell}><Text style={styles.blackText}>Name</Text></View>
              <View style={styles.headerCell}><Text style={styles.blackText}>Roll no</Text></View>
              <View style={styles.headerCell}><Text style={styles.blackText}>Student Profile</Text></View>
            </View>

            <FlatList data={filteredStudents} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
          </>
        ) : (
          <FacultyProfiles />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  tabContainer: { flexDirection: 'row', marginBottom: 16 },
  activeTab: { backgroundColor: '#007d8f', padding: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, flex: 1, alignItems: 'center' },
  inactiveTab: { backgroundColor: '#f0f0f0', padding: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, flex: 1, alignItems: 'center' },
  activeTabText: { fontWeight: '600', color: 'white' },
  tabText: { fontWeight: '600', color: 'black' },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16, alignItems: 'center' },
  picker: { width: 150, height: 40, borderRadius: 8, color: 'white', borderWidth: 1, borderColor: 'black' },
  purplePicker: { backgroundColor: '#9b59b6' },
  indigoPicker: { backgroundColor: '#a29bfe' },
  cyanPicker: { backgroundColor: '#74b9ff' },
  tealPicker: { backgroundColor: '#81ecec' },
  searchInput: { borderWidth: 1, borderColor: '#aaa', borderRadius: 8, paddingHorizontal: 10, height: 40, flex: 1, minWidth: 180, backgroundColor: 'transparent', color: 'black', paddingTop: 10 },
  saveButton: { backgroundColor: '#007d8f', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6, marginLeft: 8 },
  tableHeader: { flexDirection: 'row', backgroundColor: '#d2b4f2', padding: 10, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  headerCell: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', borderWidth: 1, borderColor: '#ccc', alignItems: 'center' },
  cell: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 },
  editButton: { backgroundColor: '#f0f0f0', padding: 6, borderRadius: 6, borderWidth: 1, borderColor: '#999' },
  blackText: { color: 'black',alignSelf:'center' },
  whiteText: { color: 'white',alignSelf:'center' },
  editContainer: { padding: 20,  },
  editTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'black', textAlign: 'center' },
  editField: { marginBottom: 15, },
  editLabel: { fontSize: 16, marginBottom: 5, color: 'black' },
  editInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, fontSize: 16, color: 'black',backgroundColor:'transparent' },
  editButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  cancelButton: { backgroundColor: '#f0f0f0', width:'10%',marginLeft:'55%', },
  saveEditButton: { backgroundColor: '#007d8f', width:'10%', },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#333', marginRight: 8, backgroundColor: '#fff' },
  checkedCheckbox: { backgroundColor: '#007d8f' },
  checkboxLabel: { color: 'black', fontSize: 16 },
    profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profileId: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  rowField: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  halfField: {
    flex: 1,
  },
  fullField: {
    marginBottom: 15,
  },
  profileHeaderRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
},

});

