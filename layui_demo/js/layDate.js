laydate.render({
   elem:'#test1'
    ,mark:{   //自定义重要日期
        '0-10-14': '生日'
        ,'0-12-31': '跨年' //每年的日期
        ,'0-0-10': '工资' //每月某天
        ,'0-0-15': '月中'
        ,'2017-8-15': '' //如果为空字符，则默认显示数字+徽章
        ,'2099-10-14': '呵呵'
    }
    ,done:function (value,date) {
        if(date.year === 2017 && date.month === 8 && date.date === 15){ //点击2017年8月15日，弹出提示语
            layer.msg('这一天是：中国人民抗日战争胜利72周年');
        }
    }
});
laydate.render({
    elem:'#test1-1'
    ,lang:'en'
});
//年选择器
laydate.render({
    elem: '#test2'
    ,type: 'year'
});
laydate.render({
    elem:'#test3'
    ,type:'year'
    ,range:true
});
laydate.render({
    elem:'#test4'
    ,format:'yyyy年MM月dd日'
});
laydate.render({
    elem:'#test5'
    ,type:'datetime'
    ,range:'to'
    ,format: 'yyyy年M月d日H时m分s秒'
})
