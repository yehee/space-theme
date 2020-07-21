import React from 'react'

import Animated from '../components/animated'
import Layout from '../components/layout'
import SEO from '../components/seo'

import classes from '../modules/index.module.css'
import rocket from '../assets/rocket-light.json'
import { highlights, projects, interests } from '../constant'

const placeholder = `https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`

const CardList = ({ title, content }) => {
  return (
    <div style={{ margin: `100px auto` }}>
      <h2 id={title} style={{ textAlign: `center` }}>{title}</h2>
      <div className={classes.cardList}>
        {content.map((props, i) => (
          <Card key={i} {...props} />
        ))}
      </div>
    </div>
  )
}

const Card = ({ src, title, content, tags = [], ...props }) => {
  return (
    <div className={classes.card} {...props}>
      <img
        src={src || placeholder}
        style={{
          borderRadius: `50%`,
          width: 250,
          height: 250,
          objectFit: `cover`,
          display: `block`,
          margin: `30px auto`,
        }}
      />
      <h4 style={{ textAlign: `center` }}>{title}</h4>
      <div style={{ textAlign: `center`, marginBottom: `1rem` }}>
        {tags.map(tag =>
          <span
            key={tag}
            style={{
              border: `1px solid #ededed`,
              borderRadius: 20,
              padding: `5px 10px`,
              margin: 5,
              fontSize: `small`,
              whiteSpace: `nowrap`,
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <div style={{ textAlign: `center`, fontSize: `.85rem` }}>{content}</div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={classes.header}>
      <Animated animationData={rocket} style={{ flex: 1.5 }} />
      <div className={classes.intro}>
        <h1>Hi there!</h1>
        <div>My name is Alice Kim. I am a 4th year student at UBC studying Computer Science. I am actively looking for internships or new grad opportunities!</div>
      </div>
    </div>

    <CardList title={`Highlights`} content={highlights} />
    <CardList title={`Projects`} content={projects} />
    <CardList title={`Interests`} content={interests} />
  </Layout >
)

export default IndexPage
