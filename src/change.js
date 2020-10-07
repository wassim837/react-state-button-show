import React from 'react';
import image1 from './image1.jpg';


class Box extends React.Component {
    state =  { FullName:"WASSIM MOKHTAR",
    Profession : "I'M A FULL STACK-OVERFLOW DEVELOPER && I'M TEACHER phisical EDUCATION",
   Bio : "I'm a web developer full stack javascript",
   ImgSrc : (image1)}
    render() {
    return (
      <div>
         <img src={this.state.ImgSrc}  alt="image1.jpg" style={{height:250}}/>
       <h2> {this.state.FullName} </h2>
        <p> {this.state.Profession}</p>
       <p> {this.state.Bio} </p>
      </div>
    );
  }
  
};
  export default Box;