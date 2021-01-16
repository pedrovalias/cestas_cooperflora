const { validationResult, body } = require("express-validator");
const { emailExiste } = require("../controllers/usuarioController");

const usuarioValidator = () => {
  return [
    body("nome").isLength({ min: 1 }).withMessage("Nome é obrigatório"),
    body("email")
      .isEmail()
      .withMessage("Email é obrigatório e deve ser válido"),
    body("telefone")
      .isMobilePhone("pt-BR")
      .withMessage("Telefone é obrigatório e deve conter formato válido"),
    body("perfil")
      .matches(/\b(?:organizador|consumidor)\b/)
      .withMessage(
        "Perfil é obrigatório e deve possuir o valor 'consumidor' ou 'organizador'"
      ),
  ];
};

const entregaValidator = () => {
  return [
    body("data").isDate({format: 'dd/MM/yyyy'}).withMessage("Data é obrigatória e deve estar no formato dd/MM/yyyy"),
    body("horario_limite")
      .matches(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/)
      .withMessage(
        "Horário limite para pedidos é obrigatório e deve estar no formato dd/MM/yyyy HH:mm:ss"
      ),
    body("composicao_cesta")
      .isLength({ min: 10 })
      .withMessage("Composição da cesta é obrigatória"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    erros: extractedErrors,
  });
};

module.exports = {
  usuarioValidator,
  entregaValidator,
  validate,
};
