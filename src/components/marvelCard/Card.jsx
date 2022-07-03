import './marvel.css'

const Card = (props) => {
    return (
        <div className='heroCard'>
        <h2>{props.name}</h2>
        <div  className = "heroImg">
        <img src = {props.img} alt="img"/>
        </div>
        <p><strong>Вселенная: </strong>{props.universe}</p>
        <p><strong>Альтер-Эго: </strong>{props.alter}</p>
        <p><strong>Род деятельности: </strong>{props.activity}</p>
        <p><strong>Друзья: </strong>{props.friends}</p>
        <p><strong>Силы: </strong>{props.superpowers}</p>
        <input className="star" type="text"/>
        <button type="button">Оценить</button>
        </div>
    )
}

export default Card;