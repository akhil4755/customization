import React from 'react';

const initialstate = {
    customization: [],

      fontValue: null,
      sectionValue: null,
  };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialstate
}

handleokbutton = (e) =>
{
    let customizationElement = {
      font : this.state.fontValue,
      section : this.state.sectionValue
    }

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
          if(arr[i].section === this.state.sectionValue )
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

handlesectionChange = (e) => {
      this.setState({sectionValue: e.target.value})
  }

handlefontChange = (e) => {
      this.setState({fontValue: e.target.value})
  }

  render() {
      console.log(this.state.customization)
      console.log(this.state.fontValue)
      console.log(this.state.sectionValue)
    
    return (
        <div>          
          <select onChange={this.handlesectionChange}>
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

          <br/>

          <button onChange={this.handleokbutton}> OK </button>
        </div>
      );
  }
}

export default App;