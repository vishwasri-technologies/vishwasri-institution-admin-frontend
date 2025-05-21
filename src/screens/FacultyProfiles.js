

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet,Image,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import StudentProfiles from './ManageProfiles';

const facultyData = [
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

export default function FacultyProfiles() {
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('faculty');
   const [editingFaculty, setEditingFaculty] = useState(null);
    const [facultyForm, setFacultyForm] = useState({
      name: 'Allary Hitesh',
    id: '214420862852',
    designation: 'Assistant Professor',
    department: 'Computer Engineering',
    experience: '4+ years',
    dateofjoining: '20-07-2025',
    subjecthandling:'Data structures',
    dob: '20-05-2005',
    gender: 'Male',
    email: 'allaryhitesh@gmail.com',
    mobile: '93685 22508',
    address: '101, MG Road, Bangalore, Karnataka, India - 560001',
    undergraduation: 'B.com in computer application',
    postgraduation: 'M.com in computer application',
    doctorate: 'Information Systems-NTT Trichy 2014',
    certifications: 'AWS certified Educator',
  });

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.id.includes(search)
  );
   const handleSaveEdit = () => {
    setEditingFaculty(null);
  };

 const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}><Text style={styles.blackText}>{item.name}</Text></View>
      <View style={styles.cell}><Text style={styles.blackText}>{item.id}</Text></View>
      <View style={styles.cell}>
       <TouchableOpacity
  style={styles.editButton}
  onPress={() => {
    setEditingFaculty(item);
    setFacultyForm({
      ...facultyForm,
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
            <Text style={styles.profileName}>{facultyForm.name}</Text>
            <Text style={styles.profileId}>{facultyForm.id}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <TouchableOpacity style={[styles.editButton, styles.cancelButton]} onPress={() => setEditingFaculty(null)}>
              <Text style={styles.blackText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.editButton, styles.saveEditButton]} onPress={handleSaveEdit}>
              <Text style={styles.whiteText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <Text style={styles.sectionTitle}>Professional Details</Text>
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Designation</Text>
            <TextInput style={styles.editInput} value={facultyForm.designation} onChangeText={(text) => setFacultyForm({ ...facultyForm, designation: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Department</Text>
            <TextInput style={styles.editInput} value={facultyForm.department} onChangeText={(text) => setFacultyForm({ ...facultyForm, department: text })} />
          </View>
        </View>
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Experience</Text>
            <TextInput style={styles.editInput} value={facultyForm.experience} onChangeText={(text) => setFacultyForm({ ...facultyForm, experience: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Date of Joining</Text>
            <TextInput style={styles.editInput} value={facultyForm.dateofjoining} onChangeText={(text) => setFacultyForm({ ...facultyForm, dateofjoining: text })} />
          </View>
           {/* <View style={styles.rowField}> */}
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Subject Handling</Text>
            <TextInput style={styles.editInput} value={facultyForm.subjecthandling} onChangeText={(text) => setFacultyForm({ ...facultyForm, subjecthandling: text })} />
          </View>
          {/* </View> */}
        </View>
  
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Date of Birth</Text>
            <TextInput style={styles.editInput} value={facultyForm.dob} onChangeText={(text) => setFacultyForm({ ...facultyForm, dob: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Gender</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <CustomCheckbox label="Male" value={facultyForm.gender === 'Male'} onValueChange={() =>setFacultyForm({ ...facultyForm, gender: 'Male' })} />
              <CustomCheckbox label="Female" value={facultyForm.gender === 'Female'} onValueChange={() => setFacultyForm({ ...facultyForm, gender: 'Female' })} />
            </View>
          </View>
        </View>
  
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Email ID</Text>
            <TextInput style={styles.editInput} value={facultyForm.email} onChangeText={(text) => setFacultyForm({ ...facultyForm, email: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Mobile Number</Text>
            <TextInput style={styles.editInput} value={facultyForm.mobile} onChangeText={(text) => setFacultyForm({ ...facultyForm, mobile: text })} />
          </View>
        </View>
        <View style={styles.fullField}>
          <Text style={styles.editLabel}>Address</Text>
          <TextInput style={styles.editInput} value={facultyForm.address} onChangeText={(text) => setFacultyForm({ ...facultyForm, address: text })} />
        </View>
  
        <Text style={styles.sectionTitle}>Academic Qualifications</Text>
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Under Graduation</Text>
            <TextInput style={styles.editInput} value={facultyForm.undergraduation} onChangeText={(text) => setFacultyForm({ ...facultyForm, undergraduation: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Post Graduation</Text>
            <TextInput style={styles.editInput} value={facultyForm.postgraduation} onChangeText={(text) => setFacultyForm({ ...facultyForm, postgraduation: text })} />
          </View>
        </View>
        <View style={styles.rowField}>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>Doctorate (Ph.D)</Text>
            <TextInput style={styles.editInput} value={facultyForm.doctorate} onChangeText={(text) => setFacultyForm({ ...facultyForm, doctorate: text })} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.editLabel}>certifications</Text>
            <TextInput style={styles.editInput} value={facultyForm.certifications} onChangeText={(text) => setFacultyForm({ ...facultyForm, certifications: text })} />
          </View>
        </View>
      </ScrollView>
    );

return (
  <View style={styles.container}>
    {editingFaculty ? (
      renderEditForm()
    ) : activeTab === 'faculty' ? (
      <>
        <View style={styles.filters}>
          <Picker
            selectedValue={course}
            onValueChange={setCourse}
            style={[styles.picker, styles.purplePicker]}
            dropdownIconColor="white"
            mode="dropdown"
          >
            <Picker.Item label="Course" value="" color="white" />
            <Picker.Item label="B.Tech" value="btech" color="white" />
            <Picker.Item label="M.Tech" value="Mtech" color="white" />
            <Picker.Item label="MBBS" value="MBBS" color="white" />
            <Picker.Item label="EEE" value="EEE" color="white" />
          </Picker>

          <Picker
            selectedValue={department}
            onValueChange={setDepartment}
            style={[styles.picker, styles.indigoPicker]}
            dropdownIconColor="black"
            mode="dropdown"
          >
            <Picker.Item label="Department" value="" color="white" />
            <Picker.Item label="CSE" value="cse" color="white" />
            <Picker.Item label="ECE" value="ece" color="white" />
            <Picker.Item label="IT" value="it" color="white" />
            <Picker.Item label="EEE" value="eee" color="white" />
          </Picker>

          <TextInput
            placeholder="Search by faculty ID"
            placeholderTextColor="#666"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.whiteText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableHeader}>
          <View style={styles.headerCell}><Text style={styles.blackText}>Name</Text></View>
          <View style={styles.headerCell}><Text style={styles.blackText}>Faculty ID</Text></View>
          <View style={styles.headerCell}><Text style={styles.blackText}>Faculty Profile</Text></View>
        </View>

        <FlatList
          data={filteredFaculty}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </>
    ) : (
      <StudentProfiles />
    )}
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  activeTab: {
    backgroundColor: '#007d8f',
    padding: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  inactiveTab: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  activeTabText: {
    fontWeight: '600',
    color: 'white',
  },
  tabText: {
    fontWeight: '600',
    color: 'black',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  picker: {
    width: 150,
    height: 40,
    borderRadius: 8,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
  purplePicker: {
    backgroundColor: '#9b59b6',
  },
  indigoPicker: {
    backgroundColor: '#a29bfe',
  },
  cyanPicker: {
    backgroundColor: '#74b9ff',
  },
  tealPicker: {
    backgroundColor: '#81ecec',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
    minWidth: 180,
    backgroundColor: 'transparent',
    color: 'black',
    paddingTop: 10,
  },
  saveButton: {
    backgroundColor: '#007d8f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginLeft: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#d2b4f2',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  editButton: {
    backgroundColor: '#f0f0f0',
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#999',
  },
  blackText: {
    color: 'black',
    alignSelf:"center",
  },
  whiteText: {
    color: 'white',
    alignSelf:"center",
  },
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












