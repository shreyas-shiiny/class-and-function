import React, {Component} from 'react'
import "../content/styles/Info.css";

class Functiontwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        };
      }
    
      handleClick() {
        this.setState(prevState => ({
          showText: !prevState.showText
        }));
      }
    
      render() {
        return (
          <div  className='butn'>
            <button onClick={() => this.handleClick()}>click here for class component</button>
            {this.state.showText && <h1>This is class component</h1>}
          </div>
        );
      }
    }

export default Functiontwo