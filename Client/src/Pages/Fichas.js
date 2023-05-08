import React, { useState } from 'react';
import Fichas from "../Styles/Fichas.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function Ficha() {
  // Definir estado local para cada campo do formulário
  const [nomeFicha, setNomeFicha] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
  const [alunoId, setAlunoId] = useState('');
  const [personalId, setPersonalId] = useState('');

  // Função para lidar com o envio do formulário
  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/ficha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome_ficha: nomeFicha,
        grupo_muscular: grupoMuscular,
        Aluno_idAluno: alunoId,
        Personal_idPersonal: personalId
      })
    })
    .then(response => {
      // Manipular a resposta do backend aqui
      console.log(response);
    })
    .catch(error => {
      // Lidar com erros de envio do formulário aqui
      console.error(error);
    });
  }

  return (
    <body>
    <div class="container">
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Nova Ficha</h1>
                    </div>
                </div>

                <div className="form-group">
                        <label for="name">Nome Ficha</label>
                        <input id="nome_ficha" type="text" name="name" placeholder="Digite o nome da ficha" required/>
                    </div>

                    <div className="form-group">
                    <label for="grupo_muscular">Grupo Muscular</label>
                    <select id="grupo_muscular" name="grupo_muscular" value={grupoMuscular} onChange={(e) => setGrupoMuscular(e.target.value)} required>
                        <option value="">Selecione um grupo muscular</option>
                        <option value="peito">Peito</option>
                        <option value="costas">Costas</option>
                        <option value="pernas">Pernas</option>
                        <option value="ombros">Ombros</option>
                        <option value="braços">Braços</option>
                        <option value="abdominais">Abdominais</option>
                    </select>
                </div>

                    <div className="form-group">
                        <label for="grupo_muscular">Número de repetições</label>
                        <input id="grupo_muscular" type="select" name="grupo_muscular" placeholder="Digite o número de repetições" required/>
                    </div>

                    <div className="form-group">
                        <label for="grupo_muscular">Número de séries</label>
                        <input id="grupo_muscular" type="select" name="grupo_muscular" placeholder="Digite o número de séries" required/>
                    </div>

                    <div className="form-group">
                        <label for="grupo_muscular">Tempo de descanso</label>
                        <input id="grupo_muscular" type="select" name="grupo_muscular" placeholder="Digite o tempo de descanso em segundos" required/>
                    </div>
                    
                    <div className="form-group">
                    <button><a href="#">Continuar</a> </button>
                </div>
            </form>
        </div>
    </div>
</body>
  );
  }

export default Ficha;
