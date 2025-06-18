let tareas = []

exports.getTareas=(req,res) =>{
    console.log(`EL numero de tareas es ${tareas.length}`);
    res.json(tareas)
}

exports.addTarea = (req, res) =>{
    let {nombre, completed}= req.body
    let nuevo = {id: Date.now(), nombre, completed}
    console.log("Se agregaron nuevas tareas")
    tareas.push(nuevo)
    res.status (201).json(nuevo)
}

exports.eliminarTarea = (req, res) => {
    let id = Number(req.params.id)
    let tareaExistente = tareas.find((t) => t.id === id);
    if(!tareaExistente) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    tareas = tareas.filter((t) => t.id !== id);
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