


// var fsm = new StateMachine({  //创建一个状态机实例
    
//     init: '1',  //定义初始状态
//     transitions:[          //通过对象描述状态总和
//         { name: 'aa',     from: '1',  to: '2' },   //状态机通过name转换
//         { name: 'bb',   from: '2', to: '3'  },   //from：当前行为从哪个状态来
//         { name: 'cc',     from: '3', to: '4'    },   //to 执行完过度到这个状态
//         { name: 'dd',    from: '4',    to: '1' }
//     ],

//     //实现第一个效果，不按顺序点击时，会报错提示。
//     methods: { 
                                        
//         /* 报错处理机制，当不按顺序转换，状态机会报错并停止运行程序； */
//         onInvalidTransition: function (transition,from,to) {
//             switch (from) {
//                 case `1` :
//                     alert(`请按顺序进行游戏，杀手先杀人`);
//                     break;
//                 case '2':
//                     alert("请按游戏顺序进行，亡灵发言！");
//                     break;
//                 case '3':
//                     alert("请按游戏顺序进行，玩家发言！");
//                     break;
//                 case '4':
//                     alert("请按游戏顺序进行，玩家投票！");
//                     break;
//             }
//         },
//     },
// });

// 通过有限状态机实现两个效果：  1.点击顺序从上到下    2.处于某个状态时，点击不属于该状态的按钮会报错
//    fsm.aa();   过度状态


















//通过有限状态机实现两个效果    1.点击顺序从上到下   2.处于某个状态时，点击其他按钮会报错
 var fsm = new StateMachine ({   //创建有限状态机

    init: '1',  //定义初始状态为 1 

    transitions:[  //通过对象描述状态总和
        {name:'aa', from:'1', to:'2'},   //状态机通过 name转换
        {name:'bb', from:'2', to:'3'},    //from  表示当前行为从哪个状态来的
        {name:'cc', from:'3', to:'4'},    // to 表示过度到这个状态
        {name:'dd', from:'4', to:'1'},
    ],

    //实现第一个效果。  不按顺序点击时，会报错提示
    methods:{

        //报错提示
        onInvalidTransition: function (transition,from,to){
            switch(from){
                case '1':
                    alert ('请按顺序点击，目前是状态1');
                    break;
                case '2':
                    alert ('请按顺序点击，目前是状态2');
                    break; 
                case '3':
                     alert ('请按顺序点击，目前是状态3');
                    break;
                case '4':
                    alert ('请按顺序点击，目前是状态4');
                    break;       
            }
        }
    }

 })





//添加点击事件
//杀人点击按钮
$(".process-box").eq(0).on("click", function () {    
    //通过 if 事件判断是否可以点击
    if( fsm.state === '1') {
        alert('天黑了，杀手开始杀人');
    }

    //实现第二个效果，点击顺序从上往下

    fsm.aa()   //点击执行弹窗后实现状态转换   
    
});

//亡者点击按钮
$(".process-box").eq(1).on("click", function () {
    if( fsm.state === '2') {
         alert('亡者请发言'); 
    }

    fsm.bb()  
});

//全体发言按钮
$(".process-box").eq(2).on("click", function () {
    if( fsm.state === '3') {
        alert('玩家依次发言');  

    }

    fsm.cc()  
});

//投票按钮
$(".process-box").eq(3).on("click", function () {
    if( fsm.state === '4') {
       alert('发言结束，请投票'); 
    }

    fsm.dd()  
    
});