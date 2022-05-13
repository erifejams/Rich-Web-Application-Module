//array of images
//changes all images incase they contain a spoiler
let spoilerAlert = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLGaUvaxdR6oAdUy4CZb6_BF930NxsitfgQdNc9lXNm54m9EXPg-UqpkJjaUdnbMyGVU&usqp=CAU",
    "https://www.electronicproducts.com/wp-content/uploads/internet-of-things-household-spoiler-alert.jpg",
    "http://images.squarespace-cdn.com/content/v1/52d5b03be4b0b3e32a906289/1487952768929-8PR3JZDO64BYZ6T3IM6A/spoilerAlert.jpg",
    "https://miro.medium.com/max/3000/1*U78x_x6Fnrq1z66kJDu4Ug.png",
	"https://c.tenor.com/KiabR5CROK8AAAAM/kristen-bell-spoiler.gif",
	"https://astonlife.astonwordpress.co.uk/wp-content/uploads/sites/76/2017/08/spoilers.gif",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ST5yi62F5nYhMyLVuk-zzHxr0Ny0spCfnBjZkAcjhKvcjmLLXbYxPAe6_3YTdjABArk&usqp=CAU",
	"https://66.media.tumblr.com/70466e1dc7860d15c44b902c87a71a83/tumblr_pr22frHNR91qgf1i8o1_500.gif",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2n-ixEbrZDLJX82vvdQfhEeLugbu7t-S4Q&usqp=CAU",
	"https://i0.wp.com/49.media.tumblr.com/2d7dfa914a8cf66f67828a43c254de9a/tumblr_nzg6p6MNfF1ulsdw5o1_500.gif",
	"https://m0.joe.ie/wp-content/uploads/2015/06/15202227/Melisandre-Spoiler.gif",
	"https://c.tenor.com/ajUEKfD_VHsAAAAM/spoiler-spoiler-alert.gif",
];

//getting random image from the array created
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * spoilerAlert.length)
    imgs[i].src = spoilerAlert[randomImg]
}

//give a big warning for headings
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "This content is about squid game!!!! Read at your own discrete. ";
}
//further warns the user in the paragraph
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This page is a spoiler for squid game. Don't continue reading!! I've changed the paragraph for your SAFETY.";
}

//change background colour
document.body.style.backgroundColor = 'blue';

//get words associated with squid game, and change it to a warning
const spoilertext = document.querySelectorAll('h1, h2, h3, h4, h5, p, title, a, select, section, header, style, footer, div, hr, ul, ol, span, class, head, body')
for(let i = 0; i < 100; i++){
	if(spoilertext[i].innerHTML.includes('Squid Game')){
		spoilertext[i].innerHTML = spoilertext[i].innerHTML.replace('Squid Game', 'WARNING')
	}
}
//this is to change the link to the social media of the charachters
//I did one character but didn't get it right - couldn't get it to work
const websiteLinks = document.getElementsByTagName('href');
websiteLinks.getElementsByTagName('href').innerText = "https://www.metacritic.com/person/jung-jae-lee";
websiteLinks.getElementsByTagName('href').href = "https://www.instagram.com/from_jjlee/?hl=en";

//removes anything that is a video
let videoContent = document.getElementsByTagName('video');
if(videoContent.parentNode){
	videoContent.parentNode.removeChild(videoContent);
}