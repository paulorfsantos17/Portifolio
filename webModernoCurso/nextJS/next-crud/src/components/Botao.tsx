interface botaoProps {
    children? : any
    cor? : string
    className? : string
    onClick?: () => void
}

export default function Botao(props : botaoProps){7
    

    return (
        <button
            onClick={props.onClick}
            className={`
                bg-gradient-to-r ${props.cor}
                text-white 
                px-4 py-2 rounded-md
                ${props.className}
        `}>
            {props.children}
        </button>
    )
}