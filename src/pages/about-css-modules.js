import React from "react"
import { Link } from "gatsby"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
      <Link to="/">Home</Link>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Dan Barrick"
      avatar="https://res.cloudinary.com/https-www-dreamardor-com/image/upload/v1537144955/DanBarrick2018.jpg"
      excerpt="I'm Dan Barrick, a really amazing type of guy. Come watch me dominate as I take over the world."
    />

    <User
      username="Lucky Barrick"
      avatar="https://res.cloudinary.com/https-www-dreamardor-com/image/upload/v1537151534/2227_49652332731_6066_n.jpg"
      excerpt="I'm Lucky Barrick, the best friend and dog in the world. I love snacks, walks, cuddles and staring at my parents."
    />



  </Container>
)