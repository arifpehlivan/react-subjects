import React, {Suspense} from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const Delay = React.lazy(() => import('./components/Delay.js'));
  const Home = React.lazy(() => import('./components/Home.js'));
  return (
    <Router>
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delay" element={<Delay />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
