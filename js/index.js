
var jsonData = {
    orderId: 100012345,
    orderPrice: 1000.00
}

// 点击添加订单按钮
function addOrder() {
    // 获取html模板
    var template = $('#template').html();
    // 编译模板
    var compiledTemplate = Template7.compile(template);
    // 给模板设置数据
    var html = compiledTemplate(jsonData);
    // 将模板拼接到指定处
    $(".content .order_list").last().append(html);
}

// 点击删除订单按钮
$(document).on("click", ".content .order_list .order_item .delete_order", function () {
    $(this).parent().parent().remove();
});