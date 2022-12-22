const Button = ({ onSmash, children }) => {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

const App = () => {
  return (
    <div>
      <Button onSmash={() => alert('¡Reproduciend!')}>
        Reproducir película
      </Button>
      <Button onSmash={() => alert('¡Subiendo!')}>
        Subiri imagen
      </Button>
    </div>
  );
}

export default App;
