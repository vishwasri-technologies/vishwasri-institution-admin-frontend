import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

// Custom CheckBox component for Windows compatibility
const CheckBox = ({ value, onValueChange, disabled }) => {
  return (
    <TouchableOpacity 
      onPress={() => !disabled && onValueChange(!value)}
      style={[styles.checkboxBase, value && styles.checkboxChecked]}
      disabled={disabled}
    >
      {value && <View style={styles.checkboxInner}/>}
    </TouchableOpacity>
  );
};

const EditStudentProfileScreen = () => {
  const [editable, setEditable] = useState(false);
  const [gender, setGender] = useState('Male');

  const toggleEdit = () => setEditable(true);
  const saveChanges = () => setEditable(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Allary Hitesh</Text>
          <Text style={styles.roll}>214420862852</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={saveChanges}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Academic Details */}
      <Section title="Academic Details">
        <Row label="Course" value="B.Tech - Computer Science" editable={editable} />
        <Row label="Department" value="Computer Engineering" editable={editable} />
        <Row label="Semester" value="4" editable={editable} />
        <Row label="Date of Admission" value="20-07-2025 (Optional)" editable={editable} />
      </Section>

      {/* Personal Details */}
      <Section title="Personal Details">
        <Row label="Date of Birth" value="20-05-2005" editable={editable} />
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity 
              style={styles.genderOption} 
              onPress={() => editable && setGender('Male')}
              disabled={!editable}
            >
              <View style={[styles.radioOuter, !editable && styles.disabled]}>
                {gender === 'Male' && <View style={styles.radioInner}/>}
              </View>
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.genderOption} 
              onPress={() => editable && setGender('Female')}
              disabled={!editable}
            >
              <View style={[styles.radioOuter, !editable && styles.disabled]}>
                {gender === 'Female' && <View style={styles.radioInner}/>}
              </View>
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Row label="Email ID" value="allaryhitesh@gmail.com" editable={editable} />
        <Row label="Mobile Number" value="93665 22508" editable={editable} />
        <Row
          label="Address"
          value="101, MG Road, Bangalore, Karnataka, India – 560001"
          editable={editable}
          multiline
        />
      </Section>

      {/* Guardian Details */}
      <Section title="Guardian Details">
        <Row label="Name" value="Raj Kumar" editable={editable} />
        <Row label="Relation" value="Father" editable={editable} />
        <Row label="Email ID" value="allaryraj@gmail.com" editable={editable} />
        <Row label="Mobile Number" value="93665 21120" editable={editable} />
      </Section>
    </ScrollView>
  );
};

// Section component
const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

// Reusable row
const Row = ({ label, value, editable, multiline = false }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.multilineInput]}
      value={value}
      editable={editable}
      multiline={multiline}
    />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  roll: {
    fontSize: 16,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#006d77',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
  },
  multilineInput: {
    height: 60,
    textAlignVertical: 'top',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.select({ windows: 4, default: 0 }),
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  genderText: {
    fontSize: 14,
    marginLeft: 8,
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#006d77',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#006d77',
  },
  disabled: {
    borderColor: '#aaa',
    opacity: 0.6,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#006d77',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#006d77',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
  },
});

export default EditStudentProfileScreen;