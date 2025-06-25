const Tarea = require('../model/Tarea');

exports.getTareas = async (req,res) =>{
    const tareas = await Tarea.find;
    console.log(`EL numero de tareas es ${tareas.length}`);
    res.json(tareas);
}

exports.addTarea = async(req, res) => {
    let {nombre, descripcion, completed} = req.body;  //hacemos desestructurizacion
    let nuevo = new Tarea({nombre, descripcion, completed});
    await nuevo.save();
    console.log("se agregaron nuevas tareas")
    res.status(201).json(nuevo);
}

exports.eliminarTarea = async(req, res) => {
    await Tarea.findByIdAndDelete(req.params.id)
    res.json({ message: "Tarea elminada correctamente" });
};

// exports.editarTarea = (req, res) => {
//     let id = Number(req.params.id)
//     let tareaExistente = tareas.find((t) => t.id === id);
//     if(!tareaExistente) {
//         return res.status(404).json({ error: "Tarea no encontrada" });
//     }

//     tareas = tareas.filter((t) => t.id !== id);
//     res.json({ message: "Tarea elminada correctamente" });
// };


// exports.editarTarea = (req, res) => {
//     let id = Number(req.params.id);
//     let { nombre, completed } = req.body;

//     // Buscar la tarea por id
//     let tareaIndex = tareas.findIndex(t => t.id === id);
//     if (tareaIndex === -1) {
//         return res.status(404).json({ error: "Tarea no encontrada" });
//     }

//     // Actualizar solo los campos que se envíen
//     if (nombre !== undefined) {
//         tareas[tareaIndex].nombre = nombre;
//     }
//     if (completed !== undefined) {
//         tareas[tareaIndex].completed = completed;
//     }

//     res.json({ message: "Tarea actualizada correctamente", tarea: tareas[tareaIndex] });
// };