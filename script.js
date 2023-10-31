
const API_KEY = "AIzaSyBAH8ynA9cToyTutd4cpW5Hp4JQrypyPGo";
const Base_Url = "https://www.googleapis.com/youtube/v3";

async function fetchVideo(searchQuery,maxResults){
    const response = await fetch(`${Base_Url}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);
    // snippet gives me video info 
    const data = await response.json();
    console.log(data);
}

fetchVideo('icc',25);

async function getVideoStatus(videoId){
    const responce =await fetch(`${Base_Url}/videos?key=${API_KEY}&part=statistics&id=${videoId}`)
    const data = await response.json();
    console.log(data);
}
getVideoStatus()