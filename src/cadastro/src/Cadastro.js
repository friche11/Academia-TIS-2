import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const validationRegister = yup.object().shape({
  email: yup.string().email().required("Este campo é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Este campo é obrigatório"),
  confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes")
    .required("A confirmação da senha é obrigatória"),
});

const Cadastro = () => {
  const handleClickRegister = (values) => {
    Axios.post("https://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
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
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Confirme sua senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            ></ErrorMessage>
          </div>

          <button className="button" type="submit">
            Cadastre-se
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Cadastro;
