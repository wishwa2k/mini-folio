import HeaderLeft from "./Components/HeaderLeft";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />

        <main className="flex-[3]">
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>

      </div>
    </>
  )
}
export default App;