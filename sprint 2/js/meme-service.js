var memes = [{
    name: '1',
    adress: '../img/1.jpg',
    id:1
},{
    name: '2',
    adress: '../img/2.jpg',
    id:2
},{
    name: '3',
    adress: '../img/3.jpg',
    id:3
},{
    name: '4',
    adress: '../img/4.jpg',
    id:4
},{
    name: '5',
    adress: '../img/5.jpg',
    id:5
},{
    name: '6',
    adress: '../img/6.jpg',
    id:6
},{
    name: '7',
    adress: '../img/7.jpg',
    id:7
},{
    name: '8',
    adress: '../img/8.jpg',
    id:8
},{
    name: '9',
    adress: '../img/9.jpg',
    id:9
},{
    name: '10',
    adress: '../img/10.jpg',
    id:10
},{
    name: '11',
    adress: '../img/11.jpg',
    id:11
},{
    name: '12',
    adress: '../img/12.jpg',
    id:12
},{
    name: '13',
    adress: '../img/13.jpg',
    id:13
},{
    name: '14',
    adress: '../img/14.jpg',
    id:14
},{
    name: '15',
    adress: '../img/15.jpg',
    id:15
},{
    name: '16',
    adress: '../img/16.jpg',
    id:16
},{
    name: '17',
    adress: '../img/17.jpg',
    id:17
},{
    name: '18',
    adress: '../img/18.jpg',
    id:18
},{
    name: '19',
    adress: '../img/19.jpg',
    id:19
},{
    name: '20',
    adress: '../img/20.jpg',
    id:20
},{
    name: '21',
    adress: '../img/21.jpg',
    id:21
},{
    name: '22',
    adress: '../img/22.jpg',
    id:22
},{
    name: '23',
    adress: '../img/23.jpg',
    id:23
},{
    name: '24',
    adress: '../img/24.jpg',
    id:24
},
]


function getMemeById(id) {
    return memes.find(meme=>{     
       return meme.id == id;
    })
}