// JavaScript Document

var rowNumLang = 0;
function addRowLang(frmLang) {
	rowNumLang ++;
	var rowLang = '<p id="rowNumLang'+rowNumLang+'">Test Name: <input type="text" name="qty[]"  value="'+frmLang.add_qty.value+'">   Test Score: <input type="text" name="name[]" value="'+frmLang.add_name.value+'"> Validity: <input type="text" name="name[]" value="'+frmLang.add_name.value+'"> <input type="button" value="Remove" onclick="removeRowLang('+rowNumLang+');"></p>';
	jQuery('#itemRowsLang').append(rowLang);
	frmLang.add_qty.value = '';
	frmLang.add_name.value = '';
}

function removeRowLang(rnum) {
	jQuery('#rowNumLang'+rnum).remove();
}
