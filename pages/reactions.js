import { useEffect, useState } from "react";
import Card from "../components/Card/Card"
function reactions(props) {
  const [state, setstate] = useState([])
  useEffect(() => {
    setstate([...JSON.parse(localStorage.getItem("reactions"))])
  }, [])
  return (
    <div>
      {state.map(function (object, i) {
        return <Card type="rea" {...object} key={i} />;
      })}
    </div>

  )
}
export default reactions
