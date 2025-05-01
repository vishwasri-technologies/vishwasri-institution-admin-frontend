

// import React, { useState } from 'react';
// import { View, StyleSheet,Text } from 'react-native';
// import Sidebar from '../components/Slide';
// import Navbar from '../components/Navbar';
// import StudentManagement from './StudentManagement';
// import FacultyManagement from './FacultyManagement';

// const Home = () => {
//   const [activeScreen, setActiveScreen] = useState('Dashboard');

//   const renderContent = () => {
//     switch (activeScreen) {
//       case 'Student Management':
//         return <StudentManagement />;
//         case 'Faculty Management':
//           return <FacultyManagement/>;
//       default:
//         return <DashboardGrid onSelect={setActiveScreen} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Navbar />
//       <View style={styles.content}>
//         <Sidebar onSelectSection={setActiveScreen} />
//         <View style={styles.mainContent}>{renderContent()}</View>
//       </View>
//     </View>
//   );
// };

// const DashboardGrid = ({ onSelect }) => {
//   const items = [
//     'Student Management', 'Faculty Management','Academic Calendar', 'Timetable Management',
//     'Attendance Monitoring', 'Fee & Payments', 'Exam & Results',
//     'Announcements', 'Feedback & Complaints', 
//   ];

//   const colors = [
//     '#ff9999', '#99ccff', '#99ff99', '#ffcc99', '#cc99ff',
//     '#ffff99', '#ffb3e6', '#c2f0c2', '#b3d1ff'
//   ];

//   return (
//     <View style={styles.grid}>
//       {items.map((item, index) => (
//         <View
//           key={item}
//           style={[styles.box, { backgroundColor: colors[index % colors.length] }]}
//           onTouchEnd={() => onSelect(item)}
//         >
//           <Text style={styles.boxText}>{item}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   content: { flex: 1, flexDirection: 'row' },
//   mainContent: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
//   grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 },
//   box: {
//     width: 350, height: 180, margin: 10, borderRadius: 10,
//     justifyContent: 'center', alignItems: 'center',
//     backgroundColor: '#e6e6fa', elevation: 4,
//   },
//   boxText: { fontSize: 16, fontWeight: 'bold', color: '#000' },
//   });


// export default Home;


import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Sidebar from '../components/Slide';
import Navbar from '../components/Navbar';
import StudentManagement from './StudentManagement';
import FacultyManagement from './FacultyManagement';
import TimetableScreen from './TimetableScreen';


const { width: SCREEN_WIDTH,height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = () => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');

  const renderContent = () => {
    switch (activeScreen) {
      case 'Student Management':
        return <StudentManagement />;
      case 'Faculty Management':
        return <FacultyManagement />;
        case 'Timetable Management':
          return <TimetableScreen/>;
      default:
        return <DashboardGrid onSelect={setActiveScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Sidebar onSelectSection={setActiveScreen} />
        <View style={styles.mainContent}>{renderContent()}</View>
      </View>
    </View>
  );
};

const DashboardGrid = ({ onSelect }) => {
  const items = [
    'Student Management', 'Faculty Management', 'Academic Calendar', 'Timetable Management',
    'Attendance Monitoring', 'Fee & Payments', 'Exam & Results',
    'Announcements', 'Feedback & Complaints',
  ];

  const colors = [
    '#ff9999', '#99ccff', '#99ff99', '#ffcc99', '#cc99ff',
    '#ffff99', '#ffb3e6', '#c2f0c2', '#b3d1ff'
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
    height: SCREEN_HEIGHT > 900 ? 180 : SCREEN_HEIGHT > 700 ? 150 : 120, // responsive height
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










// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Slide';
// import StudentManagement from '../components/StudentManagement';
// // import FacultyManagement from './FacultyManagement';
// // ...import other screens
// import HomeTiles from '../components/HomeTiles'; // New component for colored blocks

// const Home = () => {
//   const [selectedScreen, setSelectedScreen] = useState('Home');

//   const renderScreen = () => {
//     switch (selectedScreen) {
//       case 'Student Management':
//         return <StudentManagement />;
//       // case 'Faculty Management':
//       //   return <FacultyManagement />;
//       // Add other cases as needed
//       default:
//         return <HomeTiles />; // This shows the colored blocks
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sidebar}>
//         <Sidebar onSelect={setSelectedScreen} />
//       </View>
//       <View style={styles.main}>
//         <Navbar />
//         <View style={styles.content}>
//           {renderScreen()}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flexDirection: 'row', flex: 1 },
//   sidebar: { width: 200, backgroundColor: '#123' },
//   main: { flex: 1 },
//   content: { flex: 1, padding: 10 },
// });

// export default Home;
