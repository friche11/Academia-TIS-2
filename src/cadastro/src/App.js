import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik"; //biblioteca para validação de dados
import * as yup from "yup"; //validação de campos

function App() {

  const handleClickRegister = (values) => console.log(values)

  const handleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email().required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
  });

  const validationRegister = yup.object().shape({
    email: yup.string().email().required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
    confirmpassword: yup.string().min(8, "As senhas não coincidem").required("As senhas não coincidem"),
  });


  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initalValues={{}} onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
        
        <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email"></Field>
            <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
        </div>

        <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha"></Field>
            <ErrorMessage component="span" name="password" className="form-error"></ErrorMessage>
        </div>
        
        <button className="button" type="submit">Login</button>

        </Form>
      </Formik>
      <h1>Cadastro</h1>
      <Formik
        initalValues={{}} onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
        
        <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email"></Field>
            <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
        </div>

        <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha"></Field>
            <ErrorMessage component="span" name="password" className="form-error"></ErrorMessage>
        </div>

        <div className="login-form-group">
            <Field name="confirmpassword" className="form-field" placeholder="Confirme sua senha"></Field>
            <ErrorMessage component="span" name="confirmpassword" className="form-error"></ErrorMessage>
        </div>
        
        <button className="button" type="submit">Cadastre-se</button>

        </Form>
      </Formik>
    </div>
  );
}

export default App;
