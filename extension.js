chrome.browserAction.onClicked.addListener(function(tab) {
    // Analyze website data
    chrome.tabs.executeScript({
        code: 'document.querySelector("title").textContent'
    }, function(result) {
        if (result[0] == 'Malicious Website') {
            // Alert user
            alert("Malicious website detected!");
        }
    });
});
