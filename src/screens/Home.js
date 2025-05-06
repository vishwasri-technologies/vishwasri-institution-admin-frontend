
import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Sidebar from '../components/Slide';
import Navbar from '../components/Navbar';
import StudentManagement from './StudentManagement';
import FacultyManagement from './FacultyManagement';
import TimetableScreen from './TimetableScreen';
import AcademicCalendar from './AcademicCalender';
import AttendanceManagement from './AttendanceManagement';
import AttendancebyClass from './AttendancebyClass';




const { width: SCREEN_WIDTH,height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = () => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');

  const renderContent = () => {
    switch (activeScreen) {
      case 'Student Management':
        return <StudentManagement />;
      case 'Faculty Management':
        return <FacultyManagement />;
        case 'Academic Calender':
          return <AcademicCalendar />;
        case 'Timetable Management':
          return <TimetableScreen/>;
        case 'Attendance Management':
          return <AttendanceManagement/>
          case ' AttendancebyClass':
            return < AttendancebyClass/>
      default:
        return <DashboardGrid onSelect={setActiveScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
      <Sidebar onSelectSection={setActiveScreen} selectedSection={activeScreen} />

        <View style={styles.mainContent}>{renderContent()}</View>
      </View>
    </View>
  );
};

const DashboardGrid = ({ onSelect }) => {
  const items = [
    'Student Management', 'Faculty Management', 'Academic Calender', 'Timetable Management',
    'Attendance Management', 'Fee & Payments', 'Exam & Results',
    'Announcements', 'Feedback & Complaints',
  ];

  const colors = [
    '#ff9999', '#99ccff', '#99ff99', '#ffcc99', '#cc99ff',
    '#ffff99', '#ffb3e6', '#c2f0c2', '#b3d1ff',
  ];

  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
        <View
          key={item}
          style={[styles.box, { backgroundColor: colors[index % colors.length] }]}
          onTouchEnd={() => onSelect(item)}
        >
          <Text style={styles.boxText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, flexDirection: 'row' },
  mainContent: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },

  // Responsive Grid Styling
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  box: {
    flexBasis: SCREEN_WIDTH > 1600 ? '22%' : SCREEN_WIDTH > 1200 ? '31%' : '37%',
    height: SCREEN_HEIGHT > 900 ? 180 : SCREEN_HEIGHT > 700 ? 150 : 120,
    aspectRatio: 2,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
    elevation: 4,

  },
  boxText: { fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' },
});

export default Home;








