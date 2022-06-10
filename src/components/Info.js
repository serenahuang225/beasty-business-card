import emailIcon from '../images/Mail.png'
import linkedinIcon from '../images/linkedin.png'

const Info = () => {
    return (
        <div>
            <h1 className="info-h1">Serena S. Huang</h1>
            <h2>Awesome Computer Scientist</h2>
            <p className="info-p">serenashuang.website</p>
            <div className='buttons'>
                <Email />
                <Linkedin />
            </div>
        </div>
    )
}

const Email = () => {
    return (
        <a href='mailto:serenahuang225@gmail.com'>
            <div className='mail-button'>
                <img src={emailIcon} />
                <p>Email</p>            
            </div>
        </a>
    )
}

const Linkedin = () => {
    return (
        <a href='https://www.linkedin.com/in/imserenahuang/'>
        <div className='linked-button'>
                <img src={linkedinIcon} />
                <p>Linkedin</p>            
        </div>
        </a>
    )
}

export default Info;