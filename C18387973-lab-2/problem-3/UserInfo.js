const api_url = 'https://api.github.com/users'

async function searchUser() {
  const response = await fetch(api_url);
  const data = await response.json();

  //loops through each to get the title
  const filterTitleLength = data.filter(data => data);
  const NameOfUser = filterTitleLength.map(user => user.login);


  //loops through each to get the title
  let p = new Promise((resolve, reject) => {
    if (NameOfUser.includes(document.getElementById('textInput').value)) {
      resolve(' User Found')
    } else if (!NameOfUser.includes('TextFromUser')) {
      reject(' User not found')
    }
  })

  p.then((message) => {
      console.log(message);
      //gets the user by the id to get their details
      const getID = NameOfUser.indexOf(document.getElementById('textInput').value);
      filterTitleLength.forEach(function(item, index, array) {
        if (index == getID) {
        
          //to get more details on the user
          new_user_api = api_url.concat("/" + item.login);
          
          
          //document.getElementById("NameInfo").innerHTML = item.login;
          //document.getElementById("UsernameInfo").innerHTML = item.twitter_username;
          //document.getElementById("EmailInfo").innerHTML = item.email;
          //document.getElementById("LocationInfo").innerHTML = item.location;
          //document.getElementById("GistsInfo").innerHTML = item.public_gists;
          console.log(item, index);
        }
       
        document.getElementById("EmailInfo").innerHTML = item.email;
        //MoreDetailsUser(new_user_api);

      });

      //tocall function to show hidden details 
      UserFoundUnblokHidden();
    })
    .catch((message) => {
      console.log(message);
    })

  //console.log(NameOfUser);
}

function UserFoundUnblokHidden() {
  //to display the hidden information boes
  document.getElementById("displayInfo").style.display = "block";
  document.getElementById("UserTitle").style.display = "block";
  document.getElementById("UserRepos").style.display = "block";
  document.getElementById("headingUserRepos").style.display = "block";
}


//to work with the different api
/*
async function MoreDetailsUser(new_user_api) {
  const response2 = await fetch(new_user_api);
  const data2 = await response.json();

  //loops through each to get the title
  const filterTitleLength = data2.filter(data2 => data);
  const NameOfUser2 = filterTitleLength.map(user2 => user2.email);
	document.getElementById("EmailInfo").innerHTML = item.email;
	
	//searchUser(NameOfUser).indexOf(document.getElementById('textInput').value));
	  /*
	  //get the image of the user
	  document.getElementById('btn') == function() {
		var val = document.getElementById('imagename').value,
		  src = 'http://webpage.com/images/' + val + '.png',
		  img = document.createElement('img');

		img.src = src;
		document.body.appendChild(img);

  }
  
  return NameOfUser2;
}*/