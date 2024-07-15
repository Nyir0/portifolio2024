import "./home.css";
import ServicosBtn from "./vetores/servicosbtn";

export default function Servicos(){
    return(
        <>
        <img className="absolute -top-4 -right-3 h-full w-full pointer-events-none z-10" src="./img/vetores/main_vetor.png" alt="" />
        <section id="content-img" className="flex flex-col w-full h-full py-5 px-10 relative gap-5">
            <ServicosBtn texto={'CRIAÇÃO DE LANDING PAGES'} />
        </section>
        </>
    )
}