//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
      'http://wap.tuoxingwang.com/upload/201702/ce2178fa-4575-4a61-b7d5-bbc39b193d02.jpg',
      'http://wap.tuoxingwang.com/upload/201612/e1aed908-86a6-4886-b1bd-88ec2fca3d7b.jpg',
      'http://wap.tuoxingwang.com/upload/201703/6ee2d504-5484-4cf2-b65c-c58bfd250488.jpg',
      'http://wap.tuoxingwang.com/upload/201702/6ea1c282-4da8-4245-a1c0-65482af879d6.jpg'
    ],
    nav:{
      top: ['买门票', '订酒店', '一日游', '包租车'],
      bottom: ['自由行', '寻美食', '土特产', '生活惠']
    },
    destination:[
      {
        img:'http://wap.tuoxingwang.com/upload/201511/96709e07-865c-4709-8cb0-bca388473679.jpg',
        title: '敦煌',
        desc: '感受历史的艺术',
        id:1
      },{
        img:'http://wap.tuoxingwang.com/upload/201604/6f560c12-65a8-4094-94ca-d25795f4d517.jpg',
        title: '平凉',
        desc: '避暑胜地 养生平凉',
        id:2
      },{
        img:'http://wap.tuoxingwang.com/upload/201511/2e5b74f6-0e3d-45d5-bd75-0d017b97bf48.jpg',
        title: '兰州',
        desc: '体验西部文化',
        id:3
      },{
        img:'http://wap.tuoxingwang.com/upload/201511/bcc55dc8-655e-4aea-9e0d-2ef462e3f152.jpg',
        title: '乌鲁木齐',
        desc: '尝异域美食',
        id:4
      },{
        img:'http://wap.tuoxingwang.com/upload/201511/48286deb-8f62-4e71-9af2-e29370760ad0.jpg',
        title: '银川',
        desc: '塞上明珠',
        id:5
      },{
        img:'http://wap.tuoxingwang.com/upload/201511/0fd0d9bf-8efa-4675-a266-bf03b398144d.jpg',
        title: '张掖',
        desc: '张国臂掖 以通西域',
        id:6
      },
    ],
    sales:[
      {
        id:1,
        title:'敦煌鸣沙山月牙泉景区',
        desc:'灵山秀水，千年守候',
        cnt:'9999+',
        price:'118',
        src:'http://wap.tuoxingwang.com/upload/201511/5b6cb25b-e074-4516-95e2-a8ec7e194f7a.jpg'
      },{
        id:2,
        title:'玉门关遗址',
        desc:'小方盘城，长城西端重要关口',
        cnt:'252',
        price:'38',
        src:'http://wap.tuoxingwang.com/upload/201511/fa346154-70bb-44c1-8f03-ca5ed884bd21.jpg'
      },{
        id:3,
        title:'雅丹地质公园',
        desc:'罕见的天然雕塑博物馆',
        cnt:'198',
        price:'118',
        src:'http://wap.tuoxingwang.com/upload/201511/ad094e7c-ca9d-4854-b47b-77cab5c6f548.jpg'
      },{
        id:4,
        title:'阳关',
        desc:'劝君更尽一杯酒，西出阳关无故人',
        cnt:'87',
        price:'40',
        src:'http://wap.tuoxingwang.com/upload/201609/a21df027-2ab5-4edf-bccf-d942fcdf129f.jpg'
      },
    ]
  },
  onLoad() {

  },
  navTo(e) {
    const index = e.currentTarget.dataset.id;
    switch(index) {
      case 0:
       wx.navigateTo({
         url: '../ticket/ticket'
       });
       break;
    }
  }
})
