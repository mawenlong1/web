


bindListener();

$('#add').click(function () {
    $("#table1 tbody").append(" <tr >\n" +
        "        <td>1</td>\n" +
        "        <td>123</td>\n" +
        "        <td>123</td>\n" +
        "        <td><button class=\"del btn btn-primary\">删除</button> </td>\n" +
        "    </tr>");
    bindListener();


});

$('#add2').click(function () {
    for(i=0;i<5;i++){
        $("#table1 tbody").append(" <tr >\n" +
            "        <td>1</td>\n" +
            "        <td>123</td>\n" +
            "        <td>123</td>\n" +
            "        <td><button class=\"del btn btn-primary\">删除</button> </td>\n" +
            "    </tr>");
    }
    bindListener();
});
function bindListener(){
    //使用unbind防止重复绑定
    $('.del').unbind().click(function () {
        $(this).parent().parent().remove();
    })
}


$('#myAffix').affix({
    offset: {
        top: 10,
        bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
        }
    }
})
