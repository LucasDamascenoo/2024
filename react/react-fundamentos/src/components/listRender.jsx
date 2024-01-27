import { useState } from "react";

export const ListRender = () => {
  const [list] = useState(["maria", "jose", "jesus"]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
