// 拦截fetch的全局fetch函数
(function() {
  var originalFetch = fetch;
  
  window.fetch = function(url, options) {
    // 判断url是否是指定的请求地址，如果是则修改为新的URL
    if (url === "https://lolstatic-a.akamaihd.net/lc-home-config/v1/live/lc_home_zh_CN.json") {  
      url = "https://lolstatic-a.akamaihd.net/lc-home-config/v1/live/lc_home_zh_TW.json";
    }
    
    // 调用原始的fetch函数
    return originalFetch.call(this, url, options);
  };
})();