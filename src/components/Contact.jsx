import Styles from './Contact.module.css'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import whats from '../assets/whats.png'
import { BrowserRouter as Router, Link} from 'react-router-dom'

function Contact(){
    return(
        <section className={Styles.contact}>
            <div>
            <Router>
            <Link to='https://github.com/EudesNewton'><img src={github} alt="" /></Link>
          </Router>
          <Router>
            <Link to='mailto:eudesnewton@gmail.com'><img src={gmail} alt="" /></Link>
          </Router>
          <Router>
            <Link to='https://www.linkedin.com/in/eudes-nilton-057ab816a/'><img src={linkedin} alt="" />
            </Link>
          </Router>
          <Router>
            <Link to='https://wa.me/55061993586770'><img src={whats} alt="" />
            </Link>
          </Router>
          </div>

        </section>
    )
}

export default Contact