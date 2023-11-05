
// const API_KEY = "AIzaSyD0jZYzluSYEd2imTJmlPOVezqfGQKOClc";
const API_KEY = "AIzaSyA3XM8hxc86YUVbn99Q8eb4ENNXWoQ0qp4";

const Base_Url = "https://www.googleapis.com/youtube/v3";

const All_Cards = document.getElementById('All-Cards');
const inputTag  = document.getElementById('inputTag');
const searchbtn = document.getElementById('searchbtn');

//------1st page--API-result-----------------------------------------------------------------------------------------------------------------------------------
async function fetchVideos(searchQuery,maxResults){
    const response = await fetch(`${Base_Url}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);
    // snippet gives me video info 
    const data = await response.json();
   // console.log(data.items);
    ListOfVideos(data.items)

}
//-------------------1st Page search result-------------------------------------------------------------------------------------
function ListOfVideos(data){
    All_Cards.innerHTML='';

    // data.forEach(element => {
    //     let card = document.createElement('div');
    //     card.id = 'card';
    //     card.innerHTML =`
    //     <div><img src="${element.snippet.thumbnails.medium.url}" width="${element.snippet.thumbnails.medium.width}px" height="${element.snippet.thumbnails.medium.height}px"  alt="thumbnail"> </div>
    //           <div class="card-Bottom">
    //           <img src="${getChannelLogo(element.snippet.channelId)}" alt="logo">
    //           <div>
    //             <p>${element.snippet.title}</p>
    //             <p>${element.snippet.channelTitle}</p>
    //             <p>${viewCount(getVideoStats(element.id.videoId))}views . ${timeCount(element.snippet.publishTime)}</p>
    //           </div>
                
    //          </div>`
    //          All_Cards.appendChild(card)
    //          card.addEventListener('click',(e)=>{
    //             console.log(element.id.videoId);
    //             sessionStorage.setItem("videoIdIs", element.id.videoId);
    //             window.location.href = 'index-2.html';
    //           })
          
    //          //getVideoDetails(`${element.id.videoId}`)
    // });

    processVideos(data);

async function processVideos(arrayOfVideos) {
    for (const element of arrayOfVideos) {
      try {
        let channelLogo = await getChannelLogo(element.snippet.channelId);

        let videoStats = await getVideoStats(element.id.videoId); // Assuming getVideoStats is an async function
        let viewsPerVideo = await viewCount(videoStats);
  
        let card = document.createElement('div');
            card.id = 'card';
            card.innerHTML =`
            <div><img src="${element.snippet.thumbnails.medium.url}" width="${element.snippet.thumbnails.medium.width}px" height="${element.snippet.thumbnails.medium.height}px"  alt="thumbnail"> </div>
                  <div class="card-Bottom">
                  <img src="${channelLogo}" alt="logo">
                  <div>
                    <p>${element.snippet.title}</p>
                    <p>${element.snippet.channelTitle}</p>
                    <p>${viewsPerVideo} views . ${timeCount(element.snippet.publishTime)}</p>
                  </div>
                    
                 </div>`
                 All_Cards.appendChild(card)
  
        card.addEventListener('click', (e) => {
          console.log(element.id.videoId);
          sessionStorage.setItem("videoIdIs", element.id.videoId);
          window.location.href = 'index-2.html';
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

}
// -----------------------------------------------------------------------------
async function viewCount(count){
    if(count > 1000000){
      let million = await count/1000000;
      return Math.ceil(million) + 'M';
    }else{
      let thounsand = await count/1000
      return  Math.ceil(thounsand) + 'K';
    }
  }
  

  function timeCount(publishTime) {
    let publishDate = new Date(publishTime);
    let currentDate = new Date();
  
    let secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;
  
    const secondsPerDay = 24 * 60 * 60;
    const secondsPerWeek = 7 * secondsPerDay;
    const secondsPerMonth = 30 * secondsPerDay;
    const secondsPerYear = 365 * secondsPerDay;
  
    if (secondsGap < secondsPerDay) {
      return `${Math.ceil(secondsGap / (60 * 60))} hrs ago`;
    }
    if (secondsGap < secondsPerWeek) {
      return `${Math.ceil(secondsGap / secondsPerWeek)} weeks ago`;
    }
    if (secondsGap < secondsPerMonth) {
      return `${Math.ceil(secondsGap / secondsPerMonth)} months ago`;
    }
  
    return `${Math.ceil(secondsGap / secondsPerYear)} years ago`;
  }
  
  // fetchVideos('',20)
  
  if(inputTag.value == ''){
    fetchVideos('',20)
  }
  
  searchbtn.addEventListener('click',()=>{
    if(inputTag.value !== ''){
      let searchResult = inputTag.value;
      fetchVideos(searchResult + '',20)
    }
  })
  
  

// --------------------------------------------------------------------------------------------------

// Getting video statistics:-

async function getVideoStats(videoId){
    const response = await fetch(`${Base_Url}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
    const data = await response.json();
    // console.log(data);
    return data.items[0].statistics.viewCount
}
// getVideoStats('JhIBqykjzbs')



// --------------------------------------------------------------------------------------------------


// Getting channel information:-
async function getChannelLogo(channelId){
    const response = await fetch(`${Base_Url}/channels?key=${API_KEY}&part=snippet&id=${channelId}`);
    const data = await response.json();
    console.log(data.items[0].snippet.thumbnails.default.url);

    let logoURL = data.items[0].snippet.thumbnails.default.url

    return logoURL

}
// getChannelLogo('UCaAhYJbOJcs_CJ0IAtPOUgw')
// --------------------------------------------------------------------------------------------------

