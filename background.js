// Lắng nghe thông điệp từ content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.localStorageData) {
      const localStorageData = message.localStorageData;
      console.log("LocalStorage Data:", localStorageData);
  
      // Xử lý dữ liệu tại đây
    }
});