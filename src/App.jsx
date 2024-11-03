import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FacultyLogin from './components/FacultyLogin';
import StudentLogin from './components/StudentLogin'; // Make sure to import this if you have a student login component
import StudentDash from './components/dashboard/StudentDash';
import FacultyDash from './components/dashboard/FacultyDash';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FacultyLogin />} />
        <Route path="/studentDashboard" element={<StudentDash />} />
        <Route path="/facultyDashboard" element={<FacultyDash />} />
      </Routes>
    </Router>
  );
};

export default App;
