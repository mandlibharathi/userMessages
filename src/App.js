import './App.css';
import AllMessages from './components/AllMessages';
import PostMessage from './components/PostMessage';
import {BrowserRouter as Router, Routes,Route ,Link } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
<>
      <Router>
        <Header />
         <div className="App">
        <Routes>
        <Route path='/' element={<PostMessage />} />
        <Route path='/allmessages' element={<AllMessages />} />
        </Routes>
        </div>
      </Router>
      <ToastContainer />

    </>
  );
}


export default App;
