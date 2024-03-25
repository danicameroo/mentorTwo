import './Company.css'

const Company = () =>{
    const company = ['History', 'Our Team', 'Blog']

    return(
        <div className='containerCompany'>
            <ul className='listaFeature listaCom'>
                {company.map((item) => (
                    <li className='liFeature liCom'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Company