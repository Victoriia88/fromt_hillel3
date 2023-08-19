class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = true;
    }
  }

  absent() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = false;
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  getAttendancePercentage() {
    const presentCount = this.attendance.filter((item) => item === true).length;
    return presentCount / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendancePercentage = this.getAttendancePercentage();

    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Приклад використання
const student1 = new Student("John", "Sigma", 2005);
const student2 = new Student("Ann", "Vovk", 1994);

student1.grades = [95, 55, 92, 88];
student2.grades = [90, 92, 98, 74];

student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.present();

console.log("Student 1 age:", student1.getAge());
console.log("Student 2 age:", student2.getAge());

console.log("Student 1 average grade:", student1.getAverageGrade());
console.log("Student 2 average grade:", student2.getAverageGrade());

console.log("Student 1 attendance:", student1.getAttendancePercentage());
console.log("Student 2 attendance:", student2.getAttendancePercentage());

console.log("Student 1 summary:", student1.summary());
console.log("Student 2 summary:", student2.summary());
