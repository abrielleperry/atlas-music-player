import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-neutral-50 dark:bg-zinc-950">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
