import './App.css';
import {Formik, form, field, ErrorMessage} from "formik"; //biblioteca para validação de dados
import * as yup from "yup"; //validação de campos

function App() {
  return (
    <div className="container">
      //inicio formulario de login
      <h1>Login</h1>
      <Formik
        initalValues={{}}
      >
        <Form className="login-form">
        
        <div className="login-form-group">
            <Filed name="email" className="form-field" placeholder="Email"></Filed>
            <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
        </div>

        </Form>
      </Formik>
    </div>
  );
}

export default App;
