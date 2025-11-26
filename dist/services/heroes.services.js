"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
const superHeroes_1 = require("../data/superHeroes");
const usuario = (id) => {
    return superHeroes_1.heroes.find((hero) => hero.id === id);
};
exports.usuario = usuario;
