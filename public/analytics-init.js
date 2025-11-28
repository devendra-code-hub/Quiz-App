console.log("Initializing Analytics...");
analytics.init({
  endpoint: "https://analytics-platform-dzkr.onrender.com/api/track",
});

analytics.track("page_view");
