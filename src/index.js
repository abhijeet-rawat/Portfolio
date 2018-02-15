import React from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel.js';
import './index.css';
import codechef from './images/codechef.png';
import github from './images/github.png';
import hackerrank from './images/hackerrank.jpg';
import hackerearth from './images/hackerearth.jpg';
import c from './images/C.png';
import cplusplus from './images/Cplusplus.png';
import java from './images/java.png';
import python from './images/Python.png';
import html5 from './images/html5.png';
import css from './images/css.png';
import js from './images/javascript.png';
import reactjs from './images/reactjs.png';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div >
            <LeftPanel/>
            <div className="main-container">
                <div>
                    <h2 id="AboutMe"> <u>About Me </u></h2>
                    <p >I'm Abhijeet Rawat, CSE final Year Undergraduate, studying in Maulana Azad National Institute of Technology, Bhopal(MP). I love to code and solve the real world problems that
                      can be solved by programming the computer. I like to participate in programming challenges on various online judges. You can check my projects on the GitHub.
                      The link to my GitHub account is given in the Activities section.
                    </p>

                    <br/>
                    <br/>

                    <h2 id="Activities"><u>Activities</u></h2>
                      <p >You can visit my Programming activities by following me through links below.</p>

                       <div>
                         <a href={"https://www.codechef.com/users/abhijeet_rawat"} target={"_blank"} className="vsLink">
                            <img src={codechef} alt="Codechef" style={{width:100, height:100}} />
                         </a>

                         <a href={"https://www.github.com/abhijeet-rawat"} target={"_blank"} className="vsLink">
                           <img src={github} alt="Github" style={{width:100, height:100}} />
                         </a>

                           <a href={"https://www.hackerrank.com/abhijeet_rawat?hr_r=1"} target={"_blank"} className="vsLink">
                            <img src={hackerrank} alt="Hackerrank" style={{width:100,height:100}}/>
                           </a>

                         <a href={"https://www.hackerearth.com/@abhijeet109"} target={"_blank"} className="vsLink">
                             <img src={hackerearth} alt="HackeEarth" style={{width:100,height:100}}/>
                         </a>

                       </div>

                      <br/>
                      <br/>

                    <h2 id={"Proficiency"}><u>Proficiency</u></h2>
                    <div>
                        <img src={c} alt="C" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={cplusplus} alt="C++" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={java} alt="JAVA" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={python} alt="Python" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={html5} alt="HTML" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={css} alt="CSS" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={js} alt="JavaScript" style={{width:100,height:100}} className={"proLink"}/>
                        <img src={reactjs} alt="ReactJS" style={{width:100,height:100}} className={"proLink"}/>
                    </div>

                    <br/>
                    <br/>

                    <h2 id={"MyBlog"}><u>MyBlog</u></h2>
                    Checkout the Editorials of CodeChef challenges on my blog <a href={"www.codebrace.net"}>www.codebrace.net</a>

                    <br/>
                    <br/>

                    <h2 id={"Contact"}><u>Contact</u></h2>
                      Mail me at  <a id="contact" href={"abhijeet.rawat5@gmail.com"}>abhijeet.rawat5@gmail.com</a>



                </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
