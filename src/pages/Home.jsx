import React from 'react'
import { Hero } from '../components'
import styles from '../style'

const Home = () => {
  return (
    <>
    
    <div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

    
    </>
  )
}

export default Home