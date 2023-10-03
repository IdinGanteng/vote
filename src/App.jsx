import Button from './component/Button';
import './App.css'
import Card from './component/Card';
import Satu from './component/dua.jsx';
import Form from './component/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
