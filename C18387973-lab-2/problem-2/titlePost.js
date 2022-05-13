
const api_url = 'https://jsonplaceholder.typicode.com/posts'

async function getISS(){
	const response = await fetch(api_url);
	const data = await response.json();
  
 //loops through each to get the title
 const filterTitleLength = data.filter(data => data.title.split(' ').length > 6)
 const resultArray = filterTitleLength.map(post => post.title)
 console.log(resultArray);

}

getISS();