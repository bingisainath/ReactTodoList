// // import React from 'react'

// // export default function index() {
// //   return (
// //     <div>index</div>
// //   )
// // }



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// import db from '../db/firestore';

// // Initialize Firebase with your project config
// // const firebaseConfig = {
// //   // Your Firebase project configuration
// // };

// // firebase.initializeApp(firebaseConfig);

// // Function to check if a user is authenticated
// const checkAuth = () => {
//   return new Promise((resolve, reject) => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error('User not authenticated'));
//       }
//     });
//   });
// };

// // Login Component
// const Login = () => {
//   const handleLogin = async () => {
//     try {
//       // Sign in with Firebase Auth (example using Google provider)
//       const provider = new firebase.auth.GoogleAuthProvider();
//       await firebase.auth().signInWithPopup(provider);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login with Google</button>
//     </div>
//   );
// };

// // Home Component
// const Home = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       {/* Your home screen content */}
//     </div>
//   );
// };

// // PrivateRoute Component (to protect routes)
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     checkAuth()
//       .then(() => setIsAuthenticated(true))
//       .catch(() => setIsAuthenticated(false));
//   }, []);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <PrivateRoute exact path="/" component={Home} />
//         {/* Other private routes */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;
