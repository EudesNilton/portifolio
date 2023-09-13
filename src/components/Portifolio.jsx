import Styles from "./Portifolio.module.css";
import lupa from '../assets/lupa.png'
import netflix from '../assets/netflix_clone.png'
import pokemon from '../assets/pokemon.png'
import relogio from '../assets/relogio.png'
import lastofus from '../assets/the_last_of_us.png'
import { BrowserRouter as Router, Link} from 'react-router-dom'

function Portifolio() {

  return (
    <section className={Styles.portifolio}>
      <h3>Portifólio</h3>

      <div className={Styles.container1}>
        <div className={Styles.project}>
          

            <Router>
            <Link to='https://eudesnewton.github.io/Banda-lupa/'> <button><img src={lupa} alt="imagem" /></button></Link>
          </Router>
        </div>
        <div className={Styles.project}>
          

            <Router>
            <Link to='https://eudesnewton.github.io/NetflixClone/'> <button><img src={netflix} alt="imagem" /></button></Link>
          </Router>
        </div>
        <div className={Styles.project}>
          

            <Router>
            <Link to='https://eudesnewton.github.io/pokedex/
            '> <button><img src={pokemon} alt="imagem" /></button></Link>
          </Router>
        </div>

        <div className={Styles.project}>
          

            <Router>
            <Link to='https://eudesnewton.github.io/Relogio/'> <button><img src={relogio} alt="imagem" /></button></Link>
          </Router>
        </div>

        <div className={Styles.project}>
          

            <Router>
            <Link to='https://eudesnewton.github.io/The-Last-of-Us/'> <button><img src={lastofus} alt="imagem" /></button></Link>
          </Router>
        </div>
      </div>
    </section>
  );
}

export default Portifolio;
