import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik"; //biblioteca para validação de dados
import * as yup from "yup"; //validação de campos

function App() {

  const handleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email().required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
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
        
        <button className="button" type="submit"></button>

        </Form>
      </Formik>
    </div>
  );
}

export default App;
