"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const StatusUsuario_1 = require("../ENUMS/StatusUsuario");
class Usuario {
    constructor(nomeUsuario, idUsuario, contato) {
        this.nomeUsuario = nomeUsuario;
        this.idUsuario = idUsuario;
        this.contato = contato;
        this.status = StatusUsuario_1.StatusUsuario.ATIVO;
        this.historicoEmprestimo = [];
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map