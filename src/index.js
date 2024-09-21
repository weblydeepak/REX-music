import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Library from './Pages/Library/Library';
import Favorite from './Pages/Favorite/Favorite';
import Player from './Pages/Player/Player';
import Trending from './Pages/Trending/Trending';
import Feed from './Pages/Feed/Feed';


const Route = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { path: '/', element:  <Library/> },
    { path: '/feed', element:  <Feed/> },
    { path: '/trending', element:  <Trending/> },
    { path: '/player/:id', element:  <Player/> },
    { path: '/favorites', element:  <Favorite/>},
    {
      path: "*",
      element: (
        <div>
          <h1>Page Not found</h1>
        </div>
      ),
    },
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={Route} ></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
