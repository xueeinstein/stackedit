define([
    "jquery",
    "classes/Extension",
    "text!html/buttonViewer.html",
    "text!html/buttonViewer_nw.html"
], function($, Extension, buttonViewerHTML, buttonViewer_nw) {

    var buttonViewer = new Extension("buttonViewer", 'Button "Viewer"', true, true);
    buttonViewer.settingsBlock = '<p>Adds a "Viewer" button over the preview.</p>';

    buttonViewer.onCreatePreviewButton = function() {
	    if(typeof window.nwDispatcher !== 'undefined') {
	    	return buttonViewer_nw;
	    } else {
        	return buttonViewerHTML;
	    }
    };

    return buttonViewer;

});