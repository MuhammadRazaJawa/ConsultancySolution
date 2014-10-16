// JavaScript Document


	yepnope({
    test: Modernizr.inputtypes.date,
    nope: [
        "external/xdate.js", 
        "external/xdate.i18n.js", 
        "js/mobipick.js", 
        "demo/mobipick-custom.js",
        "css/mobipick.css"
    ]
});
	$( "input[type='date']" ).mobipick();

