import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Course1 from "../ui/course-1.jpg";
import Course2 from "../ui/course-2.jpg";
import Rightbar from './rightbar';


function HomePage() {
    
    const [popularCourse, setPopularcourse] = useState([
        {
            ID: 1,
            title: "tutorial of react",
            tutor: {
                ID: 1,
                name: "Lana dima",
                username: "lanadama",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 mins",
            poster: Course1
        },
        {
            ID:2,
            title: "Creating a beautiful Portrait Illustration",
            tutor: {
               ID: 2,
               name: "Uran Design",
               username: "urancd",
               dp: "http://placeimg.com/100/100/people?tutor-" + 2,

            },
            duration:"1 hr 13 min",
            poster:Course2
        }    
    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Jack Li",
                username: "Jack Li",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);
    // live tutor list
    var tutorlist = [];
    for(let i = 0; i < 8; i++){
        tutorlist.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
               <img src={"https://placeimg.com/100/100/people?" + i} className="bl"  />
            </button>
        );
    }

    var courselist = [];
    for(let i = 0; i < popularCourse.length; i++){
        courselist.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-live-" + i}>
               <div className="block" style={{
                  background: "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
               }}>

                <div className="user abs aic flex">
                    <div className="pic">
                        <img src={popularCourse[i].tutor.dp} className="bl" />
                    </div>

                    <div className="meta rel">
                    <h2 className="s15 fontb c777">{popularCourse[i].tutor.name}</h2>
                    <h2 className="s13 fontn c777">@{popularCourse[i].tutor.username}</h2>
                    </div>
                    
                    <div className="dura abs">
                    <h2 className="s13 name fontb c777">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                    <h2 className="s13 name fontb c777">{popularCourse[i].title}</h2>
                    </div>
                </div>

     
                </div>
            </NavLink>
        );
    }
    
    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    return (
      <div className="home-page">
          <div className="section rel">
              <h2 className="title s24 fontb">Streaming<span className="fontn"> Now </span> </h2>

              <div className="tutors rel flex" >
                {tutorlist}
              </div>
          </div>
        
           <div className="section section-b rel ">
              <h2 className="title s24 fontb">Popular<span className="fontn"> This week </span> </h2>

              <div className="courses rel flex" >
                {courselist}
              </div>
            </div>
           
           
            {/**Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>
      </div>


    )
}

export default HomePage;