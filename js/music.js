const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "归去来兮（Cover：花粥）",
        artist: '花花一点都不甜呐',
        url: 'http://music.163.com/song/media/outer/url?id=1371741980.mp3',
        cover: 'https://p1.music.126.net/L3KSW6BoZBIBHtQWApttdg==/109951164768178218.jpg?param=50y50',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/11.jpg',
      }
    ]
});