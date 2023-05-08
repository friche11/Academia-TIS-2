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
        <div class="form-image">
            <img src="assets/img//undraw_shopping_re_3wst.svg" alt=""/>
        </div>
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
                        <input id="grupo_muscular" type="text" name="grupo_muscular" placeholder="Digite o grupo muscular" required/>
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
