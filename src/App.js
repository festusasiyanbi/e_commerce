import './index.css';
import Content from './Content';
import { Route, Routes } from 'react-router-dom';
import Description from './Description';
import PageNotFound from './PageNotFound';
import { DataProvider } from './context/DataProvider';
import Nav from './Nav';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {

  return (
    <DataProvider>
    <Nav />
        <Routes>
          <Route path='/' element={<Content />}/>
          <Route path='/item/:id' element={<Description />}/>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
    </DataProvider>
  );
}

export default App;
