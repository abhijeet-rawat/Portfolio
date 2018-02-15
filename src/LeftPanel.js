import React from 'react';
import './index.css';
import abhijeet from './images/abhijeet.jpg';

class LeftPanel extends React.Component{
    constructor(props){
      super(props);
      this.state={
       arr:["AboutMe","Activities","Proficiency","MyBlog","Contact"],

      };
    }

    callMe1(e){
       document.getElementById(e).style.color="white";
    }

    callMe2=(e)=>{
        document.getElementById(e).style.color="#818181";
    }

    render(){
        return(
            <div className="sidenav">
                <img src={abhijeet} alt="Abhijeet Rawat" style={{width:160, height:160, paddingBottom:20}} />

                {
                    this.state.arr.map((e,i) =>
                        <div>
                         <a key={i} href={"#"+e} id={e} onMouseEnter={()=>this.callMe1(e)} onMouseLeave={()=>this.callMe2(e)}>{e}</a>
                         <br/>
                         <br/>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default LeftPanel;
