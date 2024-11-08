import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FacultyLogin from './components/login/FacultyLogin';
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
