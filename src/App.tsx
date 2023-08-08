import './App.css'
import { Home } from './pages/home/HomeComponent'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
function App() {

  return (
    <PrimeReactProvider>
    <div className=' m-4 text-gray-800 dark:text-white'>
      <Home />
    </div>
    </PrimeReactProvider>
  )
}

export default App
