
//COULDN'T GET THE WORD COUNT TO WORK, NOT SURE HOW
const api_url = 'https://jsonplaceholder.typicode.com/posts'

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();

  //loops through each to get the title
  const filterTitleLength = data.filter(data => data.body).map(post => post.body);

  const resultArray = filterTitleLength.flatMap(body => body.split(" "));
  //const t = resultArray.mapValues(it.value.count()).reduce((acc, total) => Math.count(resultArray));
  //const resultArray = filterTitleLength.flatMap(body => body.split(" ")).groupBy(body => body).mapValues(body.length);
  console.log(resultArray);

}

getISS();
