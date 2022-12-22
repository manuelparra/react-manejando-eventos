const AlertButton = ({ message, children }) => {

  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="¡Reproduciendo!">
        Reproducir película
      </AlertButton>
      <AlertButton message="¡Sebiendo!">
        Subir imagen
      </AlertButton>
    </div>
  )
}

const App = () => {
  return (
    <>
      <div>
        <Toolbar />
      </div>
    </>
  );
}

export default App;
