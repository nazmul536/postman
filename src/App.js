import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddProfile from "./Pages/Home/AddProfile/AddProfile";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ProfileView from './Pages/Home/ProfileView/ProfileView';
import UpdateUsers from './Pages/Home/UpdateUsers/UpdateUsers';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PostManCollections from './Pages/Home/PostManCollections/PostManCollections';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
    
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path='/'>
         <Home></Home>
         </Route>
         <Route  path='/home'>
         <Home></Home>
         </Route>
         <Route  path='/login'>
        <Login></Login>
         </Route>
         <Route  path='/register'>
         <Register></Register>
         </Route>
         <Route  path='/profileView'>
         <ProfileView></ProfileView>
         </Route>
         <PrivateRoute  path='/userList'>
        <PostManCollections></PostManCollections>
         </PrivateRoute>
         <Route  path='/register'>
         <Register></Register>
         </Route>
         <PrivateRoute path='/AddProfile'>
        <AddProfile></AddProfile>
         </PrivateRoute>
         <Route path='/profiles/UpdateUsers/:id'>
        <UpdateUsers></UpdateUsers>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
