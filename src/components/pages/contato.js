import "./home.css";

export default function Contato(){
    return(
        <>
            <img className="absolute -top-4 -right-3 h-full w-full pointer-events-none z-10" src="./img/vetores/main_vetor.png" alt="" />
            <section id="content-img" className="flex flex-col w-full h-full py-5 px-10 relative gap-5">
                <div className="flex justify-around">
                    <div className="cardContatos">
                        <img src="/img/icons/zap.svg" width={80}/>
                        <strong>(11) 94297-9746</strong>
                    </div>
                    <div className="cardContatos">
                        <img src="/img/icons/linkedin.svg" width={80}/>
                        <a href="https://www.linkedin.com/in/gabriel-teofilo-837183125/" className="text-center">https://www.linkedin.com/in/gabriel-teofilo-837183125/</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="cardContatos">
                        <img src="/img/icons/discord.svg" width={80} className="my-4"/>
                        <strong>nyir0</strong>
                    </div>
                </div>
            </section>
        </>
    )
}