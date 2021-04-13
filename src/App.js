import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((oldIndex) => {
      let idx = oldIndex + 1
      if (idx >= people.length) idx = 0
      return idx
    })
  }

  const prev = () => {
    setIndex((oldIndex) => {
      let idx = oldIndex - 1
      if (idx < 0) idx = people.length - 1
      return idx
    })
  }

  useEffect(() => {
    let interval = setInterval(() => {
      next()
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={next}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={prev}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
