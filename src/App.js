import React from "react";

const App = () => {
  const [ carrinho, setCarrinho ] = React.useState(0)
  const [ notificacao, setNotificacao ] = React.useState(null)
  const timeOutRef = React.useRef()

  function handleClick() {
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho')

    timeOutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000);
    console.log(timeOutRef);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho { carrinho}</button>
    </div>
  );
};

export default App;
