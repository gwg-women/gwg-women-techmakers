import React, { Component } from 'react';


export class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
        members: []  
    }
  }

  componentWillReceiveProps() {
    this.getData();
  }

  // the callback for fetching the information
  getData() {
    var json_data = [
            {
              "avatarUrl": "https://avatars3.githubusercontent.com/u/8497274?v=4",
              "url": "https://github.com/tanyagupta",
              "login": "tanyagupta",
              "id": "MDQ6VXNlcjg0OTcyNzQ=",
              "name": "tanyagupta",
              "bioHTML": ""
            },
            {
              "avatarUrl": "https://avatars2.githubusercontent.com/u/35678241?v=4",
              "url": "https://github.com/khusbuchandra",
              "login": "khusbuchandra",
              "id": "MDQ6VXNlcjM1Njc4MjQx",
              "name": "Khusbu Chandra",
              "bioHTML": "<div>Traveler, mother, DIYer , has an opinion and likes to write mostly code.</div>"
            },
            {
              "avatarUrl": "https://avatars1.githubusercontent.com/u/2319637?v=4",
              "url": "https://github.com/sgluzins",
              "login": "sgluzins",
              "id": "MDQ6VXNlcjIzMTk2Mzc=",
              "name": "sasha",
              "bioHTML": "<div>www.linkedin.com/in/sasha-gluzinski</div>"
            },
            {
              "avatarUrl": "https://avatars0.githubusercontent.com/u/4163671?v=4",
              "url": "https://github.com/sonalikatara",
              "login": "sonalikatara",
              "id": "MDQ6VXNlcjQxNjM2NzE=",
              "name": "Sonali Shukla",
              "bioHTML": "<div>Front End Web Developer\n</div>"
            },
            {
              "avatarUrl": "https://avatars2.githubusercontent.com/u/21042658?v=4",
              "url": "https://github.com/agonzalez0515",
              "login": "agonzalez0515",
              "id": "MDQ6VXNlcjIxMDQyNjU4",
              "name": "Angelica Gonzalez",
              "bioHTML": "<div>Hufflepuff <g-emoji class=\"g-emoji\" alias=\"yellow_heart\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f49b.png\">💛</g-emoji> \nWeb Developer 👩🏻‍💻\nNintendettes <g-emoji class=\"g-emoji\" alias=\"ribbon\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f380.png\">🎀</g-emoji> \nCal <g-emoji class=\"g-emoji\" alias=\"blue_heart\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f499.png\">💙</g-emoji>\n</div>"
            },
            {
              "avatarUrl": "https://avatars1.githubusercontent.com/u/8865558?v=4",
              "url": "https://github.com/digilou",
              "login": "digilou",
              "id": "MDQ6VXNlcjg4NjU1NTg=",
              "name": "Amy Carney",
              "bioHTML": "<div>Front-End Web Designer &amp; Developer</div>"
            },
            {
              "avatarUrl": "https://avatars3.githubusercontent.com/u/4171505?v=4",
              "url": "https://github.com/PepperAddict",
              "login": "PepperAddict",
              "id": "MDQ6VXNlcjQxNzE1MDU=",
              "name": "Jen Reassey",
              "bioHTML": ""
            },
            {
              "avatarUrl": "https://avatars3.githubusercontent.com/u/17239196?v=4",
              "url": "https://github.com/amr08",
              "login": "amr08",
              "id": "MDQ6VXNlcjE3MjM5MTk2",
              "name": "Andrea Roche",
              "bioHTML": "<div>Full-Stack Developer, Mom, Musician, Jack of all trades</div>"
            },
            {
              "avatarUrl": "https://avatars0.githubusercontent.com/u/26439524?v=4",
              "url": "https://github.com/desdemonhu",
              "login": "desdemonhu",
              "id": "MDQ6VXNlcjI2NDM5NTI0",
              "name": "",
              "bioHTML": ""
            },
            {
              "avatarUrl": "https://avatars1.githubusercontent.com/u/36322603?v=4",
              "url": "https://github.com/resant18",
              "login": "resant18",
              "id": "MDQ6VXNlcjM2MzIyNjAz",
              "name": null,
              "bioHTML": ""
            },
            {
              "avatarUrl": "https://avatars0.githubusercontent.com/u/6998954?v=4",
              "url": "https://github.com/M0nica",
              "login": "M0nica",
              "id": "MDQ6VXNlcjY5OTg5NTQ=",
              "name": "Monica Powell",
              "bioHTML": "<div>I create websites. I'm a #GIRLBOSS Awardee. I make technology more enjoyable &amp; accessible </div>"
            },
            {
              "avatarUrl": "https://avatars1.githubusercontent.com/u/36494738?v=4",
              "url": "https://github.com/replimes",
              "login": "replimes",
              "id": "MDQ6VXNlcjM2NDk0NzM4",
              "name": "Kristina B",
              "bioHTML": ""
            }
          
    ]

    let names = [];
    for(var i = 0; i < json_data.length; i++) {
      let sets = json_data[i].login;
      let jsonname = json_data[i].name;
      names.push([`<li><a href="http://github.com/${sets}" target="_blank">${jsonname || sets}</a> </li>`])
    }

    this.setState({members: names})
  }

  render(){
    const {members} = this.state;
    let together = members.join(" ");
    
    return (
      <div>
        <h2 className="gwg-link"><a href="https://github.com/gwg-women/gwg-women-techmakers"> Grow with Google Project</a></h2> <ul dangerouslySetInnerHTML={{ __html: together}} />
        </div>
    )
  }
}

export default Footer;
