import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/Screens/HomeScreen'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
