let app = require("./src/config/server");
const rotas = require("./src/routes/routes");

rotas.rotaUsuarios(app);
rotas.rotaUsuario(app);
rotas.rotaBuscaUsuarios(app);
rotas.rotaSalvarUsuario(app);
rotas.rotaAtualizarUsuario(app);
rotas.rotaExcluirUsuario(app);

rotas.rotaEntregas(app);
rotas.rotaEntrega(app);
rotas.rotaSalvarEntrega(app);
rotas.rotaAtualizarEntrega(app);
rotas.rotaExcluirEntrega(app);

rotas.rotaPedidosEntrega(app);
rotas.rotaSalvarPedido(app);
rotas.rotaExcluirPedido(app);
