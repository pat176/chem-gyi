import { useEffect, useState } from "react";
import Card from "../components/Card/Card"
function concepts(props) {
  const [state, setstate] = useState([])
  useEffect(() => {
    setstate([...JSON.parse(localStorage.getItem("concepts"))])
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
export default concepts
