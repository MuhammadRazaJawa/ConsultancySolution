// JavaScript Document

var rowNumPOS = 0;
function addRowPOS(frmPOS) {
	rowNumPOS ++;
	var rowPOS = '<p id="rowNumPOS'+rowNumPOS+'">Award: <input type="text" name="qty[]"  value="'+frmPOS.add_qty.value+'">    Course Title: <input type="text" name="name[]" value="'+frmPOS.add_name.value+'"> Date:(Start): <input type="text" name="name[]" value="'+frmPOS.add_name.value+'">  Year of Entry: <input type="text" name="name[]" value="'+frmPOS.add_name.value+'"><input type="button" value="Remove" onclick="removeRowPOS('+rowNumPOS+');"></p>';
	jQuery('#itemRowsPOS').append(rowPOS);
	frmPOS.add_qty.value = '';
	frmPOS.add_name.value = '';
}

function removeRowPOS(rnum) {
	jQuery('#rowNumPOS'+rnum).remove();
}

