import { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ana", major: "IT", score: 82 },
    { id: 2, name: "Boon", major: "CS", score: 58 },
    { id: 3, name: "Chai", major: "IT", score: 74 },
    { id: 4, name: "Dara", major: "CS", score: 91 },
    { id: 5, name: "Eve", major: "IT", score: 55 },
  ]);

  const [showPassedOnly, setShowPassedOnly] = useState(false);

  const visibleStudents = showPassedOnly
    ? students.filter((student) => student.score >= 60)
    : students;

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  function handleDeleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <>
      <Header />

      <AddStudentForm onAdd={handleAddStudent} />

      <p>Current number of students: {students.length}</p>
      <button onClick={() => setShowPassedOnly(!showPassedOnly)}>
        {showPassedOnly ? "Show All" : "Show Passed Only"}
      </button>

      <main>
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            major={student.major}
            score={student.score}
            onDelete={handleDeleteStudent}
          />
        ))}
      </main>
    </>
  );
}

export default App;
