import React from 'react'
import '../Assets/css/contact.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'
import { BsTelephoneFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export const Contact = () => {
  return (
    <>
        <section className="contact">
            <div className="header">
                <h2>Contact</h2>
                <p>Nous sommes disponibles pour vous aider à tout moment.</p>
            </div>
            <div className="formSection">
                <div className="left">
                    <h3>Contactez-nous</h3>
                    <p>Si vous avez des questions, des commentaires ou des préoccupations, n'hésitez pas à nous contacter. Notre équipe est toujours là pour vous aider.</p>
                    <div className="cards">
                        <IconContext.Provider value={{
                            color: '#60929B',
                            size: '1.5rem'
                        }}>
                            <div className="card">
                                <FaMapMarkerAlt/>
                                <h4>ADRESSE</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="card">
                                <AiFillClockCircle/>
                                <h4>ADRESSE</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="card">
                                <IoMdMail/>
                                <h4>ADRESSE</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="card">
                                <BsTelephoneFill/>
                                <h4>ADRESSE</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="right">
                    <h3>Ecrivez-nous</h3>
                    <p>Pour toute question ou commentaire, n'hésitez pas à nous écrire.</p>
                    <form action="">
                        <input type="text" name="name" placeholder="Votre Nom ..." />
                        <input type="email" name="mail" placeholder="email ..." />
                        <textarea name="message" rows="3" placeholder="Votre message"></textarea>
                        <input type="submit" value="Envoyer message" />
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
