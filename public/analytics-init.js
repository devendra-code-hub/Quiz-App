console.log("Initializing Analytics...");

window.analytics.init({
  endpoint: "https://analytics-platform-dzkr.onrender.com/api/track"
});

window.analytics.track("page_view");
