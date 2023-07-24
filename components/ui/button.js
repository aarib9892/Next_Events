import React from 'react'
import classes from './button.module.css'
import Link from 'next/link'
const Button = (props) => {
  if(props.link){
    return (
      <Link className={classes.btn} href={props.link}>{props.children}</Link>

    )

  }
  return (
    <button className={classes.btn}>{props.children}</button>
    
  )
}

export default Button