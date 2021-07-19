import React from 'react';

import '../assets/css/FormData.css';

export default function FormData() {
  const [value, setValue] = React.useState([]);
  const [formValue, setFormValue] = React.useState({
    email: '',
    nome: '',
    escolhas: [],
  });
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  const handleValue = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
      // console.log(value);
    }
  };
  const handleClick = () => {
    setFormValue({ ...formValue, escolhas: [...value] });
  };
  const handleSubmit = (e) => {
    if (formValue.nome !== '' && formValue.email !== '') {
      localStorage.setItem('user', JSON.stringify(formValue));
    } else {
      e.preventDefault();
      alert('Complete os dados');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="title-form">Sua Chance de mudar de vida, logo abaixo</h3>
      <label htmlFor="nome" required>
        Nome:
      </label>
      <input
        id="nome"
        type="text"
        onChange={({ target }) => {
          setFormValue({ ...formValue, nome: target.value });
        }}
      />
      <label htmlFor="email" required>
        Email:
      </label>
      <input
        id="email"
        type="email"
        onChange={({ target }) => {
          setFormValue({ ...formValue, email: target.value });
        }}
      />
      <div>
        <h3>Quais são seus interesses?</h3>
        <span>
          <input
            type="checkbox"
            name=""
            id="Computadores"
            value="Computadores"
            onChange={handleValue}
          />
          Computadores
        </span>
        <span>
          <input
            type="checkbox"
            name=""
            id=""
            value="Notebooks"
            onChange={handleValue}
          />
          Notebooks
        </span>
        <span>
          <input
            type="checkbox"
            name=""
            id=""
            value="Consoles"
            onChange={handleValue}
          />
          Consoles
        </span>
        <span>
          <input
            type="checkbox"
            name=""
            id=""
            value="Acessorios"
            onChange={handleValue}
          />
          Acessorios
        </span>
      </div>
      <button onClick={handleClick}>Cadastrar</button>
    </form>
  );
}
