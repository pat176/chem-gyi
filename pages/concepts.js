import { useEffect, useState } from "react";
import Card from "../components/Card/Card"
function Concepts(props) {
  const [state, setstate] = useState([])
  useEffect(() => {
    if (localStorage.getItem("concepts") !== null) {
      setstate([...JSON.parse(localStorage.getItem("concepts"))])
    }
    console.log(state)
  }, [])
  return (
    <div>
      {state.map(function (object, i) {
        return <Card {...object} type="con" key={i} />;
      })}
    </div>

  )
}
export default Concepts
