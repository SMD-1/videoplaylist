let videos = document.querySelectorAll(".videos .vdo");
let videoSelected = document.querySelector(".videoSelected video");
let title = document.querySelector(".videoSelected .videoTitle");

videos.forEach((video) => {
  video.onclick = () => {
    videos.forEach((vid) => {
      vid.classList.remove("active");
    });
    video.classList.add("active");
    // console.log("hello");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      videoSelected.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});
