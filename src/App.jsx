import './App.css'
import { RouterProvider } from 'react-router-dom';
import routers from './routes/Router';

function App() {


  return (
    <div className='bg-[#12141D]'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
