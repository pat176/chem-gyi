import styles from "./Card.module.css"

import titleCase from "../../utils/titleCase"
import { useState } from "react"

function Card(props) {
  const [b, setB]=useState(false)
  return (
    <div className={styles.card} onClick={()=>setB(!b)}>
      <h2 style={{"textAlign":"center"}}>{titleCase(props.title)}</h2>
      {props.type==="rea" && b?(
        <div className={styles.reactions}>
          <h3>Reagents:</h3>
          <span className={styles.reagentBox}>
            {props.reagent.split(",").map(function(object, key){
              console.log(props.desc)
              return (key+1)+". "+object+"\n"
            })}
          </span>
          <div>
            <h3>{props.reactant} &rarr; {props.product}</h3>
          </div>
          <div>{props.desc.split("\n").map(function(object, key) {
            return (
              <div key={key}>{titleCase(object)}</div>
            )
          })}</div>
        </div>
      ): (
        
        <div className={styles.concepts}>
          {b?(
            <div>{props.desc.split("\n").map(function (object, key) {
              return (
                <div key={key}>{titleCase(object)}</div>
              )
            })}</div>

          ): null}
        </div>
      )} 
    </div>
  )
}

export default Card
