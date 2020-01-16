/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const dummy_data = [];
// axios
//   .get(`https://api.github.com/users/evrgreen`)
//   .then(response => {
//     console.log(response);
//     dummy_data.push(response);
//   })
//   .catch(error => {
//     console.log("the data was not returned", error);
//   });
const dummy_data = {
  data: {
    login: "Evrgreen",
    id: 29643642,
    node_id: "MDQ6VXNlcjI5NjQzNjQy",
    avatar_url: "https://avatars2.githubusercontent.com/u/29643642?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Evrgreen",
    html_url: "https://github.com/Evrgreen",
    followers_url: "https://api.github.com/users/Evrgreen/followers",
    following_url:
      "https://api.github.com/users/Evrgreen/following{/other_user}",
    gists_url: "https://api.github.com/users/Evrgreen/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Evrgreen/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Evrgreen/subscriptions",
    organizations_url: "https://api.github.com/users/Evrgreen/orgs",
    repos_url: "https://api.github.com/users/Evrgreen/repos",
    events_url: "https://api.github.com/users/Evrgreen/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Evrgreen/received_events",
    type: "User",
    site_admin: false,
    name: "Robert Carsten",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    public_repos: 26,
    public_gists: 0,
    followers: 11,
    following: 4,
    created_at: "2017-06-22T22:16:12Z",
    updated_at: "2020-01-16T15:30:31Z"
  }
};

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} /> data{avatar_url}
  <div class="card-info">
    <h3 class="name">{users name}</h3> //Evrgreen data{login}
    <p class="username">{users user name}</p>  Robert Carsten data{name}
    <p>Location: {users location}</p> data{location}
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a> data{url}
    </p>
    <p>Followers: {users followers count}</p> data{followers}
    <p>Following: {users following count}</p> data{following}
    <p>Bio: {users bio}</p> data{bio}
  </div>
</div>

*/
const elementTags = [
  {
    name: "card",
    tagName: "div",
    props: {
      className: "card"
    }
  },
  {
    name: "user-image",
    tagName: "img",
    props: {
      src: ""
    }
  },
  {
    name: "card-info",
    tagName: "div",
    props: {
      className: "card-info"
    }
  },
  {
    name: "name",
    tagName: "h3",
    props: {
      className: "name",
      textContent: ""
    }
  },
  {
    name: "login",
    tagName: "p",
    props: {
      textContent: ""
    }
  },
  {
    name: "location",
    tagName: "p",
    props: {
      textContent: "Location:"
    }
  },
  {
    name: "profile",
    tagName: "p",
    props: {
      textContent: "Profile"
    }
  },
  {
    name: "url",
    tagName: "a",
    props: {
      href: ""
    }
  },
  {
    name: "followers",
    tagName: "p",
    props: {
      textContent: "Followers: "
    }
  },
  {
    name: "following",
    tagName: "p",
    props: {
      textContent: "Following: "
    }
  },
  {
    name: "bio",
    tagName: "p",
    props: {
      textContent: ""
    }
  }
];

function splicer(data, skeleton) {}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
