import React from 'react';
import { View, StyleSheet } from 'react-native';
import StudentManagement from '../screens/StudentManagement';
// import other screens similarly

const ContentContainer = ({ selectedScreen }) => {
  const ScreenComponent = {
    StudentManagement: <StudentManagement />,
    // FacultyManagement: <FacultyManagement />,
    // TimetableManagement: <TimetableManagement />,
    // AttendanceMonitoring: <AttendanceMonitoring />,
    // FeePayments: <FeePayments />,
    // ExamResults: <ExamResults />,
    // Announcements: <Announcements />,
    // FeedbackComplaints: <FeedbackComplaints />,
    // AcademicCalendar: <AcademicCalendar />,
  }[selectedScreen];

  return <View style={styles.content}>{ScreenComponent}</View>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});

export default ContentContainer;