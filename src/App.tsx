import './App.css'
import { Home } from './pages/home/HomeComponent'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
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
