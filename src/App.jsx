import React, { Children, Component } from 'react'
import Home from './Components/Admin/Home/Home'
import QuizComponent from './Components/Admin/QuizComponent/QuizComponent'
import Updateuser, { Update_user } from './Components/Admin/Updateuser/Update_user'
import Login from './auth/Login/Login'
import Register from './auth/Register/Register'
import UserExam from './Components/User/UserExam/UserExam'
import Myprofile from './Components/Admin/Myprofile/Myprofile'

import { Outlet } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Auhome from './Components/User/Auhome/Auhome';
import UpdateProfile from './Components/User/UpdateProfile/UpdateProfile';
import Logout from './auth/Logout/Logout';
import Exams from './Components/Admin/Exams/Exams';
import ULayout from './Components/Layout/ULayout';
import MainLayout from './Components/Layout/MainLayout';
import UserHome from './Components/User/UserHome/UserHome'
import Userquiz from './Components/User/Userquiz/Userquiz'
import History from './Components/User/History/History'
import Update from './Components/Admin/Myprofile/update'
import { ShowUser } from './Components/Admin/show-user/show-user'

export default class App extends Component {
  routes = createBrowserRouter ([
    {
      path:'',
      element: <ULayout/>,
      children :[ 
        {index:true , element:<Auhome/>},
        {path:'/uhome' , element:<Auhome/>},
        {path:'/updateprofile' , element:<UpdateProfile/>},
        {path:'/logout' , element:<Logout/>},
      ]
    },
    {
      path:'',
      element: <MainLayout/>,
      children :[ 
        {index:true , element:<Home/>},
        {path: '/', element: <Auhome/>  },
        {path: '/home', element: <Home/>  },
        {path: '/quiz', element: <QuizComponent/>  },
        {path: '/exam', element: <Exams/>  },
        {path: '/logout', element: <Logout/>  },
        {path: '/mupdate', element: <Update/>  },
        {path: '/update', element: <Update_user/>  },

      ]
    },
    {path: '/login', element: <Login/>  },
    {path: '/user', element: <UserHome/>  }, 
    {path: '/register', element: <Register/>  },   
    {path: '/userexam', element: <UserExam/>  },    
    {path: '/userquiz', element: <Userquiz/>},
    {path:'/show-user' , element:<ShowUser/>},


  ])

  render() {
    return (
      <>
      <RouterProvider router={this.routes} />
      <Outlet />
      </>
    )
  }
}
