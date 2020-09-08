/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
	let target;
	while ((e.target.tagName !== 'A' || !e.target.href) && e.target.parentNode) {
		target = e.target.parentNode;
	}

	if (target.tagName !== 'A') {
		return;
	}

	console.log('content script sending message');
	browser.runtime.sendMessage({url: target.href});
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener('click', notifyExtension);

