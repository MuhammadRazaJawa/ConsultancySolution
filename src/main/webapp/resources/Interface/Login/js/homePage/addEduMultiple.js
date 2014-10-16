// JavaScript Document


var rowNum = 0;
function addRow(frm) {
	rowNum ++;
	var row = '<p id="rowNum'+rowNum+'">Uni/College/School Name & Address: <input type="text" name="name[]"  value="'+frm.add_name.value+'"> </br>  Degree/Dip/Cert/GNVQ/A-level: <input type="text" name="name[]" value="'+frm.add_name.value+'"> </br>Subject: <input type="text" name="name[]" value="'+frm.add_name.value+'"> </br> Grade Awarded: <input type="text" name="name[]" value="'+frm.add_name.value+'"> </br> Date Awarded: <input type="text" name="name[]" value="'+frm.add_name.value+'"></br> <input type="button" value="Remove" onclick="removeRow('+rowNum+');"></p>';
	jQuery('#itemRows').append(row);
	frm.add_qty.value = '';
	frm.add_name.value = '';
}

function removeRow(rnum) {
	jQuery('#rowNum'+rnum).remove();
}
