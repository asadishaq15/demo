import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FinalExpenseInsurance from './Page/FinalExpenseInsurance';
function App() {
  return (
    <Router>
      <div >
      

        <Routes>
          <Route path="/" element={<FinalExpenseInsurance />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;