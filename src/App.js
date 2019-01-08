import React from 'react';

const initialstate = {
    customization: [],

      classValue: null,
  };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialstate
}

handleclassChange = (e) => {
      this.setState({classValue: e.target.value})
  }

handlefontChange = (e) =>
{
    let customizationElement = [{
      font : e.target.value,
      class : this.state.classValue,
      size : '',
      color : ''
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
             arr[i].font = e.target.value;
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

handlesizeChange = (e) =>
{
    let customizationElement = [{
      font : '',
      class : this.state.classValue,
      size : e.target.value,
      color : ''
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
             arr[i].size = e.target.value;
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

handlecolorChange = (e) =>
{
    let customizationElement = [{
      font : '',
      class : this.state.classValue,
      size : '',
      color : e.target.value
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
             arr[i].color = e.target.value;
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



  render() {
      console.log(this.state.customization)
    
    return (
        <div>     
        Class     
          <select onChange={this.handleclassChange}>
            <option disabled selected>choose</option>
            <option value="about">About</option>
            <option value="Bio">Bio</option>
          </select>
          
          <br/>
          Font
          <select onChange={this.handlefontChange}>
            <option disabled selected>choose</option>
            <option value="roboto">roboto</option>
            <option value="Arial">Arial</option>
          </select>

          <br/>
          Size
          <select onChange={this.handlesizeChange}>
            <option disabled selected>choose</option>
            <option value="12">12</option>
            <option value="13">13</option>
          </select>

          <br/>
          Color
          <select onChange={this.handlecolorChange}>
            <option disabled selected>choose</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
          </select>

        </div>
      );
  }
}

export default App;