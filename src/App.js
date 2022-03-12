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
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
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
