import React from 'react';

class Timer extends  React.Component {
    state = {
        count : 0
    }
    render() {
        const {count} = this.state
    return (
        <div>
           
        <h1 count="0"> {count} s</h1>
         </div>
           )
             }
 componentDidMount(){
    this.myInterval = setInterval(()=>{
         this.setState(prevState =>({
count : this.state.count + 1})
    )}, 1000 )
}
 componentWillUnmount(){
    clearInterval(this.myInterval)
}
}
  export default Timer;

