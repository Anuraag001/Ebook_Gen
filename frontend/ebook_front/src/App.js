import logo from './logo.svg';
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Test from './components/T';
import PdfViewer from './components/A';
import CreateForm from './components/CreateForm';
import Intro from './components/Intro';
import Generate from './components/Generate';
import Show from './components/Show';
function App() {
  return (
    <div className='h-screen flex flex-row justify-center items-center bg-black'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          {false && <Test/> }
          <div className='flex flex-row justify-around mx-1 max-w-2/3 gap-x-3 bg-cyan-700 p-8 rounded-md shadow-md'>
          <Intro/>
          <CreateForm/>
          </div>
          {false && <PdfViewer/>}
          </>
        }>
        </Route> 

      <Route path='/generate' element={<Generate/>}>
      </Route>
      <Route path='/show' element={<Show/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
