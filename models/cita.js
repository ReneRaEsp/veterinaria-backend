import mongoose, {Schema} from "mongoose";

const citaSchema = new Schema({

    mascota: {type: String, maxlength:50},
    especie: {type: String, maxlength:10},
    propietario: {type: String, maxlength:50},
    telefono: {type: String, maxlength:15},
    fecha: {type: Date},
    hora: {type: Date},
    descripcion: {type: String, maxlength: 70}

});

const Cita = mongoose.model('cita', citaSchema);
export default Cita;