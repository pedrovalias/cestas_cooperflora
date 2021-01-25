const { validationResult, body } = require("express-validator");

const usuarioValidator = () => {
  return [
    body("nome").isLength({ min: 1 }).withMessage("Nome é obrigatório"),
    body("email")
      .isEmail()
      .withMessage(
        "Email é obrigatório e deve ter formato conforme exemplo: 'exemplo@email.com'"
      ),
    body("telefone")
      .isMobilePhone("pt-BR")
      .withMessage(
        "Número de celular é obrigatório e deve ter formato conforme exemplo: '(99) 99999-9999'"
      ),
    body("perfil")
      .matches(/\b(?:organizador|consumidor)\b/)
      .withMessage(
        "Perfil é obrigatório e deve possuir o valor 'consumidor' ou 'organizador'"
      ),
  ];
};

const entregaValidator = () => {
  return [
    body("data")
      .isDate({ format: "yyyy-MM-dd" })
      .withMessage("Data é obrigatória e deve estar no formato yyyy-MM-dd"),
    body("horario_limite")
      .matches(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(:(\d{2})){0,1}$/)
      .withMessage(
        "Horário limite para pedidos é obrigatório e deve estar no formato yyyy-MM-ddTHH:mm:ss"
      ),
    body("composicao_cesta")
      .isLength({ min: 5 })
      .withMessage("Composição da cesta é obrigatória"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ erro: err.msg }));

  return res.status(400).json({
    erros: extractedErrors,
  });
};

module.exports = {
  usuarioValidator,
  entregaValidator,
  validate,
};
