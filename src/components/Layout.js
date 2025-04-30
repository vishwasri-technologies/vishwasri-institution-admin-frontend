// Layout.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './Slide';

import StudentManagement from '../screens/StudentManagement';
// import FacultyManagement from './sections/FacultyManagement';


const Layout = () => {
  const [activeSection, setActiveSection] = useState('Student Management');

  const renderSection = () => {
    switch (activeSection) {
      case 'Student Management':
        return <StudentManagement />;
    //   case 'Faculty Management':
    //     return <FacultyManagement />;
      default:
        return <StudentManagement />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Sidebar onSelectSection={setActiveSection} />
      </View>
      <View style={styles.main}>
        <View style={styles.content}>
          {renderSection()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 1 },
  sidebar: { width: 200, backgroundColor: '#1f4d5a' },
  main: { flex: 1 },
  content: { flex: 1, padding: 10 },
});

export default Layout;
