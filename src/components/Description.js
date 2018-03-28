import React, { Component } from 'react';

export class Wiki extends Component {
    constructor(props){
        super(props);

      this.state = {
        requestFailed: false,
      }

    }

  // the callback for fetching the information
    getData(){

        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${this.props.currentCity}`;

        fetch(url)
        .then(response => {
            if(!response.ok){
                
                  this.setState({
                    requestFailed: true
                  })
                
                console.log('error retrieving wiki information')
            }
            return response
        })
        .then(data => data.json()).then(data =>
          {
            this.setState({
                currentCity: this.props.currentCity,
                description: data.extract,
            })
        })
        
    }
    componentWillMount() {
      this.getData();
}

    
    render(){
      

        if (this.state.requestFailed === true) return <h1>Wiki Request Failed</h1>

        const description = this.state.description;
    
        return (

          <p>
          {description}
          </p> 
          

        )
    }
}



export default Wiki;
