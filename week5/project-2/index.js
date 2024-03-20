const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/student_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas
const academicRecordSchema = new mongoose.Schema({
  student_id: String,
  name: String,
  grades: {
    math: String,
    science: String,
    history: String,
  },
  subjects: [String],
  additional_info: {
    attendance: String,
    teacher_comments: String,
  },
});

const coCurricularActivitySchema = new mongoose.Schema({
  student_id: String,
  name: String,
  activities: [{
    type: String,
    duration: String,
    achievements: [String],
  }],
});

// Define models
const AcademicRecord = mongoose.model('AcademicRecord', academicRecordSchema);
const CoCurricularActivity = mongoose.model('CoCurricularActivity', coCurricularActivitySchema);

// Sample data
const academicRecordsData = [
  {
    student_id: 'S001',
    name: 'John Doe',
    grades: {
      math: 'A',
      science: 'B',
      history: 'A',
    },
    subjects: ['math', 'science', 'history'],
    additional_info: {
      attendance: '90%',
      teacher_comments: 'Hardworking student',
    },
  },
  // Add more academic records as needed
];

const coCurricularActivitiesData = [
  {
    student_id: 'S001',
    name: 'John Doe',
    activities: [
      {
        type: 'Football',
        duration: '2 years',
        achievements: ['Best Player Award'],
      },
      {
        type: 'Music',
        duration: '3 years',
        achievements: ['Choir Leader'],
      },
    ],
  },
  // Add more co-curricular activities data as needed
];

async function populateDatabase() {
  try {
    // Insert sample data
    await AcademicRecord.insertMany(academicRecordsData);
    await CoCurricularActivity.insertMany(coCurricularActivitiesData);

    // Retrieve data and perform CRUD operations
    const academicRecords = await AcademicRecord.find();
    console.log('Academic Records:', academicRecords);

    const coCurricularActivities = await CoCurricularActivity.find();
    console.log('Co-curricular Activities:', coCurricularActivities);

    // Perform additional CRUD operations as needed
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    mongoose.disconnect();
    console.log('Disconnected from the database');
  }
}

// Populate the database
populateDatabase();
