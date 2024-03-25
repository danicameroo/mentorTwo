import './Feature.css'
import uno from '../../images/icon-todo.svg'
import dos from '../../images/icon-calendar.svg'
import tres from '../../images/icon-reminders.svg'
import cuatro from '../../images/icon-planning.svg'

const Feature = () =>{
    const feature = [
        {
            img: uno,
            text: 'Todo List'
        },
        {
            img: dos,
            text: 'Calendar'
        },
        {
            img: tres,
            text: 'Reminders'
        },
        {
            img: cuatro,
            text: 'Planning'
        }
    ]

    return(
        <div className='containerFeature'>
            <ul className='listaFeature'>
                {feature.map((item) => (
                    <li className='liFeature'><img className='liImgFeature' src={item.img} alt="" /><p className='liTextFeature'>{item.text}</p></li>
                ))}
            </ul>
        </div>
    )
}

export default Feature