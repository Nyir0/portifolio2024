import logo from './logo.svg';
import Menu_base from './components/menu.js';

function App() {
  return (
    <>
      <Menu_base />
      <div class="h-[100vh] w-full">
        <div className="flex pl-10 justify-center h-[80vh] w-full bg-[var(--blue-bg)]">
          <nav className="w-1/2 h-6 flex justify-between my-5">
            <div className="pb-3 w-20 text-center">
              <a href="">SERVIÇOS</a>
            </div>
            <div className="pb-3 w-20 text-center">
              <a href="">CONTATOS</a>
            </div>
            <div className="pb-3 w-28 text-center">
              <a href="">OBSERVAÇÕES</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App;
