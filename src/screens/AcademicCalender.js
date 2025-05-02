

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

const AcademicCalender = () => {
  const [fileName, setFileName] = useState(null);

  const handleUpload = () => {
    alert('Upload functionality is not implemented.');
  };

  const handlePost = () => {
    if (fileName) {
      alert(`Posting file: ${fileName}`);
    } else {
      alert('Please upload a file first.');
    }
  };

  const { width: screenWidth } = Dimensions.get('window');

  const layout = {
    padding: Platform.OS === 'windows' ? screenWidth * 0.05 : 10,
    titleFontSize: Platform.OS === 'windows' ? screenWidth * 0.025 : 12,
    subtitleFontSize: Platform.OS === 'windows' ? screenWidth * 0.018 : 12,
    uploadBoxWidth: Platform.OS === 'windows' ? screenWidth * 0.4 : 200,
    uploadBoxHeight: Platform.OS === 'windows' ? screenWidth * 0.25 : 150,
    uploadFontSize: Platform.OS === 'windows' ? screenWidth * 0.028 : 18,
    postButtonWidth: Platform.OS === 'windows' ? screenWidth * 0.6 : 250,
    postFontSize: Platform.OS === 'windows' ? screenWidth * 0.028 : 18,
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { padding:80,paddingTop:0, }]}>
      <Text style={[styles.title, { fontSize:24 }]}>
        Academic Calendar
      </Text>
      <Text style={[styles.subtitle, { fontSize:18 }]}>
        Upload Academic Calendar
      </Text>

      <TouchableOpacity
        style={[
          styles.uploadBox,
          {
            width:390,
            height:450,
          },
        ]}
        onPress={handleUpload}
      >
        <Text style={[styles.uploadText, { fontSize:18 }]}>
          {fileName || 'Upload'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.postButton,
          {
 width:390,
          },
        ]}
        onPress={handlePost}
      >
        <Text style={[styles.postButtonText, { fontSize:18 }]}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: 'black',
  },
  subtitle: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: 'black',
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf:'flex-start',
  },
  uploadText: {
    color: 'gray',
  },
  postButton: {
    backgroundColor: '#177C8A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    alignSelf:'flex-start',
  },
  postButtonText: {
    color: '#000',
    fontWeight: '300',
  },
});

export default AcademicCalender;











// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
//   ScrollView,
// } from 'react-native';

// const AcademicCalendar = () => {
//   const [fileName, setFileName] = useState(null);
//   const { width, height } = Dimensions.get('window');
//   const isLandscape = width > height;

//   // Responsive sizing calculations
//   const responsiveValue = (mobileSize, desktopSize) => {
//     return Platform.OS === 'web' || Platform.OS === 'windows'
//       ? desktopSize 
//       : mobileSize;
//   };

//   const layout = {
//     containerPadding: responsiveValue(10, 80),
//     titleFontSize: responsiveValue(24, isLandscape ? 28 : 24),
//     subtitleFontSize: responsiveValue(18, isLandscape ? 22 : 18),
//     uploadBoxWidth: responsiveValue(width * 0.9, isLandscape ? width * 0.4 : width * 0.8),
//     uploadBoxHeight: responsiveValue(height * 0.4, isLandscape ? height * 0.6 : height * 0.4),
//     uploadFontSize: responsiveValue(18, 20),
//     postButtonWidth: responsiveValue(width * 0.9, isLandscape ? width * 0.4 : width * 0.8),
//     postButtonFontSize: responsiveValue(18, 20),
//     paddingHorizontal: responsiveValue(20, 40),
//   };

//   const handleUpload = () => {
//     alert('Upload functionality is not implemented.');
//   };

//   const handlePost = () => {
//     if (fileName) {
//       alert(`Posting file: ${fileName}`);
//     } else {
//       alert('Please upload a file first.');
//     }
//   };

//   return (
//     <ScrollView 
//       contentContainerStyle={[
//         styles.container, 
//         { 
//           padding: layout.containerPadding,
//           paddingTop: 0,
//           paddingHorizontal: layout.paddingHorizontal,
//         }
//       ]}
//     >
//       <Text style={[styles.title, { fontSize: layout.titleFontSize }]}>
//         Academic Calendar
//       </Text>
//       <Text style={[styles.subtitle, { fontSize: layout.subtitleFontSize }]}>
//         Upload Academic Calendar
//       </Text>

//       <TouchableOpacity
//         style={[
//           styles.uploadBox,
//           {
//             width: layout.uploadBoxWidth,
//             height: layout.uploadBoxHeight,
//             maxWidth: 600, // Maximum width for very large screens
//             maxHeight: 500, // Maximum height for very large screens
//           },
//         ]}
//         onPress={handleUpload}
//       >
//         <Text style={[styles.uploadText, { fontSize: layout.uploadFontSize }]}>
//           {fileName || 'Upload'}
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.postButton,
//           {
//             width: layout.postButtonWidth,
//             maxWidth: 600, // Maximum width for very large screens
//           },
//         ]}
//         onPress={handlePost}
//       >
//         <Text style={[styles.postButtonText, { fontSize: layout.postButtonFontSize }]}>
//           Post
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//     color: 'black',
//   },
//   subtitle: {
//     marginBottom: 20,
//     alignSelf: 'flex-start',
//     color: 'black',
//   },
//   uploadBox: {
//     borderWidth: 1,
//     borderStyle: 'dashed',
//     borderColor: '#ccc',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//     alignSelf: 'flex-start',
//     borderRadius: 8,
   
//   },
//   uploadText: {
//     color: 'gray',
//   },
//   postButton: {
//     backgroundColor: '#177C8A',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 30,
//     alignSelf: 'flex-start',
//   },
//   postButtonText: {
//     color: 'black',
//     // fontWeight: 'bold',
//   },
// });

// export default AcademicCalendar;
