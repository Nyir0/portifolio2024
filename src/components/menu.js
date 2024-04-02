export default function MenuBase(){
    return(
        <section className="absolute top-8 h-[90vh] w-40 bg-[var(--blue)] rounded-2xl -left-5 z-50">
            <nav className="relative h-full p-12">
                <img className="absolute right-3 top-3" src="./img/vetores/vetor_menu_top.png" alt="" width={100}/>
                <img className="absolute right-3 bottom-3" src="./img/vetores/vetor_menu_bot.png" alt="" width={100}/>
                <ul className="h-full flex flex-col justify-around items-center">
                    <li className="z-10">
                        <img className="max-w-14 cursor-pointer" src="./img/icons/menu-home.png" alt="" width={60}/>
                    </li>
                    <li className="z-10">
                        <img className="max-w-16 cursor-pointer" src="./img/icons/menu-list.png" alt="" width={80}/>
                    </li>
                    <li className="z-10">
                        <img className="max-w-14 cursor-pointer" src="./img/icons/menu-perfil.png" alt="" width={60}/>
                    </li>
                </ul>
            </nav>
        </section>
    )
}