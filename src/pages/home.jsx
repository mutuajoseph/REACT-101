import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to React 101</h1>

      <button onClick={() => navigate('/users')}>Go to Users</button>
      <button onClick={() => navigate('/posts')}>Go to Posts</button>
    </div>
  );
}