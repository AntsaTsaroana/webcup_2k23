import React, { useState } from 'react'
import '../Assets/css/decrypt.scss'
import cloud1 from "../Assets/img/cloudssvgs/Asset 10.svg"
import cloud2 from "../Assets/img/cloudssvgs/Asset 11.svg"
import cloud3 from "../Assets/img/cloudssvgs/Asset 12.svg"
import cloud4 from "../Assets/img/cloudssvgs/Asset 13.svg"
import cloud5 from "../Assets/img/cloudssvgs/Asset 14.svg"
import cloud6 from  "../Assets/img/cloudssvgs/Asset 6.svg"
import cloud7 from "../Assets/img/cloudssvgs/Asset 7.svg"
import cloud8 from "../Assets/img/cloudssvgs/Asset 8.svg"
import cloud9 from "../Assets/img/cloudssvgs/Asset 9.svg"

export const Decrypt = () => {
    const [dreamValue, setDreamValue] = useState(null)
    const [dream, setDream] = useState(false)
    const giveResponse = (e) => {
        e.preventDefault()
        console.log(dreamValue)
        if(dreamValue) {
            setDream(true)
        }
    }
  return (
    <>
    <div className="header">
        <div className="glass">
            <div className="avatar"></div>
            <div className="text">
                    <h2>Analyseur de reve</h2>
                    <p>Bienvenue <span>UserName</span>, <br /> saisissez votre reve et recevez une interpretation detaillée de celle-ci.</p>
                    <a href="#form" className="button">Raconter mon reve</a>
            </div>
        </div>
    </div>
    <div className="form" id='form'>
        <div className="clouds">
            {/* <img src={cloud1} alt="cloud1"/> */}
            <img src={cloud2} alt="cloud1" id="cloud2"/>
            {/* <img src={cloud3} alt="cloud1"/> */}
            {/* <img src={cloud4} alt="cloud1"/>
            <img src={cloud5} alt="cloud1"/> */}
            <img src={cloud6} alt="cloud1" id='cloud6'/>
            {/* <img src={cloud7} alt="cloud1"/>
            <img src={cloud8} alt="cloud1"/> */}
            <img src={cloud9} alt="cloud1" id='cloud9'/>
        </div>
        <div className="left">
            <h2>Vous avez revé de ...</h2>
            <p>Saisissez les détails de vos rêve, tels que les personnages, les objets, les émotions, etc.</p>
        </div>
        <div className="right">
            {/* <form onSubmit={giveResponse} action='#resultsection'> */}
            <form action='#resultsection'>
                <textarea name="description" cols="30" rows="7" placeholder="Par exemple, J'ai vu un chien danser et mon petit frere sur la plage sous la lumiere du coucher du soleil" onChange={(e) => {
                    setDreamValue(e.target.value)
                    // console.log(dreamValue)
                }}></textarea>
                {/* <input type="submit" value="Envoyer" /> */}
                <a href='#resultsection' value="Envoyer" onClick={giveResponse}>Envoyer</a>
            </form>
        </div>
    </div>
    <div className="resultSection" id='resultsection' style={{
        display : dream ? 'flex' : 'none'
    }}>
        <h2 className='title'>Voici une interpretation de votre reve :</h2>
        <div className="results">
            <p className="keywords">
                Les mots clés veulent dire, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam iusto laborum, neque recusandae aliquid vero eveniet maxime laboriosam nulla?
            </p>
            <p className="prediction">
                Ceci prévoit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis quasi culpa, repellendus sit id.
            </p>
            <p className="proposition">
                On vous conseil de Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia.
            </p>
        </div>
    </div>
    <div className="example">
        <h2>Quelques exemples de reves</h2>
        <div className="cards">
            <div className="card">
                <h3>Conduire - ne peut pas s'arreter</h3>
                <p>Si vous conduisiez sans avoir la possibilité de freiner ou d'arreter le vehicule, ceci veut dire que Lorem ipsum dolor.</p>
            </div>
            <div className="card">
                <h3>Urgence</h3>
                <p>Une urgence dans votre reve Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, consequuntur!</p>
            </div>
            <div className="card">
                <h3>Abandonné</h3>
                <p>Si vous etes abandonné dans votre reve ceci implique que Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="card">
                <h3>Collegue - Bizarre, inconnue</h3>
                <p>Si vous voyez un collegue inconnue dans vos reve, ceci veut dire que dolor sit amet, consectetur adipisicing.</p>
            </div>
        </div>
    </div>
    </>
  )
}
