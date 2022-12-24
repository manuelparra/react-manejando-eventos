const Button = ({ onSmash, children }) => {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onSmash={onPlayMovie}>
        Reproduciendo película
      </Button>
      <Button onSmash={onUploadImage}>
        Subir imagen
      </Button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Toolbar 
        onPlayMovie={() => alert('¡Reproduciendo!')}
        onUploadImage={() => alert('¡Subiendo!')}
      />
    </div>
  );
}

export default App;
