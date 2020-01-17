/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const dummy_data = [];
axios //requests my user data from the github API
  .get(`https://api.github.com/users/evrgreen`)
  .then(response => {
    cardConstructor(response.data, elementTags);
    return axios.get(response.data.followers_url); //axios request to my follower page
  })
  .then(response => {
    Array.from(response.data).forEach(dataSet => {
      axios //loops through each memeber of my followers retrieved from previous axios call and places an axios request for their user page
        .get(`https://api.github.com/users/${dataSet.login}`)
        .then(response => {
          console.log(response);
          cardConstructor(response.data, elementTags);
        });
    });
  })
  .catch(error => {
    console.log("the data was not returned", error);
  });

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
    name: "avatar_url",
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
      textContent: "Profile: "
    }
  },
  {
    name: "html_url",
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

// Takes 2 data MediaStreamAudioSourceNode, axios data(data) and an array built of appropriate objects(skeleton), returns an array of objects
function splicer(data, skeleton) {
  let templateArray = [];
  // loops through each element in skeleton
  templateArray = skeleton.map((item, index) => {
    // checks if the items name is a key in data
    if (item.name in data) {
      // if skeleton item is a element with a textContent property the the items nested props objects textConent is updated with value from data
      if ("textContent" in item.props) {
        item.props[`textContent`] = data[item.name];
      } // if skeleton item is a element with a href property then the items nested props objects href is updated with value from data
      else if ("href" in item.props) {
        item.props["href"] = data[item.name];
        item.props.textContent = data.login;
      } // if skeleton item is a element with a textContent property the the items nested props objects textConent is updated with value from data
      else if ("src" in item.props) {
        item.props["src"] = data[item.name];
      }
    }
    return item;
  });

  return templateArray;
}

// takes a single Object and  returns a html tag element.
// Object must have a tagName property, may have an option props property filled with properties for returned tag (className,textContent,etc)

function creator(obj) {
  return Object.assign(document.createElement(obj.tagName), obj.props || {});
}

function stitcher(tagList, loop = 1) {
  const tempArray = [];
  let parent = "",
    child = "",
    profile = "";
  tagList.forEach((element, index) => {
    if (element.tagName == parent.tagName) {
      tempArray.push(parent);
    }
    if (element.tagName == "DIV") {
      parent = element;
    } else {
      child = element;
      if (child.textContent == "Profile: ") {
        profile = child;
      }
      if (child.tagName == "A") {
        profile.append(child);
        child = profile;
      }
      parent.append(child);
    }
  });
  tempVar = tempArray[0];
  tempVar.append(parent);
  return tempVar;
}

function cardConstructor(data, skeleton) {
  let constructArray = splicer(data, [...skeleton]);

  constructArray.forEach(
    (element, index) => (constructArray[index] = creator(element))
  );

  const card = stitcher(constructArray);

  document.querySelector(".cards").append(card);
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
