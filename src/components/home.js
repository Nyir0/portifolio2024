import "./home.css";

export default function Home(){
    return(
        <>
        <img className="absolute -top-4 -right-3 h-full w-full" src="./img/vetores/main_vetor.png" alt="" />
        <div id="content-img" className="flex flex-col w-full h-full py-5 px-10">
            <div className="flex">
                <div className="relative w-[280px]">
                    <img className="absolute -left-3 -top-3" src="./img/vetores/vetor-profile.png" alt="" width={280} />
                    <img src="./img/profile.png" alt="" width={280} />
                </div>
                <div className="flex flex-col w-[70%] pt-8 px-8">
                    <h1>Desenvolvedor full stack junior apaixonado por contribuir na construção de soluções digitais de excelência para empresas em busca de inovação e qualidade.</h1>
                    <br/>
                    <h3>
                    Desenvolvimento full stack utilizando as melhores práticas com Laravel e REACT.JS, integração de APIs REST e aplicação de tecnologias para criar produtos que sejam funcionais, intuitivos e de fácil manutenção.
                    </h3>
                </div>
            </div>
        </div>
        </>
    )
}