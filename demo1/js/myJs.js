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

$(function() {
    $("[data-toggle='popover']").popover({
        html : true,
        //title: title(),
        delay:{show:50, hide:50},
    });
    $('#person_info').attr('data-content',content());
    
    $('#per_info').attr('data-content',content1());
    $('#example').attr('data-content',content1());
   
});
//模拟动态加载标题(真实情况可能会跟后台进行ajax交互)
function title() {
    var data = $("<h3 class='panel-title'>公周</h3>"+
                "<p>纯原创微信号：公眼观察。前法官 / 专业法律咨询</p>");
    return data;
}

//模拟动态加载内容(真实情况可能会跟后台进行ajax交互)
function content() {
    var data2 = "<h3 class='panel-title'>公周</h3>"+
    "<p>纯原创微信号：公眼观察。前法官 / 专业法律咨询</p>"+
    "    <div class='panel' style='width:220px;'>"+
   
    "     <div class='col-md-12' >辞职创业</div>"+
    "   <div class='col-md-4' align='center'>回答88</div>"+
    "   <div class='col-md-4' align='center'>文章25</div>"+
    "  <div class='col-md-4' align='center'>关注者41194</div>"+
    "  <div class='col-md-6' align='center'>"+
    "     <button class='btn btn-primary' style='width:100%;'>关注他</button></div>"+
    " <div class='col-md-6' align='center'>"+
    "     <button class='btn btn-primary' style='width:100%;'>发私信</button></div>"+
    "</div>";
    return data2;
}
function content1(){
    var data = "    <div class='panel' style='width:120px;'>"+ 
    "  <div class='list-group' style=''>"+
    "<a href='#' class='list-group-item'><span class='glyphicon glyphicon-user'></span>我的主页</a></a>"+
    "<a href='#' class='list-group-item'><span class='glyphicon glyphicon-wrench'></span>设置</a></a>"+
    "<a href='#' class='list-group-item'><span class='glyphicon glyphicon-off'></span>退出</a></a>"+
    "</div></div>";
    return data;
};