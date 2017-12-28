var active = {
    setTop:function () {
        var that = this;
        layer.open({
            type:2   //窗体的类型
            ,title:'当你选择该窗体时，即会在最顶端'//标题
            ,area:['390px','260px']    //窗体的宽度的高度
            ,shade:0  //0表示不遮罩，shade: [0.8, '#393D49']自己定义别的颜色
            ,maxmin:true   //最大化最小化
            ,offset:[    //窗口的坐标
                Math.random()*($(window).height()-300)
                ,Math.random()*($(window).width()-390)
            ]
            ,content:'http://layer.layui.com/test/settop.html' //窗体的内容
            ,btn:['继续弹出','全部关闭']   //自定义按钮
            ,yes:function () {
                $(that).click();
            }
            ,btn2:function () {
                layer.closeAll();
            }
            ,zIndex:layer.zIndex   //层叠顺序
            ,success:function (layero) { //层弹出后的成功回调方法
                layer.setTop(layero);
            }
            });
    }
    ,confirmTrans:function () {
        //配置透明询问框
        layer.msg('大部分参数都是可以公用的<br>合理搭配，展示不一样的风格',{
            time:5000   //5s后自动关闭
            ,btn:['明白了', '知道了', '哦']
        });
    }
    ,notice:function () {
        //示范一个公告层
        layer.open({
            type:1
            ,title:false
            ,closeBtn:false //不显示关闭按钮
            ,area:'300px'
            ,shade:0.8   //透明度
            ,id:'LAY_layuipro'//设置id防止重复弹出
            ,btn:['火速围观','残忍拒绝']
            ,btnAlign:'c' //按钮排列方式l左对齐，c居中，r右对齐（默认）
            ,moveType:1 //拖拽模式
            ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">你知道吗？亲！<br>layer ≠ layui<br><br>layer只是作为Layui的一个弹层模块，由于其用户基数较大，所以常常会有人以为layui是layerui<br><br>layer虽然已被 Layui 收编为内置的弹层模块，但仍然会作为一个独立组件全力维护、升级。<br><br>我们此后的征途是星辰大海 ^_^</div>'
            ,success:function (layero) {
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href:'http://www.layui.com/'
                    ,target:'_blank'
                })
            }
        });
    }
    ,offset:function (othis) {
        var type = othis.data('type')
            ,text = othis.text();
        layer.open({
            type:1
            ,offset:type
            ,id: 'layerDemo'+type //防止重复弹出
            ,content: '<div style="padding: 20px 100px;">'+ text +'</div>'
            ,btn: '关闭全部'
            ,btnAlign: 'c' //按钮居中
            ,shade: 0 //不显示遮罩
            ,yes: function(){
                layer.closeAll();
            }
        });
    }
};
$('#layerDemo .layui-btn').on('click',function () {
    var othis = $(this),method = othis.data('method');
    active[method]?active[method].call(this,othis):'';
});