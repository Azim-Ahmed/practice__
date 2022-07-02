console.log('script loaded');
//  QUESTIONS PREVIEW
// how can we calculate 1. individual grade 175/2  2. overall class grade 345/4

//  ANSWERS PREVIEW
const studentsInputs = `[{"name":"John","age":21,"courses":[{"name":"JavaScript","grade":90},{"name":"Database","grade":85}]},{"name":"Alice","age":20,"courses":[{"name":"JavaScript","grade":92},{"name":"Database","grade":80}]}]`;

const parsedStudents = JSON.parse(studentsInputs);

const AllStudentsGrades = parsedStudents.map((student) => student.courses.reduce((sum, course) => sum = sum + course.grade, 0));
const totalGradesOfStudents = AllStudentsGrades.reduce((sum, current) => sum += current, 0);
//individualStudentAverage
const individualStudentAverage = parsedStudents.map((student) => student.courses.reduce((sum, course) => sum = sum + course.grade, 0) / student.courses.length);
//overAllClassGrade
const overAllClassGrade = totalGradesOfStudents / parsedStudents.map(item => item.courses).flat().length;
console.log({ totalGradesOfStudents, individualStudentAverage, overAllClassGrade });