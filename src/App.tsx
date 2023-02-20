import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {Navigation} from './components/Navigation'
import { PlacesPage as PlacesPage } from './pages/PlacesPage'

function App() {
  return (
    <body className='h-screen bg-[#01130c]'>
      <Navigation />
      <Routes>
        <Route path="/" element={ <PlacesPage /> } />
        <Route path="/test" element={ <ProductsPage/> } />
      </Routes>
    </body>
  )
}

export default App;
