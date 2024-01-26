import { useState } from "react";

export const ListRender = () => {
  const [list] = useState(["maria", "jose", "jesus"]);

  return (
    <div>
      <ul>{list.map}</ul>
    </div>
  );
};
