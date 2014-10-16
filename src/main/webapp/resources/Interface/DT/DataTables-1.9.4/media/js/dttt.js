

$(document).ready( function () {
	$('#example').dataTable( {
		"bJQueryUI": true,
		"iDisplayLength": 10,
		"sPaginationType": "full_numbers",
		"sScrollX": "100%",
		"sScrollXInner": "110%",
		"bScrollCollapse": true,
		"sDom": '<"H"Tfr>t<"F"ip>',
		"oTableTools": {
			
			"sSwfPath": "/ConsultancySolution/resources/Interface/DT/DataTables-1.9.4/extras/TableTools/media/swf/copy_csv_xls_pdf.swf",
						
			
			"aButtons": [
							"copy",
							"csv",
							"xls",
							{
								"sExtends": "pdf",
								"sPdfOrientation": "landscape",
								"sPdfMessage": "TESTing "
							},
							"print"
						]
			
		}
	} );
} );

