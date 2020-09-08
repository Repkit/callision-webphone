// eslint-disable-next-line import/no-unassigned-import
// import './options-storage';

/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {

	console.log("background script received message");
	var url = message.url;
	console.log(url);
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);
