
import './ListaSuspensa.css'

interface ListaSuspensaProps{
    label:string,
    required:boolean,
    valor:string
    aoAlterado:(valor: string) => void;
    itens:string[] //lista de strings vindo do app.js
}

const ListaSuspensa = ({label,required,valor,aoAlterado,itens}:ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa