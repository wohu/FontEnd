/*这是一个使用的js，不可直接使用*/

//在表格操作中常有删除、修改的操作。 如点击按钮后先获取该行的唯一标识，再通过ajax进行操作
function getIdIntr(){
	//第一个parent获取到的是当前删除按钮的td
	//第二个parent获取到了改行的tr
	//结下来获取子节点，括号中是表达式，根据ID的位置自行修改。
	//最后获取文本节点。 （除了这种方法还有获取兄弟节点的方式）
	var id = $(this).parent().parent().children(":first").text();
	return id;
}

//表单字段内容太多，快速清空表单内容
function resetForm(){
    //$()[0] -->将jquery对象转换为js对象
    //使用js的reset方法便可以重置表单内容
    $("form")[0].reset();
}
