export const Events = () => {
  const handleMyEvent = () => {
    alert("oi");
  };
  return (
    <div className="">
      <div className="">
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
    </div>
  );
};
