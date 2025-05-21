
import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import Sidebar from '../components/Slide';
import Navbar from '../components/Navbar';
import StudentManagement from './StudentManagement';
import FacultyManagement from './FacultyManagement';
import TimetableScreen from './TimetableScreen';
import AcademicCalendar from './AcademicCalender';
import AttendanceManagement from './AttendanceManagement';
import AttendancebyClass from './AttendancebyClass';
import ExamTimetable from './ExamsTimeTable';
import FeePayments from './FeePayments';
import Feedback from './Feedback';
import AnnouncementForm from './Announcements';
import ManageProfile from './ManageProfiles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

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
        return <TimetableScreen />;
      case 'Attendance Management':
        return <AttendanceManagement />;
      case ' AttendancebyClass':
        return <AttendancebyClass />;
      case 'Exams & Results':
        return <ExamTimetable />;
      case 'Fee & Payments':
        return <FeePayments />;
      case 'Feedback & Complaints':
        return <Feedback />;
      case 'Announcements':
        return <AnnouncementForm />;
      case 'Manage Profiles':
        return <ManageProfile />;
      default:
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <DashboardGrid onSelect={setActiveScreen} />
          </ScrollView>
        );
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
    'Student Management',
    'Faculty Management',
    'Academic Calender',
    'Timetable Management',
    'Attendance Management',
    'Fee & Payments',
    'Exams & Results',
    'Announcements',
    'Manage Profiles',
    'Feedback & Complaints',
  ];

  const colors = [
    '#BD9EFF99',
    '#9EA2FFB2',
    '#F5C1C1',
    '#9ECBFF',
    '#9EEEFF',
    '#C1F5E2',
    '#F5D4C1',
    '#EEF5C1',
    '#C8F5C1',
    '#FFD1DC',
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
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  box: {
    flexBasis:
      SCREEN_WIDTH > 1600
        ? '22%'
        : SCREEN_WIDTH > 1200
        ? '30%'
        : SCREEN_WIDTH > 800
        ? '45%'
        : '90%',
    height: SCREEN_HEIGHT > 900 ? 180 : SCREEN_HEIGHT > 700 ? 150 : 130,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
    elevation: 4,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default Home;









