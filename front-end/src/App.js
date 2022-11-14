import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersProvider from './provider/UsersProvider';
import FormPage from './pages/FormPage';
import UsersPage from './pages/UsersPage';
import DetailsPage from './pages/DetailsPage';
import InitialPage from './pages/InitialPage';

function App() {
  return (
  <UsersProvider>
    <Routes>
      <Route exact path="/" element={ <InitialPage /> } />
      <Route exact path="/register" element={ <FormPage /> } />
      <Route exact path="/users" element={ <UsersPage /> } />
      <Route exact path="/users/:id" element={ <DetailsPage /> } />
    </Routes>
  </UsersProvider>
  );
}

export default App;

