var i = 1;

function test(){

	var big = '<p><label for="cardtype">Product</label><select id="cardtype" name="orderList['+ i +'].productId"><option th:each="product : ${productList}" th:text="${product.name}" th:value="${product.productId}">Pashmina Shawl</option></select><label for="">Order Quantity in (Pcs)</label><input id="quantity" value="0" name="orderList['+ i +'].orderedProductQuanity" type="number" /><label for="">Unit Price / Per Piece</label><input id="perUnitPrice" value="0" name="orderList['+ i +'].perUnitPrice" type="number" /></p>';
	
/*	var product = '<legend>Product</legend><p><label for="cardtype">Product</label><select id="cardtype" name="order' + i + '.productId"><option th:each="product : ${productList}" th:text="${product.name}" th:value="${product.productId}">Pashmina Shawl</option></p>';
	var pricePerUnit = 'Per Price Unit: <input type="number" name="order' + i + '.pricePerUnit" min="0" value="0" />';
	var totalQuantity = 'Total Quantity: <input type="number" name="order' + i + 'totalQuantity" min="0" value="0" />';
*/	
	$(".toCopy").append('<div>' + big + '</div>');

	i++;
	
//		$(".toCopy").append('<input type="text" name="product' + i + '.pricePerUnit" />	');
	//var div = $(".test").html();
	//$(".toCopy").append(div);
}

function remove123(){
	var check = $("form div").last().attr("id");
	if(check != 'doNotDelete'){
		$( "form div" ).last().remove();
	}
	
}