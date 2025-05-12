
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';


const AnnouncementForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState(null);

  const handleUploadPoster = () => {
   
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>Announcements</Text>

        <Text style={styles.label}>Poster Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
           placeholderTextColor="gray"
          multiline
        />

        <Text style={styles.label}>Upload Poster</Text>
        <TouchableOpacity style={styles.posterBox} onPress={handleUploadPoster}>
          {poster ? (
            <Image
              source={{ uri: poster.uri }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.posterText}>Upload Poster</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const containerWidth = width > 600 ? 400 : '90%';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  container: {
    width: containerWidth,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color:'black',
  },
  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 2,
    paddingHorizontal: 6,
    marginBottom: 12,
    backgroundColor: 'transparent',
    color: 'black',
    paddingTop:10,
  },
  textArea: {
    height: 80,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 2,
    paddingHorizontal: 6,
    textAlignVertical: 'top',
    backgroundColor: '#f3f3f3',
    marginBottom: 12,
    color: 'black',
    paddingTop:10,
  },
  posterBox: {
    height: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  posterText: {
    color: '#888',
    fontSize: 14,
  },
  postButton: {
    backgroundColor: '#1f7987',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default AnnouncementForm;
