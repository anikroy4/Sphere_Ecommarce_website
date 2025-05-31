
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pricing from './pages/pricing/Pricing'
import Event from './pages/event/Event'
import Company from './pages/company/Company'
import RootLayout from './components/rootlayouts/RootLayout'
import Home from './pages/home/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Pricing />}/>
        <Route path="/" element={<Event />}/>
        <Route path="/" element={<Company/>}/>
      </Route>
    </Routes>
  )
}

export default App
