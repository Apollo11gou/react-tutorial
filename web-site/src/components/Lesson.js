import React from 'react';

class Lesson extends React.Component{
  // constructor(props){
  //   super(props){
  //     this.state = {isModalOpen: false};
  //   }
  // }

  render(){
    return(
      <div className= 'lesson-card'>
        <div className ='lesson-item'>
          <p>{this.props.name}</p>
          <img  src={this.props.image}/>
        </div>
      </div>
    );
  }
}

export default Lesson;