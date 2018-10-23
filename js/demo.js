

const ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    mutex: true,
    theme: '#e9e9e9',
    listFolded: false,
    listMaxHeight: 80,
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
        cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
    }, {
        name: 'トリカゴ',
        artist: 'XX:me',
        url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
        cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
    }, {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
        cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
    }]
});
const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap5.list.audios[index].theme) {
        colorThief.getColorAsync(ap5.list.audios[index].cover, function (color) {
            ap5.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap5.list.index);
ap5.on('listswitch', (data) => {
    setTheme(data.index);
});



const ap8 = new APlayer({
    element: document.getElementById('player8'),
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    lrcType: 3,
    fixed: true,
});
$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
        ap8.list.add(JSON.parse(list));
    }
});