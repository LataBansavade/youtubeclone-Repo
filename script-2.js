//   const API_KEY = "AIzaSyBmOfUnRNYc22e04ZmK79uRbPb6388K9AE";
  
  let gettingVideoId = sessionStorage.getItem("videoIdIs");

  // Video
  window.addEventListener("load", () => {
      // we need to write logic for rendering video player iframe
      let videoId = gettingVideoId + '';
      if(YT){ //if YT class exist
        new YT.Player('video-container',{
            height: "450",
            width: "800",
            videoId,
        })
      }
  });


  // video Info through VideoID 
  async function getVideoTitle(videoId){  
    const response = await fetch(`${Base_Url}/videos?part=snippet&id=${videoId}&fields=items(id%2Csnippet)&key=${API_KEY}`);
    const data = await response.json();
    // console.log(data);
    getVideoInfo(data.items)
    fetchSuggetionVideos(data.items[0].snippet.tags[0] + '',10)
    // console.log(data.items[0].snippet.tags[0]);
  }
  getVideoTitle(gettingVideoId + '')

  // video Info through VideoID 
  /*
    {
    "items": [
      {
        "id": "FCAxZbCb6EY",
        "snippet": {
          "publishedAt": "2023-10-30T07:20:36Z",
          "channelId": "UC4zWG9LccdWGUlF77LZ8toA",
          "title": "Commentary like never before | Takeshi’s Castle | @BBKiVines | Prime Video India",
          "description": "Just Titu mama flexing his commentary skills through the eras\nTakeshi's Castle ft. #BhuvanOnPrime, Nov 2\n\nTrailer out now - https://youtu.be/hNL_64MjELQ\n\nAbout:\nBhuvan Bam lends his distinctive voice and unique humor as commentator in the brand-new season of Takeshi's Castle. Classic games are making a comeback with new and terrifying obstacles emerging one after another. The lord of the castle, Beat Takeshi, entrusts Bananaman to protect it. Subaru Kimura is the attack force’s new leader. The elite team gathers to bring down the revived Takeshi’s Castle.\n\nAbout Prime Video: Prime Video is a premium streaming service that offers Prime members a collection of award-winning Amazon Original series, thousands of movies & TV shows—all with the ease of finding what they love to watch in one place. Prime Video is just one of the many benefits of a Prime membership, available for just ₹1499/ year. \nIncluded with Prime Video: Thousands of acclaimed TV shows & movies across languages & geographies, including Indian films such as Shershaah, Soorarai Pottru, Sardar Udham, Gehraiyaan, Jai Bhim, Jalsa, Shakuntala Devi, Sherni, Narappa, Sarpatta Parambarai, Kuruthi, Joji, Malik, and HOME, along with Indian-produced Amazon Original series like Farzi, Jubilee, Dahaad, The Family Man, Mirzapur, Made in Heaven, Four More Shots Please!, Mumbai Diaries 26/11, Suzhal – The Vortex, Modern Love, Paatal Lok, Bandish Bandits, Guilty Minds, Cinema Marte Dum Tak, and Amazon Original movies like Maja Ma & Ammu. Also included are popular global Amazon Originals like Citadel, The Lord of The Rings: The Rings of Power, Reacher, Tom Clancy's Jack Ryan, The Boys, Hunters, Fleabag, The Marvelous Mrs. Maisel, & many more, available for unlimited streaming as part of a Prime membership. Prime Video includes content across Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Malayalam, Punjabi, & Bengali. \nPrime Video Mobile Edition: Consumers can also enjoy Prime Video’s exclusive content library with Prime Video Mobile Edition at ₹599 per year. This single-user, mobile-only annual video plan offers everyone access to high-quality entertainment exclusively on their mobile devices. Users can sign-up for this plan via the Prime Video app (on Android) or website. \nInstant Access: Prime Members can watch anywhere, anytime on the Prime Video app for smart TVs, mobile devices, Fire TV, Fire TV stick, Fire tablets, Apple TV, & multiple gaming devices. Prime Video is also available to consumers through Airtel and Vodafone pre-paid & post-paid subscription plans. In the Prime Video app, Prime members can download episodes on their mobile devices & tablets & watch anywhere offline at no additional cost.\nEnhanced experiences: Make the most of every viewing with 4K Ultra HD- & High Dynamic Range (HDR)-compatible content. Go behind the scenes of your favourite movies & TV shows with exclusive X-Ray access, powered by IMDb. Save it for later with select mobile downloads for offline viewing. \nVideo Entertainment Marketplace: In addition to a Prime Video subscription, customers can also purchase add-on subscriptions to other streaming services, as well as, get rental access to movies on Prime Video. Prime Video Channels: Prime Video Channels offers friction-free & convenient access to a wide range of premium content from multiple video streaming services all available at a single destination – Prime Video website & apps. Prime Members can buy add-on subscriptions & enjoy a hassle-free entertainment experience, simplified discovery, frictionless payments, & more. Rent: Consumers can enjoy even more movies from new releases to classic favourites, available to rent – no Prime membership required. View titles available by visiting primevideo.com/store. The rental destination can be accessed via the STORE tab on primevideo.com & the Prime Video app on Android smart phones, smart-TVs, connected STBs, & Fire TV stick.\n\n#permanentroommates #sumeetvyas #nidhisingh #primevideoindia #comedyscene",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FCAxZbCb6EY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FCAxZbCb6EY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FCAxZbCb6EY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FCAxZbCb6EY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FCAxZbCb6EY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Prime Video India",
          "tags": [
            "takeshi's castle",
            "takeshis castle",
            "takeshi's castle in hindi",
            "takeshi's",
            "castle",
            "takeshi’s castle",
            "bhuvan bam takeshi's castle",
            "bhuvan bam takeshi's castle reebot",
            "bhuvan bam series takeshi's castle",
            "takeshi's castle bhuvan bam release date",
            "takeshi’s castle bhuvan bam",
            "bhuvan bam in takesh's castle",
            "takeshi's castle bhuvan bam teaser trailer",
            "takeshi's castle bhuvam bam series trailer",
            "bhuvan bam takeshs castle",
            "new takeshi's castle",
            "takeshi kitano",
            "takeshi's castle funny",
            "latest"
          ],
          "categoryId": "24",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Commentary like never before | Takeshi’s Castle | @BBKiVines | Prime Video India",
            "description": "Just Titu mama flexing his commentary skills through the eras\nTakeshi's Castle ft. #BhuvanOnPrime, Nov 2\n\nTrailer out now - https://youtu.be/hNL_64MjELQ\n\nAbout:\nBhuvan Bam lends his distinctive voice and unique humor as commentator in the brand-new season of Takeshi's Castle. Classic games are making a comeback with new and terrifying obstacles emerging one after another. The lord of the castle, Beat Takeshi, entrusts Bananaman to protect it. Subaru Kimura is the attack force’s new leader. The elite team gathers to bring down the revived Takeshi’s Castle.\n\nAbout Prime Video: Prime Video is a premium streaming service that offers Prime members a collection of award-winning Amazon Original series, thousands of movies & TV shows—all with the ease of finding what they love to watch in one place. Prime Video is just one of the many benefits of a Prime membership, available for just ₹1499/ year. \nIncluded with Prime Video: Thousands of acclaimed TV shows & movies across languages & geographies, including Indian films such as Shershaah, Soorarai Pottru, Sardar Udham, Gehraiyaan, Jai Bhim, Jalsa, Shakuntala Devi, Sherni, Narappa, Sarpatta Parambarai, Kuruthi, Joji, Malik, and HOME, along with Indian-produced Amazon Original series like Farzi, Jubilee, Dahaad, The Family Man, Mirzapur, Made in Heaven, Four More Shots Please!, Mumbai Diaries 26/11, Suzhal – The Vortex, Modern Love, Paatal Lok, Bandish Bandits, Guilty Minds, Cinema Marte Dum Tak, and Amazon Original movies like Maja Ma & Ammu. Also included are popular global Amazon Originals like Citadel, The Lord of The Rings: The Rings of Power, Reacher, Tom Clancy's Jack Ryan, The Boys, Hunters, Fleabag, The Marvelous Mrs. Maisel, & many more, available for unlimited streaming as part of a Prime membership. Prime Video includes content across Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Malayalam, Punjabi, & Bengali. \nPrime Video Mobile Edition: Consumers can also enjoy Prime Video’s exclusive content library with Prime Video Mobile Edition at ₹599 per year. This single-user, mobile-only annual video plan offers everyone access to high-quality entertainment exclusively on their mobile devices. Users can sign-up for this plan via the Prime Video app (on Android) or website. \nInstant Access: Prime Members can watch anywhere, anytime on the Prime Video app for smart TVs, mobile devices, Fire TV, Fire TV stick, Fire tablets, Apple TV, & multiple gaming devices. Prime Video is also available to consumers through Airtel and Vodafone pre-paid & post-paid subscription plans. In the Prime Video app, Prime members can download episodes on their mobile devices & tablets & watch anywhere offline at no additional cost.\nEnhanced experiences: Make the most of every viewing with 4K Ultra HD- & High Dynamic Range (HDR)-compatible content. Go behind the scenes of your favourite movies & TV shows with exclusive X-Ray access, powered by IMDb. Save it for later with select mobile downloads for offline viewing. \nVideo Entertainment Marketplace: In addition to a Prime Video subscription, customers can also purchase add-on subscriptions to other streaming services, as well as, get rental access to movies on Prime Video. Prime Video Channels: Prime Video Channels offers friction-free & convenient access to a wide range of premium content from multiple video streaming services all available at a single destination – Prime Video website & apps. Prime Members can buy add-on subscriptions & enjoy a hassle-free entertainment experience, simplified discovery, frictionless payments, & more. Rent: Consumers can enjoy even more movies from new releases to classic favourites, available to rent – no Prime membership required. View titles available by visiting primevideo.com/store. The rental destination can be accessed via the STORE tab on primevideo.com & the Prime Video app on Android smart phones, smart-TVs, connected STBs, & Fire TV stick.\n\n#permanentroommates #sumeetvyas #nidhisingh #primevideoindia #comedyscene"
          },
          "defaultAudioLanguage": "en"
        }
      }
    ]
  }
  */


  // For View Count
  async function getVideoIDStats(videoId){
    const response = await fetch(`${Base_Url}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
    const data = await response.json();
    // console.log(data.items[0].statistics.viewCount);
    let views =  data.items[0].statistics.viewCount;
    return views;
  }


  // Video Title, like, dislike, share, save
  async function getVideoInfo(element){

    // console.log(element[0].snippet.publishedAt);
    const videoInfo = document.getElementById('videoInfo');
    
    const views = await getVideoIDStats(gettingVideoId + '');

    let videoInfoOuterShell = document.createElement('div')
    videoInfoOuterShell.id = 'videoInfoOuterShell';
    videoInfoOuterShell.innerHTML = `
            <div class="titleOfVideo">
            <h2>${element[0].snippet.title}</h2>
            </div>
    
            <div class="restInfoOfVideo">
            <div class="viewCountNDate">
                <p><b>${views} views . ${publishDateFun(element[0].snippet.publishedAt)}</b></p>
            </div>
    
            <div class="likeShare">
                <button id="likeBtn"><i class="fa-regular fa-thumbs-up fa-xl" style="color: #c6c7c7;"></i></button>
                <p id="likeCount">17.3 K</p>
    
                <button id="dislikeBtn"><i class="fa-regular fa-thumbs-down fa-xl" style="color: #c6c7c7;"></i></button>
                <p id="dislikeCount">175</p>
    
                <button id="ShareBtn"><i class="fa-solid fa-share fa-xl" style="color: #c6c7c7;"></i></button>
                <p id="dislikeCount">SHARE</p>
    
                <button id="SaveBtn"><i class="fa-solid fa-square-plus fa-xl" style="color: #c6c7c7;"></i></button>
                <p id="dislikeCount">SAVE</p>
    
            </div>
            </div>
    `
    videoInfo.appendChild(videoInfoOuterShell);
  }


  // Video Title, like, dislike, share, save
  function publishDateFun(publishedAt){

    let publishDate = new Date(publishedAt);
    let month = publishDate.getMonth();
    let date = publishDate.getDate();
    let year = publishDate.getFullYear();

    return `${date} ${month}, ${year}`
  }



  const commentDiv = document.getElementById('commentDiv')

  // For getiing Comments
  async function getComments(videoId){
    const response = await fetch(`${Base_Url}/commentThreads?key=${API_KEY}&videoId=${videoId}&maxResults=25&part=snippet`);
    const data = await response.json();
    // console.log(data);
    commentList(data.items)
  }

  getComments(gettingVideoId + '');

  
//  For loading Comments
  function commentList(arrayOfComments){
    // console.log(arrayOfComments);

    arrayOfComments.forEach(element => {
      // console.log(element.id.videoId);
  
      const comments = document.createElement('div')
      comments.id = 'comments';
      comments.innerHTML = `
            <div id="commentLogo"><img src="${element.snippet.topLevelComment.snippet.authorProfileImageUrl
            }" alt="commetPerson"></div>
    
            <div id="commetPerson">
                <div id="commetName"><b>${element.snippet.topLevelComment.snippet.authorDisplayName}</b> ${timeCount(element.snippet.topLevelComment.snippet.publishedAt
                  )}</div>
                <div id="orignalCommet">${element.snippet.topLevelComment.snippet.textOriginal}</div>
                <div class="likeNReply">
                    <i class="fa-regular fa-thumbs-up" style="color: #c6c7c7;"></i>
                    <i class="fa-regular fa-thumbs-down" style="color: #c6c7c7;"></i>
                    <p>REPLY</p>
                </div>
            </div>
      `
      commentDiv.appendChild(comments)
    });
  }


  // suggestion
  const RightSide = document.getElementById('RightSide')

  async function fetchSuggetionVideos(searchQuery, maxResults) {
    const response = await fetch(
      `${Base_Url}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
    );
    const data = await response.json();
    // console.log(data.items);
    suggetionList(data.items)
  }

  function suggetionList(arrayOfVideos){
    // console.log(arrayOfVideos);
    arrayOfVideos.forEach(element => {
      // console.log(element.id.videoId);
  
      const recomandedVideos = document.createElement('div')
      recomandedVideos.className = 'recomandedVideos'
    
      recomandedVideos.innerHTML = `
          <div><img src="${element.snippet.thumbnails.medium.url}" width="168px" height="94px" alt=""></div>
          <div class="videoDetails">
              <h4>${element.snippet.title}</h4>
              <div class="authorsName"> 
                  <p>${element.snippet.channelTitle}</p>
                  <p>1M views . ${viewCount(element.snippet.publishTime)}</p>
              </div>
    
          </div>
      `
      RightSide.appendChild(recomandedVideos)
    });
  }

