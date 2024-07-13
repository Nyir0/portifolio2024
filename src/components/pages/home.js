import "./home.css";

export default function Home(){
    return(
        <>
            <img className="absolute -top-4 -right-3 h-full w-full pointer-events-none z-10" src="/img/vetores/main_vetor.png" alt="" />
            <section id="content-img" className="flex flex-col w-full h-full py-5 px-10 relative">
                <div className="flex">
                    <div className="relative w-[280px]">
                        <img className="absolute -left-3 -top-3 select-none" src="./img/vetores/vetor-profile.png" alt="" width={280} />
                        <img src="./img/profile.png" alt="" width={280} />
                    </div>
                    <div className="flex flex-col w-[70%] pt-8 pl-8">
                        <h1>Desenvolvedor full stack junior apaixonado por contribuir na construção de soluções digitais de excelência para empresas em busca de inovação e qualidade.</h1>
                        <br/>
                        <h3>
                        Desenvolvimento full stack utilizando as melhores práticas com Laravel e REACT.JS, integração de APIs REST e aplicação de tecnologias para criar produtos que sejam funcionais, intuitivos e de fácil manutenção.
                        </h3>
                    </div>
                </div>
                <div className="flex py-5 gap-10">
                    <div className="flex flex-col gap-5 w-60">
                        <button type="button">BAIXAR CURRÍCULO !(*PDF)</button>
                        <button type="button" className="w-40">CONTATO</button>
                    </div>
                    <div className="flex justify-between w-[calc(100%-300px)]">
                        <div className="techIcons">
                            <img src="/img/icons/logo-php.svg"></img>
                        </div>
                        <div className="techIcons">
                            <img src="/img/icons/logo-js.svg" width={80} className="mx-5"></img>
                        </div>
                        <div className="techIcons">
                            <img src="/img/icons/logo-python.svg" width={100}></img>
                        </div>
                        <div className="techIcons">
                            <img src="/img/icons/logo-laravel.svg" width={80} className="mx-5"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}