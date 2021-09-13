import { useEffect, useState } from "react";
import Card from "../components/Card/Card"
function Reactions(props) {
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
export default Reactions
