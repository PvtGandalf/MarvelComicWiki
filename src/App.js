import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import Characters from './pages/characters';
import Comics from './pages/comics';
import Creators from './pages/creators';
import Events from './pages/events';
import Series from './pages/series';
import Error from './pages/error';

const App = () => useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/characters", element: <Characters /> },
    { path: "/comics", element: <Comics /> },
    { path: "/creators", element: <Creators /> },
    { path: "/events", element: <Events /> },
    { path: "/series", element: <Series /> },
    { path: "*", element: <Error /> }
  ]);

export default App;
