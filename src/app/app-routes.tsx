import { redirect } from 'react-router-dom';
import Home from './home/home';
import MyInfo from './my-info/my-info';
export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home' },
  { path: 'my-info', element: <MyInfo />, text: 'My Info' }
];
