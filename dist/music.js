const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "青春纪念册",
        artist: '可米小子',
        url: 'http://music.163.com/song/media/outer/url?id=1371741980.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/57.jpg',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://music.163.com/song/media/outer/url?id=1397565121.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/11.jpg',
      }
    ]
});