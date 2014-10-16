// JavaScript Document


var rowNumWorkExp = 0;
function addRowWorkExp(frmWorkExp) {
	rowNumWorkExp ++;
	var rowWorkExp = '<p id="rowNumWorkExp'+rowNumWorkExp+'">Organization: <input type="text" name="qty[]"  value="'+frmWorkExp.add_qty.value+'">    Designation <input type="text" name="name[]" value="'+frmWorkExp.add_name.value+'"> Duties/Responsibilites: <input type="text" name="name[]" value="'+frmWorkExp.add_name.value+'">Date:(From): <input type="text" name="name[]" value="'+frmWorkExp.add_name.value+'"> Date:(To): <input type="text" name="name[]" value="'+frmWorkExp.add_name.value+'"><input type="button" value="Remove" onclick="removeRowWorkExp('+rowNumWorkExp+');"></p>';
	jQuery('#itemRowsWorkExp').append(rowWorkExp);
	frmWorkExp.add_qty.value = '';
	frmWorkExp.add_name.value = '';
}

function removeRowWorkExp(rnum) {
	jQuery('#rowNumWorkExp'+rnum).remove();
}
