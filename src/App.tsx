import {Route, Routes} from 'react-router-dom'
import {Navigation} from './components/Navigation'
import { IPlace } from './models';
import { CreateNewPlacePage } from './pages/CreateNewPlacePage';
import { PlacesPage as PlacesPage } from './pages/PlacesPage'

function App() {
  return (
    <body className='h-screen bg-[#01130c]'>
      <Navigation />
      <Routes>
        <Route path="/" element={ <PlacesPage /> } />
      </Routes>
    </body>
  )
}

export default App;
