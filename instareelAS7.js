var allReels = document.querySelector('.all-reels');

    const reels = [
      {
        ismuted:true,
        username: "codewithayush",
        likeCount: 148,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "https://www.pexels.com/download/video/6394054/",
        userprofile:
          "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        username: "designbysan",
        likeCount: 98,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption:
          "UI tip: Padding is personality. Give your elements some space.",
        video: "video1.mp4"
,
        userprofile:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
      },
      {
         ismuted:true,
        username: "frontend.ninja",
        likeCount: 221,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption:
          "When flexbox finally aligns the way you wanted 😭🔥",
        video: "https://www.pexels.com/download/video/6394054/",
        userprofile:
          "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
      },
      {
         ismuted:true,
        username: "travelwithriya",
        likeCount: 542,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption:
          "My solo Bali trip changed everything 🌴",
        video: "https://www.pexels.com/download/video/6394054/",
        userprofile:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
      },
      {
         ismuted:true,
        username: "daily.dev.quotes",
        likeCount: 312,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption:
          "Code. Sleep. Repeat. That’s the cycle.",
        video: "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
      },
      {
         ismuted:true,
        username: "fitnessbymegha",
        likeCount: 274,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption:
          "No gym? No problem. Do this 12-min workout at home.",
        video: "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
      },
      {
         ismuted:true,
        username: "streetfoodlover",
        likeCount: 680,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption:
          "You won’t believe this burger exists 🤯🍔",
        video: "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a"
      },
      {
         ismuted:true,
        username: "musicbytara",
        likeCount: 145,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption:
          "Late night vibes // piano version 🎹✨",
        video: "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
      },
      {
         ismuted:true,
        username: "techreviews101",
        likeCount: 231,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption:
          "The most underrated smartphone of 2024 📱",
        video: "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
      },
      {
         ismuted:true,
        username: "learnanimations",
        likeCount: 187,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption:
          "GSAP can literally change your career. Start today.",
        video:
          "https://cdn-sc-g.sharechat.com/bd5223f_s1w/contents/sc_7122907886/compressed/9rpw0QQErwU5RVAmKGQpukvYB3W5A2hVQop1.mp4?tenant=sc&referrer=feed-service-fallback&f=hVQop1.mp4",
        userprofile:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ];

     
function AddData(){
var sum = "";
  reels.forEach(function (elem,idx) {
      sum =
        sum +
        `
        <div class="reel">
          <video autoplay loop ${elem.ismuted?'muted':""} src="${elem.video}"></video>
 <div class="muted" id=${idx}>${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}</div>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userprofile}" alt="">
              <h4>${elem.username}</h4>
              <button id='${idx}' class='follow'>${elem.isFollowed?'unfollow':'follow'}</button>
            </div>

            <h3>${elem.caption}</h3>
          </div>

          <div class="right">
            <div id='${idx}'  class="like">
              <h4 class="like-icon icon">
                ${
                  elem.isLiked
                    ? '<i class="love ri-heart-3-fill"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }
              </h4>
              <h6>${elem.likeCount}</h6>
            </div>

            <div class="comment">
              <h4 class="comment-icon icon">
                <i class="ri-chat-3-line"></i>
              </h4>
              <h6>${elem.commentCount}</h6>
            </div>

            <div class="share">
              <h4 class="share-icon icon">
                <i class="ri-share-forward-line"></i>
              </h4>
              <h6>${elem.shareCount}</h6>
            </div>

            <div class="menu">
              <h4 class="menu-icon icon">
                <i class="ri-more-2-fill"></i>
              </h4>
            </div>
          </div>
        </div>
      `;
    });

    allReels.innerHTML = sum;

}
AddData();



allReels.addEventListener('click',function(x){
     if(x.target.className=='like'){
      if(!reels[x.target.id].isLiked){
         reels[x.target.id].likeCount++;
      reels[x.target.id].isLiked=true;
      }
      else{
         reels[x.target.id].likeCount--;
      reels[x.target.id].isLiked=false;
      }
      AddData();
     }




     if(x.target.className=='follow'){
      if(!reels[x.target.id].isFollowed){
        reels[x.target.id].isFollowed=true;
      }
      else{
         reels[x.target.id].isFollowed=false;
      }
      AddData();
     }
      

      if(x.target.className=='muted'){
        if(!reels[x.target.id].ismuted){
          reels[x.target.id].ismuted=true;
        }
        else{
           reels[x.target.id].ismuted=false;
        }
        AddData();
      }
})
