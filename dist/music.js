const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "理想三旬",
        artist: '陈鸿宇',
        url: 'http://music.163.com/song/media/outer/url?id=31445772.mp3',
        cover: 'http://p1.music.126.net/nLD7jeWJ36sdv4mo2FHm2Q==/109951163635239467.jpg?param=180y180',
      },
      {
        name: '空山新雨后',
        artist: '冷十三',
        url: 'http://music.163.com/song/media/outer/url?id=1397565121.mp3',
        cover: 'http://p1.music.126.net/OdLeX1nHq43jGjlGj1CJMQ==/109951163935081871.jpg?param=180y180',
      },
	  {
        name: 'Inspire',
        artist: 'Capo Productions',
        url: 'http://music.163.com/song/media/outer/url?id=16846091.mp3',
        cover: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1329137498,559289239&fm=179&app=42&f=JPEG?w=150&h=150',
      },
	  {
        name: 'A Little Story',
        artist: 'Valentin',
        url: 'http://music.163.com/song/media/outer/url?id=857896.mp3',
        cover: 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=4191772712,982480553&fm=85&s=1C2AE615D5506E6D6CB38BED0300C02F',
      },
	  {
        name: '关山酒',
        artist: '略略略',
        url: 'http://music.163.com/song/media/outer/url?id=1391673772.mp3',
        cover: 'http://p1.music.126.net/5if5Hina6_H078UGfPIkKQ==/109951164377676545.jpg?param=180y180',
      }
    ]
});