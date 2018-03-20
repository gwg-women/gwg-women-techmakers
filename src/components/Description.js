import React, { Component } from 'react';
import {getCity} from '../services/geolocation';



const apiUrl = currentCity => 
`https://en.wikipedia.org/api/rest_v1/page/summary/${currentCity}`


export class Wiki extends Component {
    constructor(props){
        super(props);
      this.state = {
        currentCity: 'new york city, new york',
        requestFailed: false,
        title: '',
        description: [],

      }
      console.log('hello');

      getCity(0, 0);
      this.getData();

    }



  

  // the callback for fetching the information
    getData(){
        fetch(apiUrl(this.state.currentCity))
        .then(response => {
            if(!response.ok){
                throw Error("Unable to fetch wiki information")
            }
            return response
        })
        .then(data => data.json())
        .then(data =>   
          {
            this.setState({

                title: data.titles,
                description: data.extract_html,
            })
        }, ()=>{
          this.setState({
            requestFailed: true
          })
        })
    }
    render(){

        if (this.state.requestFailed === true) return <h1>Request Failed</h1>

        const description = String(this.state.description);
        const title = this.state.currentCity;
        const together = title + description;
        return (

          <p>
 
            {together} 
          </p>
          

        )
    }
}



export default Wiki;
