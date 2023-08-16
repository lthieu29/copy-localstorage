var data;

document.getElementById("copy").addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, { code: `
                let allData = {};
                for (var i = 0; i < localStorage.length; i++) {
                    var key = localStorage.key(i);
                    var value = localStorage.getItem(key);
                    allData[key] = value;
                }
                allData;
            ` }, 
        function(result) {
          const localStorageData = result[0];
          navigator.clipboard.writeText(JSON.stringify(localStorageData));
          data = JSON.stringify(localStorageData);
        });
    });
})

document.getElementById("paste").addEventListener('click', () => {
    let dataToStore = {
        hello: "hi"
    };
    chrome.storage.local.set(dataToStore, function() {
        console.log("Data has been stored in chrome.storage.local");
    });

    chrome.storage.local.get(null, function(result) {
        alert("Stored Data:", JSON.stringify(result));
        // Xử lý dữ liệu ở đây
    });
});

// chrome.runtime.sendMessage({ clipboardData: text });

