import DarkModeToggle from "@/components/DarkModeToggle";

function MainApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <DarkModeToggle />
      {/* rest of your layout */}
    </div>
  );
}
