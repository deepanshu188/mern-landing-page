import { Header } from './components/header/Header';
import AppContainer from './AppContainer';
import { Footer } from './components/footer/Footer';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />,
  },
]);

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <RouterProvider router={router} />
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
