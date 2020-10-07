import React  from 'react';
import './App.css';
import Timer from "./Timer.js";
import Box from './change.js';



class App extends React.Component {
  constructor (props){
    super (props)
  this.state = { show : true
  }
   this.toggle = this.toggle.bind(this)
  };
  toggle = () => {
    const {show}  = this.state;
    this.setState ({ show : !show })
  }
  render() {
        return (
         
        <div className="App">
           {this.state.show && <Box />}
         <button type="button" onClick={this.toggle} style={{height:40,width:100, fontSize:20}}> Change </button>
        
         <Timer count="0"/>
         </div>
             );
           }  
     
          };
     
   
    
export default App;