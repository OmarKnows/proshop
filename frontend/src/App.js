import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/Screens/HomeScreen'
import ProductScreen from './components/Screens/ProductScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
