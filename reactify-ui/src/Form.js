import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {}
        this.state = {};
        this.cols = []
        this.props.columns.map(value => {
            this.cols.push(value);
            this.initialState[value] = "";
        })
        this.state = this.initialState;
      }
  
      handleChange = event => {
          const { name, value } = event.target;
          console.log(event.target.name, event.target.value)
          this.setState({
              [name] : value
          });
      }
  
      submitForm = () => {
          console.log(this.state)
          this.props.handleSubmit(this.state);
          this.setState(this.initialState);
      }
    
      render() {
          return (
              <form>
                  <div>
                      {
                          Object.keys(this.state).map((key, index) => ( 
                              <p key={index}>
                                  <label>{key}</label>
                                  <input type="text" name={key} value={this.state[key]} onChange = {this.handleChange} />
                              </p>
                          ))
                      }
                      <input 
                          type="button" 
                          value="Submit" 
                          onClick={this.submitForm} />
                  </div>
              </form>
          );
      }
}

export default Form;