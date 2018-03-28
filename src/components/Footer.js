import React, { Component } from 'react';
// import jsonData from '../services/contributors.JSON';


export class Footer extends Component {
    constructor(props){
        super(props);

      this.state = {
        members: []
        
      }


    }

  // the callback for fetching the information
    getData() {
        

        var json_data = [
            {
              "login": "khusbuchandra",
              "id": 35678241,
              "avatar_url": "https://avatars2.githubusercontent.com/u/35678241?v=4",
              "url": "https://api.github.com/users/khusbuchandra",
              "html_url": "https://github.com/khusbuchandra",
              "followers_url": "https://api.github.com/users/khusbuchandra/followers",
              "following_url": "https://api.github.com/users/khusbuchandra/following{/other_user}",
              "gists_url": "https://api.github.com/users/khusbuchandra/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/khusbuchandra/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/khusbuchandra/subscriptions",
              "organizations_url": "https://api.github.com/users/khusbuchandra/orgs",
              "repos_url": "https://api.github.com/users/khusbuchandra/repos",
              "events_url": "https://api.github.com/users/khusbuchandra/events{/privacy}",
              "received_events_url": "https://api.github.com/users/khusbuchandra/received_events",
              "type": "User",
              "contributions": 41
            },
            {
              "login": "tanyagupta",
              "id": 8497274,
              "avatar_url": "https://avatars3.githubusercontent.com/u/8497274?v=4",
              "url": "https://api.github.com/users/tanyagupta",
              "html_url": "https://github.com/tanyagupta",
              "followers_url": "https://api.github.com/users/tanyagupta/followers",
              "following_url": "https://api.github.com/users/tanyagupta/following{/other_user}",
              "gists_url": "https://api.github.com/users/tanyagupta/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/tanyagupta/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/tanyagupta/subscriptions",
              "organizations_url": "https://api.github.com/users/tanyagupta/orgs",
              "repos_url": "https://api.github.com/users/tanyagupta/repos",
              "events_url": "https://api.github.com/users/tanyagupta/events{/privacy}",
              "received_events_url": "https://api.github.com/users/tanyagupta/received_events",
              "type": "User",
              "contributions": 30
            },
            {
              "login": "sgluzins",
              "id": 2319637,
              "avatar_url": "https://avatars1.githubusercontent.com/u/2319637?v=4",
              "url": "https://api.github.com/users/sgluzins",
              "html_url": "https://github.com/sgluzins",
              "followers_url": "https://api.github.com/users/sgluzins/followers",
              "following_url": "https://api.github.com/users/sgluzins/following{/other_user}",
              "gists_url": "https://api.github.com/users/sgluzins/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/sgluzins/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/sgluzins/subscriptions",
              "organizations_url": "https://api.github.com/users/sgluzins/orgs",
              "repos_url": "https://api.github.com/users/sgluzins/repos",
              "events_url": "https://api.github.com/users/sgluzins/events{/privacy}",
              "received_events_url": "https://api.github.com/users/sgluzins/received_events",
              "type": "User",
              "contributions": 23
            },
            {
              "login": "sonalikatara",
              "id": 4163671,
              "avatar_url": "https://avatars0.githubusercontent.com/u/4163671?v=4",
              "url": "https://api.github.com/users/sonalikatara",
              "html_url": "https://github.com/sonalikatara",
              "followers_url": "https://api.github.com/users/sonalikatara/followers",
              "following_url": "https://api.github.com/users/sonalikatara/following{/other_user}",
              "gists_url": "https://api.github.com/users/sonalikatara/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/sonalikatara/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/sonalikatara/subscriptions",
              "organizations_url": "https://api.github.com/users/sonalikatara/orgs",
              "repos_url": "https://api.github.com/users/sonalikatara/repos",
              "events_url": "https://api.github.com/users/sonalikatara/events{/privacy}",
              "received_events_url": "https://api.github.com/users/sonalikatara/received_events",
              "type": "User",
              "contributions": 19
            },
            {
              "login": "PepperAddict",
              "id": 4171505,
              "avatar_url": "https://avatars3.githubusercontent.com/u/4171505?v=4",
              "url": "https://api.github.com/users/PepperAddict",
              "html_url": "https://github.com/PepperAddict",
              "followers_url": "https://api.github.com/users/PepperAddict/followers",
              "following_url": "https://api.github.com/users/PepperAddict/following{/other_user}",
              "gists_url": "https://api.github.com/users/PepperAddict/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/PepperAddict/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/PepperAddict/subscriptions",
              "organizations_url": "https://api.github.com/users/PepperAddict/orgs",
              "repos_url": "https://api.github.com/users/PepperAddict/repos",
              "events_url": "https://api.github.com/users/PepperAddict/events{/privacy}",
              "received_events_url": "https://api.github.com/users/PepperAddict/received_events",
              "type": "User",
              "contributions": 18
            },
            {
              "login": "agonzalez0515",
              "id": 21042658,
              "avatar_url": "https://avatars2.githubusercontent.com/u/21042658?v=4",
              "url": "https://api.github.com/users/agonzalez0515",
              "html_url": "https://github.com/agonzalez0515",
              "followers_url": "https://api.github.com/users/agonzalez0515/followers",
              "following_url": "https://api.github.com/users/agonzalez0515/following{/other_user}",
              "gists_url": "https://api.github.com/users/agonzalez0515/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/agonzalez0515/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/agonzalez0515/subscriptions",
              "organizations_url": "https://api.github.com/users/agonzalez0515/orgs",
              "repos_url": "https://api.github.com/users/agonzalez0515/repos",
              "events_url": "https://api.github.com/users/agonzalez0515/events{/privacy}",
              "received_events_url": "https://api.github.com/users/agonzalez0515/received_events",
              "type": "User",
              "contributions": 10
            },
            {
              "login": "digilou",
              "id": 8865558,
              "avatar_url": "https://avatars1.githubusercontent.com/u/8865558?v=4",
              "url": "https://api.github.com/users/digilou",
              "html_url": "https://github.com/digilou",
              "followers_url": "https://api.github.com/users/digilou/followers",
              "following_url": "https://api.github.com/users/digilou/following{/other_user}",
              "gists_url": "https://api.github.com/users/digilou/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/digilou/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/digilou/subscriptions",
              "organizations_url": "https://api.github.com/users/digilou/orgs",
              "repos_url": "https://api.github.com/users/digilou/repos",
              "events_url": "https://api.github.com/users/digilou/events{/privacy}",
              "received_events_url": "https://api.github.com/users/digilou/received_events",
              "type": "User",
              "contributions": 7
            },
            {
              "login": "amr08",
              "id": 17239196,
              "avatar_url": "https://avatars3.githubusercontent.com/u/17239196?v=4",
              "url": "https://api.github.com/users/amr08",
              "html_url": "https://github.com/amr08",
              "followers_url": "https://api.github.com/users/amr08/followers",
              "following_url": "https://api.github.com/users/amr08/following{/other_user}",
              "gists_url": "https://api.github.com/users/amr08/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/amr08/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/amr08/subscriptions",
              "organizations_url": "https://api.github.com/users/amr08/orgs",
              "repos_url": "https://api.github.com/users/amr08/repos",
              "events_url": "https://api.github.com/users/amr08/events{/privacy}",
              "received_events_url": "https://api.github.com/users/amr08/received_events",
              "type": "User",
              "contributions": 3
            },
            {
              "login": "desdemonhu",
              "id": 26439524,
              "avatar_url": "https://avatars0.githubusercontent.com/u/26439524?v=4",
              "url": "https://api.github.com/users/desdemonhu",
              "html_url": "https://github.com/desdemonhu",
              "followers_url": "https://api.github.com/users/desdemonhu/followers",
              "following_url": "https://api.github.com/users/desdemonhu/following{/other_user}",
              "gists_url": "https://api.github.com/users/desdemonhu/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/desdemonhu/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/desdemonhu/subscriptions",
              "organizations_url": "https://api.github.com/users/desdemonhu/orgs",
              "repos_url": "https://api.github.com/users/desdemonhu/repos",
              "events_url": "https://api.github.com/users/desdemonhu/events{/privacy}",
              "received_events_url": "https://api.github.com/users/desdemonhu/received_events",
              "type": "User",
              "contributions": 3
            },
            {
                "login": "resant18",
                "id": 36322603,
                "avatar_url": "https://avatars1.githubusercontent.com/u/36322603?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/resant18",
                "html_url": "https://github.com/resant18",
                "followers_url": "https://api.github.com/users/resant18/followers",
                "following_url": "https://api.github.com/users/resant18/following{/other_user}",
                "gists_url": "https://api.github.com/users/resant18/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/resant18/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/resant18/subscriptions",
                "organizations_url": "https://api.github.com/users/resant18/orgs",
                "repos_url": "https://api.github.com/users/resant18/repos",
                "events_url": "https://api.github.com/users/resant18/events{/privacy}",
                "received_events_url": "https://api.github.com/users/resant18/received_events",
                "type": "User",
                "site_admin": false
                }
          ]
        // var myObject = JSON.parse(json_data);
        let names = [];
        for(var i = 0; i < json_data.length; i++) {
            let sets = json_data[i].login;

            names.push([`<a href="http://github.com/${sets}">${sets}</a> `])
            // names.push(json_data[i].login);


}

this.setState({
    members: names
})
}
componentWillReceiveProps() {
    this.getData();
}
        
    
    
    render(){
    
    let usernames = this.state.members;
    let together = usernames.join(" | ");
        return (
<div>
<a href="https://github.com/gwg-women/gwg-women-techmakers"> Grow with Google Project</a>: <div dangerouslySetInnerHTML={{ __html: together}} />
</div>
          

        )
    }
}



export default Footer;
