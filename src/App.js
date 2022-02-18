import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer';

import Home from './components/pages/Home'
import Books from './components/pages/Books'
import EditBook from './components/pages/EditBook';
import NewBook from './components/pages/NewBook'
import Contact from './components/pages/Contact'

function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Container customClass='container_main'>
          <Routes>                                                               {/*Antigo SWITCH mudou para ROUTES */}
            <Route exact path="/" element={<Home />}> </Route>                   {/*exact serve para definir que o home só vai ser acessado quando o usuário entrar exatamente com o endereço "/" */}
            <Route path="/books" element={<Books />}> </Route>
            <Route path="/editbook/:id" element={<EditBook />}> </Route>
            <Route path="/newbook" element={<NewBook />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
