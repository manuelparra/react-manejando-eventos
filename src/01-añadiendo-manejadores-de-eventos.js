const Button = () => {
  const handleClick = () => alert('¡Me cliqueaste!');
  
  return (
    <button onClick={handleClick}>
      Cliquéame
    </button>
  )
}

const App = () => {
  return (
    <>
      <Button />
    </>
  )
}

export default App;
