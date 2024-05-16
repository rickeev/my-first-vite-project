import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./Reset";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        <Title />
        <Count count={count} />
        <Reset />
        <CountButtons setCount={setCount} />
      </div>
    </main>
  )
}
