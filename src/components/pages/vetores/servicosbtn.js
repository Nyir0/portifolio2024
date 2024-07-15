

export default function ServicosBtn({texto}){
    return(
        <div className="relative h-[95%]">
            <div className="relative">
                <img src="/img/vetores/vetor_servico.svg" className="w-96 absolute -left-1 -top-1" />
                <button type="button" className="!bg-[var(--blue)] w-96 text-start p-3 flex justify-between">
                    {texto}
                    <img src="/img/icons/dropdown.svg" width={30} className="mr-4"/>
                </button>
                <section className="!bg-[var(--blue)] w-full h-[16.25rem] text-start p-3 flex justify-between absolute -top-1 -left-1">
                    <img src="/img/vetores/dropdownText.svg" className="absolute -top-2 -left-2" />
                </section>
            </div>
        </div>
    )
}