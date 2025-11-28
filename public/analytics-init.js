window.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing Analytics...");

  analytics.init({
    endpoint: "https://analytics-platform-dzkr.onrender.com/api/track"
  });

  // test event
  analytics.track("page_loaded", { page: window.location.pathname });
});
