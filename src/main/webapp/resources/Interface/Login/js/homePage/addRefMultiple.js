// JavaScript Document

var rowNumREF = 0;
function addRowREF(frmREF) {
	rowNumREF ++;
	var rowREF = '<p id="rowNumREF'+rowNumREF+'">Name: <input type="text" name="qty[]"  value="'+frmREF.add_qty.value+'"> Designation: <input type="text" name="qty[]"  value="'+frmREF.add_qty.value+'">   Relationship: <input type="text" name="name[]" value="'+frmREF.add_name.value+'"> Address: <input type="text" name="name[]" value="'+frmREF.add_name.value+'"> </br> Contact (M): <input type="text" name="name[]" value="'+frmREF.add_name.value+'">Contact (H): <input type="text" name="name[]" value="'+frmREF.add_name.value+'"> FAX: <input type="text" name="name[]" value="'+frmREF.add_name.value+'"> Email: <input type="text" name="name[]" value="'+frmREF.add_name.value+'">Years Known: <input type="text" name="name[]" value="'+frmREF.add_name.value+'"><input type="button" value="Remove" onclick="removeRowREF('+rowNumREF+');"></p>';
	
	jQuery('#itemRowsREF').append(rowREF);
	frmREF.add_qty.value = '';
	frmREF.add_name.value = '';
}

function removeRowREF(rnum) {
	jQuery('#rowNumREF'+rnum).remove();
}
