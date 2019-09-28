// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import { FacilityList, FacilityEdit } from './views/facilities';
import { UserList, UserEdit, UserCreate } from './views/users';

// const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/linkvan/linkvan-admin');
const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="facilities" list={FacilityList} edit={FacilityEdit} icon={PostIcon} />
  </Admin>
);

export default App;