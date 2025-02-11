const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    genero: { type: String, required: false },
    telefono: { type: String, required: false },
    edad: { type: Number, required: true },
    region: { type: String, required: true }
}, {
    toJSON: {
        transform: (doc, ret) => {
            delete ret.__v; // Elimina el campo __v de la respuesta
        }
    }
});

module.exports = mongoose.model("Persona", personaSchema);