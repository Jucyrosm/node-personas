const express = require("express");
const Persona = require("../models/Persona");

const router = express.Router();

// personas con edad y region
router.get("/", async (req, res) => {
    try {
        const { edad, region } = req.query;
        let filtro = {};
        if (edad) filtro.edad = edad;
        if (region) filtro.región = region;

        const personas = await Persona.find(filtro);
        res.json(personas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// persona por ID
router.get("/:id", async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });

        res.json(persona);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// agregar persona
router.post("/", async (req, res) => {
    try {
        const nuevaPersona = new Persona(req.body);
        await nuevaPersona.save();
        res.status(201).json(nuevaPersona);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// actualizar datos de una persona
router.put("/:id", async (req, res) => {
    try {
        const personaActualizada = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!personaActualizada) return res.status(404).json({ mensaje: "Persona no encontrada" });

        res.json(personaActualizada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar una persona
router.delete("/:id", async (req, res) => {
    try {
        const personaEliminada = await Persona.findByIdAndDelete(req.params.id);
        if (!personaEliminada) return res.status(404).json({ mensaje: "Persona no encontrada" });

        res.json({ mensaje: "Persona eliminada con éxito" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
