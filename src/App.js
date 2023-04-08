import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import { useStore } from './Components/hooks/context';

function App() {
  const [{ colors }] = useStore();
  const { bgColor, textColor } = colors;
  return (
    <div className={`${bgColor} ${textColor}`}>
    <Routes>
      <Route path='/' element={<Navigate to={"/home"} replace/>} />
      <Route path='/home' element={<Layout><Home /></Layout>} />
      <Route path='/about' element={<Layout><About /></Layout>} />
      <Route path='/experience' element={<Layout><Experience /></Layout>} />
      <Route path='/projects' element={<Layout><Projects /></Layout>} />
    </Routes>
    </div>
  );
}

export default App;
