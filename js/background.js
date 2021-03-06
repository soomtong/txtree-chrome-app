/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('build.html', {
        id: 'main',
        bounds: { width: 1024, height: 600 },
        minWidth: 480, minHeight: 540,
        maxWidth: 1365, maxHeight: 768
        //resizable: false
    });
});