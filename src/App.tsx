import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import FinalExpenseInsurance from './Page/FinalExpenseInsurance';
function App() {
  return (
    <Router>
      <div >
      

        <Routes>
          <Route path="/expense" element={<FinalExpenseInsurance />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;