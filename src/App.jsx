import {Routes, Route} from 'react-router-dom'
import { Users } from './pages/user';
import { Posts } from './pages/posts';
import { Home } from './pages/home';
import { UserProvider } from './context/user/userProvider';
import { PostProvider } from './context/post/postProvider';


function App() {

  return (
    <UserProvider>
      <PostProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </PostProvider>
    </UserProvider>
  );
}

export default App;