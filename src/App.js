import MenuBase from './components/pages/menu.js';
import Home from './components/pages/home.js';
import Routes from './Routes.js';

function App() {
  return (
    <>
      {/* Menu Lateral */}
      <MenuBase />
      <div class="h-[100vh] w-[100vw]">
        <div className="relative flex flex-col pl-32 items-start justify-start h-[80vh] w-full bg-[var(--blue-bg)]">
          {/* Menu Header */}
          <nav id="nav-main" className="ml-32 px-10 w-2/3 h-6 flex justify-between my-5">
            <div className="pb-3 w-20 text-center">
              <a href="/">SERVIÇOS</a>
            </div>
            <div className="pb-3 w-20 text-center">
              <a href="/contatos">CONTATOS</a>
            </div>
            <div className="pb-3 w-28 text-center">
              <a href="/">OBSERVAÇÕES</a>
            </div>
          </nav>
          {/* Conteudos */}
          <main className='absolute mt-24 ml-10 h-[75vh] w-[80vw]'>
            <section id="home" className='h-full w-full relative'>
              <Routes />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
