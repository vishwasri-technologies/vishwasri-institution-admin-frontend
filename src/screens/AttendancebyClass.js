import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Flyout} from 'react-native-windows';

const studentsData = [
  {name: 'Allary Hitesh', roll: '214420862852', attendance: '85%', 
    attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},

  {name: 'Allu Lokesh', roll: '214420862658', attendance: '90%',attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},
  {name: 'Chadla Rajesh', roll: '214420862150', attendance: '72%',attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},
  {name: 'Dhis Suresh', roll: '214420862066', attendance: '77%',attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},
  {name: 'Eddy Tanesh', roll: '214420862058', attendance: '88%',attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},
  {name: 'Joss Umesh', roll: '214420862068', attendance: '95%',attendanceRecords: [
    { time: '9:10 - 10:10', status: 'Present' },
    { time: '10:10 - 11:10', status: 'Absent' },
    { time: '11:10 - 12:10', status: 'Present' },
    { time: '12:10 - 01:10', status: 'Present' },
    { time: '01:40 - 02:40', status: 'Absent' },
    { time: '02:40 - 03:40', status: 'Absent' },
  ]},
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentYear = new Date().getFullYear();
const years = Array.from({length: 10}, (_, i) => currentYear - 5 + i);

const AttendancebyClass = () => {
  // Existing dropdown states
  const [courseOpen, setCourseOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([
    {label: 'M.Tech', value: 'M.Tech'},
    {label: 'MBBS', value: 'MBBS'},
    {label: 'B.Tech', value: 'B.Tech'},
  ]);

  const [deptOpen, setDeptOpen] = useState(false);
  const [department, setDepartment] = useState(null);
  const [deptItems, setDeptItems] = useState([
    {label: 'CSE', value: 'CSE'},
    {label: 'ECE', value: 'ECE'},
    {label: 'IT', value: 'IT'},
    {label: 'EEE', value: 'EEE'},
  ]);

  const [yearOpen, setYearOpen] = useState(false);
  const [year, setYear] = useState(null);
  const [yearItems, setYearItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);

  const [sectionOpen, setSectionOpen] = useState(false);
  const [section, setSection] = useState(null);
  const [sectionItems, setSectionItems] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
  ]);

  // Date picker states
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYearView, setCurrentYearView] = useState(
    new Date().getFullYear(),
  );
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  // Edit functionality states
  const [students, setStudents] = useState(studentsData);
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isEditingMode, setIsEditingMode] = useState(false);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = day => {
    const newDate = new Date(currentYearView, currentMonth, day);
    newDate.setHours(12, 0, 0, 0);
    setSelectedDate(newDate);
    setShowDatePicker(false);
  };

  const changeMonth = increment => {
    let newMonth = currentMonth + increment;
    let newYear = currentYearView;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setCurrentMonth(newMonth);
    setCurrentYearView(newYear);
  };

  const selectMonth = monthIndex => {
    setCurrentMonth(monthIndex);
    setShowMonthPicker(false);
    // Update the selected date to the first day of the new month
    const newDate = new Date(
      currentYearView,
      monthIndex,
      selectedDate.getDate(),
    );
    setSelectedDate(newDate);
  };

  const selectYear = year => {
    setCurrentYearView(year);
    setShowYearPicker(false);
    // Update the selected date to the same day in the new year
    const newDate = new Date(year, currentMonth, selectedDate.getDate());
    setSelectedDate(newDate);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYearView);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYearView);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.calendarEmptyCell} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYearView;

      days.push(
        <TouchableOpacity
          key={`day-${day}`}
          style={[
            styles.calendarDayCell,
            isSelected && styles.selectedDateCell,
          ]}
          onPress={() => handleDateSelect(day)}>
          <Text style={styles.calendarDayText}>{day}</Text>
        </TouchableOpacity>,
      );
    }

    return days;
  };
  const handleSave = () => {
    if (editing) {
      const updatedStudents = [...students];
      updatedStudents[editing.index][editing.field] = editValue;
      setStudents(updatedStudents);
    }
    setEditing(null);
    setEditValue('');
    setIsEditingMode(false);
  };

  const handleCancelEdit = () => {
    setEditing(null);
    setEditValue('');
    setIsEditingMode(false);
  };

  const toggleEditMode = () => {
    if (isEditingMode) {
      handleCancelEdit();
    } else {
      setIsEditingMode(true);
    }
  };

  const formatDisplayDate = () => {
    return `${
      months[currentMonth]
    } ${selectedDate.getDate()}, ${currentYearView}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>View attendance by class/section</Text>
        {isEditingMode && (
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        )}
        {!isEditingMode && (
          <TouchableOpacity onPress={toggleEditMode} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.filters}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIconImage}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Search by roll number"
            placeholderTextColor="gray"
            style={styles.searchInput}
            keyboardType="numeric"
          />
        </View>

        <DropDownPicker
          open={courseOpen}
          value={course}
          items={courseItems}
          setOpen={setCourseOpen}
          setValue={setCourse}
          setItems={setCourseItems}
          placeholder="Course"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={5000}
        />

        <DropDownPicker
          open={deptOpen}
          value={department}
          items={deptItems}
          setOpen={setDeptOpen}
          setValue={setDepartment}
          setItems={setDeptItems}
          placeholder="Department"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={4000}
        />

        <DropDownPicker
          open={yearOpen}
          value={year}
          items={yearItems}
          setOpen={setYearOpen}
          setValue={setYear}
          setItems={setYearItems}
          placeholder="Year"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={3000}
        />

        <DropDownPicker
          open={sectionOpen}
          value={section}
          items={sectionItems}
          setOpen={setSectionOpen}
          setValue={setSection}
          setItems={setSectionItems}
          placeholder="Section"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={2000}
        />

        {/* Single Date Picker */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Select Date:</Text>

          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateText}>{formatDisplayDate()}</Text>
            <Image
              source={require('../assets/down-arrow.png')}
              style={styles.dropdownArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Picker Flyout */}
      <Flyout
        isOpen={showDatePicker}
        onDismiss={() => setShowDatePicker(false)}
        placement="full"
        horizontalAlignment="full">
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity onPress={() => changeMonth(-1)}>
              <Text style={styles.calendarNavButton}>{'<'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowMonthPicker(true)}>
              <Text style={styles.calendarTitle}>{months[currentMonth]}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowYearPicker(true)}>
              <Text style={styles.calendarTitle}>{currentYearView}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeMonth(1)}>
              <Text style={styles.calendarNavButton}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.calendarWeekDays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <Text key={day} style={styles.calendarWeekDayText}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.calendarDays}>{renderCalendar()}</View>
        </View>
      </Flyout>

      {/* Month Picker Flyout */}
      <Flyout
        isOpen={showMonthPicker}
        onDismiss={() => setShowMonthPicker(false)}
        placement="full"
        horizontalAlignment="full">
        <View style={styles.pickerModal}>
          <Text style={styles.pickerTitle}>Select Month</Text>
          <ScrollView contentContainerStyle={styles.pickerOptions}>
            {months.map((month, index) => (
              <TouchableOpacity
                key={month}
                style={[
                  styles.pickerOption,
                  currentMonth === index && styles.selectedPickerOption,
                ]}
                onPress={() => selectMonth(index)}>
                <Text style={styles.pickerOptionText}>{month}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Flyout>

      {/* Year Picker Flyout */}
      <Flyout
        isOpen={showYearPicker}
        onDismiss={() => setShowYearPicker(false)}
        placement="full"
        horizontalAlignment="full">
        <View style={styles.pickerModal}>
          <Text style={styles.pickerTitle}>Select Year</Text>
          <ScrollView contentContainerStyle={styles.pickerOptions}>
            {years.map(year => (
              <TouchableOpacity
                key={year}
                style={[
                  styles.pickerOption,
                  currentYearView === year && styles.selectedPickerOption,
                ]}
                onPress={() => selectYear(year)}>
                <Text style={styles.pickerOptionText}>{year}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Flyout>

      <ScrollView vertical>
        <View>
          <View style={styles.rowHeader}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Roll Number</Text>
            <Text style={styles.cell}>Attendance</Text>
            {isEditingMode && <Text style={styles.cell}>Actions</Text>}
          </View>
          {students.map((student, idx) => (
            <View style={styles.row} key={idx}>
              <Text style={styles.cell}>{student.name}</Text>
              <Text style={styles.cell}>{student.roll}</Text>
              {editing?.index === idx && editing?.field === 'attendance' ? (
                <TextInput
                  style={[
                    styles.editInput,
                    {color: parseInt(editValue) < 75 ? 'red' : 'green'},
                  ]}
                  value={editValue}
                  onChangeText={setEditValue}
                  keyboardType="numeric"
                  autoFocus
                />
              ) : (
                <Text
                  style={[
                    styles.cell,
                    {
                      color:
                        parseInt(student.attendance) < 75 ? 'red' : 'green',
                    },
                  ]}>
                  {student.attendance}
                </Text>
              )}
              {isEditingMode && (
                <TouchableOpacity style={styles.editButtonSmall}>
                  <Text style={styles.editButtonTextSmall}>
                    {editing?.index === idx && editing?.field === 'attendance'
                      ? 'Save'
                      : 'Edit'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButtonSmall: {
    backgroundColor: '#2196F3',
    padding: 5,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  editButtonTextSmall: {
    color: 'white',
    fontSize: 12,
  },
  editInput: {
    width: 350,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    zIndex: 9999,
    alignItems: 'center',
  },
  dropdownContainer: {
    width: 150,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 30,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    marginLeft: 0,
  },
  searchIconImage: {
    height: 20,
    width: 25,
  },
  rowHeader: {
    flexDirection: 'row',
    backgroundColor: '#d8bfd8',
    padding: 10,
    width: wp('90%'),
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  cell: {
    width: 350,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    height: 50,
    width: 300,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    backgroundColor: '#f5f5f5',
    color: 'black',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  dateLabel: {
    marginRight: 5,
    color: '#000',
    fontSize: 14,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    minWidth: 120,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownArrow: {
    width: 16,
    height: 16,
    marginLeft: 8,
    tintColor: '#666',
  },
  dateText: {
    color: '#000',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 350,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
   
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf:'center',
  },
  calendarNavButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: 'black',
    alignSelf:'center',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
    alignSelf:'center',
  },
  calendarWeekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    color: 'black',
    alignSelf:'center',
  },
  calendarWeekDayText: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    alignSelf:'center',
  },
  calendarDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    color: 'black',
    alignSelf:'center',
  },
  calendarDayCell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
    color: 'black',
  },
  calendarEmptyCell: {
    width: 40,
    height: 40,
    margin: 2,
  },
  calendarDayText: {
    color: '#333',
  },
  selectedDateCell: {
    backgroundColor: '#d8bfd8',
  },
  pickerModal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 200,
    maxHeight: 300,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  pickerOptions: {
    flexGrow: 1,
    color: 'black',
  },
  pickerOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: 'black',
  },
  selectedPickerOption: {
    backgroundColor: '#d8bfd8',
    color: 'black',
  },
  pickerOptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});


export default AttendancebyClass;



