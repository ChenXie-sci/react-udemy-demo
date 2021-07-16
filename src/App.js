import React from 'react';
import "./css/App.css";
import "./css/props.css";
import "./css/uifont.css";


import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import RightBar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursePage from "./screens/mycourse";

import { HashRouter,
         NavLink,
         Route,
                  } from 'react-router-dom';

class App extends React.Component {
    render()  {
      return (
        <div className="App flex">
        <HashRouter>
          <Sidebar />
          <Header />
          <div className="app-content">
            <Route exact path="/" component={HomePage} />
            <Route path="/course/:courseid" component={CoursePage} />
            <Route path="/discover" component={DiscoverPage} />
            <Route path="/cates" component={CategoriesPage} />
            <Route path="/my-courses" component={MyCoursePage} />
          </div>
          <RightBar />
        </HashRouter>  
        </div>
      );
    }
}

export default App;
