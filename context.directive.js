angular
	.module('contextToggle.directive', [])
	.directive('contextToggle', contextToggle);

var contextVisible = false;
var documentClickLoaded = false;

function contextToggle() {
	return {
		restrict: 'A',
		link: contextLink
	};
}

function contextLink(scope, element) {
	// When element is clicked
	element.on('mousedown', function(event) {
		// Stop click event from firing anywhere else (e.g. documentClick)
		event.stopPropagation();
		// Run elementClick function
		elementClick(element, event);
	});

	// Add listener to click events on body
	if(!documentClickLoaded) {
		$(document.body).on('mousedown', documentClick);
		console.log('registered');
		documentClickLoaded = true;
	}

	// When scope is destroyed
	scope.$on('$destroy', function handleDestroyEvent() {
		// Stop listening to body click events
		$(document.body).off('mousedown', documentClick);
	});
}

// Function to run when element with directive is clicked
function elementClick(element, event) {
	// If this is a close-context button/link
	if(event.target.hasAttribute('close-context')) {
		// Hide all context menus!
		$('.context-menu').hide();
		contextVisible = false;
		return;
	}

	// If context toggle clicked + isn't active
	if($(element).hasClass('context-toggle') && !$(element).hasClass('mod-active')) {
		$('.context-menu').hide();
		$('.context-toggle').removeClass('mod-active');
		contextVisible = false;
	}

	// Toggle child context menus
	if(!contextVisible) {
		$(element).addClass('mod-active').children('.context-menu').show();
		contextVisible = true;
	}
	else if(
		$(event.target).attr('context-toggle') !== undefined ||
		($(event.target).parent().attr('context-toggle') !== undefined && !$(event.target).hasClass('context-menu'))
	) {
		$(element).children('.context-menu').hide();
		$(element).removeClass('mod-active');
		contextVisible = false;
	}
}

// Function to run when document is clicked
function documentClick(e) {
	e.stopPropagation();

	// Clicked element
	var $curr = $(e.target);
	// By default, we should hide context menu
	var hideContext = true;

	// Loop through current element (and parents)
	while($curr.length) {
		// If this element has context-toggle class (then we've clicked inside a context menu)
		if($curr.hasClass('context-menu')) {
			// Don't hide the context menu
			hideContext = false;
			break;
		}
		else {
			// Check parent elements
			$curr = $curr.parent();
		}
	}

	// If we should hide the context menus
	if(hideContext) {
		// Hide all context menus!
		$('.context-menu').hide();
		$('.context-toggle').removeClass('mod-active');
		contextVisible = false;
	}
}
