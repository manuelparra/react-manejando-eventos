const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

const PlayButton = ({ movieName }) => {
  function handlePlayClick() {
    alert(`┬íReproduciendo ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Reproducir "{movieName}"
    </Button>
  );
}

const UploadButton = () => {
  return (
    <Button onClick={() => alert('┬íSubiendo!')}>
      Subir imagen
    </Button>
  );
}

const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Toolbar />
    </div>
  );
}

export default App;
