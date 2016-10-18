$(window).on("load",function() {
  var videoStorage = [
    './media_movs/m4810',
    './media_movs/m4810',
    './media_movs/m4810',
    './media_movs/m4810'
  ],
  video = document.querySelector('video'),
  activeVideoUrl = videoStorage[Math.round(Math.random()*(videoStorage.length -1))];

  if(video.canPlayType('video/mp4')) {
    video.setAttribute('src', activeVideoUrl + '.mp4');
  }
  console.log(activeVideoUrl);
});
