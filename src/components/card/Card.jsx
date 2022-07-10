
import style from  './card.css'
const Card = (props) => {
    return(
    <div className={style.tarifCard + (props.isChecked ? " " + style.checked : " " )}>
            <div className={style.tarifHeader} 
            style={{backgroundColor: props.colorName}}>Безлимитный {props.price}</div>
            <div className={style.tarifBody}
            style={{backgroundColor: props.color}}
            >руб <span className={style.tarifPrice}>{props.price}</span> /мес</div>
            <div className={style.tarifInet}>до {props.inet} Мбит/с</div>
            <div className={style.tarifInfo}>Объем включенного <br/> трафика неограничен</div>
        </div>
    )
}
export default Card