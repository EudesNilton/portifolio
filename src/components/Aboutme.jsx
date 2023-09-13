import Styles from './Aboutme.module.css'
import angular from '../assets/angular.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import typescript from '../assets/typescript.png'
import github from '../assets/github.png'



function AboutMe(){
    return(
        <section className={Styles.about_me}>
            <div className={Styles.history}>
                <h3>Olá, meu nome é <span>Eudes Nilton</span></h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in quaerat id nobis libero porro a soluta odio possimus, corrupti expedita illum sapiente atque doloribus quia assumenda necessitatibus totam commodi!

                </p>
            </div> 

            <div className={Styles.tecnology}>
                <h3>Habilidades</h3>
                <div className={Styles.column1}>
                <img src={angular} alt="" />
                <img src={css} alt="" />
                <img src={github} alt="" />
                <img src={html} alt="" />
                
                
                </div>
                <div className={Styles.column2}>
                <img src={js} alt="" />
                <img src={react} alt="" />
                <img src={sql} alt="" />
                <img src={typescript} alt="" />
                
                </div>
            </div>
        </section>
    )
}

export default AboutMe