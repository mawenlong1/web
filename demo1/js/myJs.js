bindListener();
$(function (){ 
	$("#example").popover();
});
$('#add').click(function() {
    alert('ss')
    $("#table1 tbody").append(" <tr >\n" +
        "        <td>1</td>\n" +
        "        <td>123</td>\n" +
        "        <td>123</td>\n" +
        "        <td><button class=\"del btn btn-primary\">删除</button> </td>\n" +
        "    </tr>");
    bindListener();


});

$('#add2').click(function() {
    for (i = 0; i < 5; i++) {
        $("#table1 tbody").append(" <tr >\n" +
            "        <td>1</td>\n" +
            "        <td>123</td>\n" +
            "        <td>123</td>\n" +
            "        <td><button class=\"del btn btn-primary\">删除</button> </td>\n" +
            "    </tr>");
    }
    bindListener();
});

function bindListener() {
    //使用unbind防止重复绑定
    $('.del').unbind().click(function() {
        $(this).parent().parent().remove();
    })
};


$('#myAffix').affix({
            offset: {
                top: 100,
            }
});
$(function() {
    $("[data-toggle='popover']").popover({
        html : true,
        title: title(),
        delay:{show:500, hide:1000},
        content: function() {
            return content();
        }
    });
});
//模拟动态加载标题(真实情况可能会跟后台进行ajax交互)
function title() {
    return '田喜碧Hebe(节制的人生)';
}

//模拟动态加载内容(真实情况可能会跟后台进行ajax交互)
function content() {
    var data = $("<form><ul><li><span aria-hidden='true' class='icon_globe'></span>&nbsp;粉丝数:7389223</li>" +
        "<li><span aria-hidden='true' class='icon_piechart'></span>&nbsp;<关注:265</li>" +
        "<li><span aria-hidden='true' class='icon_search_alt'></span>&nbsp;微博:645</li>" +
        "<li><span aria-hidden='true' class='icon_pens_alt'></span>&nbsp;所在地:台湾</li>" +
        "<input id='btn' type='button' value='关注' onclick='test()'/></form>");

    return data;
}
//模拟悬浮框里面的按钮点击操作
function test() {
    alert('关注成功');
}