import {Routes, Route} from 'react-router-dom'
import { Users } from './pages/user';
import { Posts } from './pages/posts';
import { Home } from './pages/home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
}

export default App;
