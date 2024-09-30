import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SampleForm from './components/SampleForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SampleForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
