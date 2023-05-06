import React from 'react'
import '../Assets/css/about.scss'

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="header">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea repellendus repudiandae necessitatibus quod possimus sed laborum, veniam cumque inventore.</p>
          
        </div>
        <div className="institute">
          <div className="image"></div>
          <div className="text">
            <h3>Institut Internationnal des Reves</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet ipsam eaque saepe deserunt aperiam a, dicta vero, veritatis corrupti voluptatem. Esse, hic dolores? Quisquam vero aliquam aut labore ipsam numquam dolore sed hic illum corrupti, commodi voluptas sint ducimus.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam temporibus nihil sapiente impedit iusto fuga recusandae maxime maiores reiciendis?</p>
            <a href="#" className="button">En savoir plus</a>
          </div>
        </div>
        <div className="onirix">
          <div className="text">
            <h3>Onirix AI</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint impedit, et officia rerum voluptatem? Dolorum ducimus ratione officia asperiores!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ipsam.</p>
            <a href="#" className="button">En savoir plus</a>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </>
  )
}
