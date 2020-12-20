let app = require('./app/config/server');
const rotas = require('./app/routes/routes');

rotas.rotaUsuarios(app);
rotas.rotaCadastroUsuario(app); 
rotas.rotaSalvarUsuario(app);      

rotas.rotaLogin(app);

rotas.rotaEntregas(app);
rotas.rotaCadastroEntregas(app);
rotas.rotaSalvarEntrega(app);
