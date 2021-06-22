function open_spielsucht() { 
	window.open("https://www.spielen-mit-verantwortung.de/", "_blank"); 
};
jQuery(document).ready(function() {
	jQuery(".target-link-blank--onl").click(function() {
		var ref = jQuery(this).attr("data-target");
		window.open("/" + ref);
	});
	jQuery(".target-link-self--onl").click(function() {
		var refNewTab = jQuery(this).attr("data-target");
		window.location.href = "/" + refNewTab;
	});
	jQuery(".target-link-blank--offl").click(function() {
		var ref = jQuery(this).attr("data-target");
		window.open(ref);
	});
	jQuery(".target-link-self--offl").click(function() {
		var refNewTab = jQuery(this).attr("data-target");
		window.location.href = refNewTab;
	});

});