import React from 'react';

const initialstate = {
    customization: [],

      fontValue: null,
      classValue: null,
  };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialstate
}

handlefontChange = (e) =>
{
    //this.setState({fontValue: e.target.value})

    let customizationElement = [{
      font : e.target.value,
      class : this.state.classValue
      color : 'insert color'
    }]

    let flag=0;

    if(this.state.customization.length === 0)
    {
      this.setState({ customization:customizationElement });
    }
    else 
    {
      let arr = this.state.customization;

        for(let i=0; i<arr.length; i++)
        {
          if(arr[i].class === this.state.classValue )
          {
             arr[i].font = this.state.fontValue;
             this.setState({customization:arr})
             flag = 1;
          }
        }
        if(flag === 0)
        {
          let custarr = this.state.customization;
          let concatedcustarray = custarr.concat(customizationElement);
          this.setState({customization:concatedcustarray})
        }
    }
}

handleclassChange = (e) => {
      this.setState({classValue: e.target.value})
  }

  render() {
      console.log(this.state.customization)
    
    return (
        <div>          
          <select onChange={this.handleclassChange}>
            <option disabled selected>choose</option>
            <option value="about">About</option>
            <option value="Bio">Bio</option>
          </select>
          
          <br/>
          
          <select onChange={this.handlefontChange}>
            <option disabled selected>choose</option>
            <option value="roboto">roboto</option>
            <option value="Arial">Arial</option>
          </select>

        </div>
      );
  }
}

export default App;