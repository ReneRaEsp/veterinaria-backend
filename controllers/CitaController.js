import models from '../models/models';
export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Cita.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        };
    },
    list: async (req, res, next) => {
        try{
            const reg = await models.Cita.find();
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        };
    },
    update: async (req, res, next)=>{
        try {
            const reg = await models.Cita.findByIdAndUpdate(
                {_id: req.body._id},
                {
                    mascota: req.body.mascota, 
                    especie: req.body.especie,
                    propietario: req.body.propietario,
                    telefono: req.body.telefono,
                    hora: req.body.hora,
                    descripcion: req.body.descripcion
                }
            );
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:"Ocurrio un error",
            });
            next(e);
        };
    },
    remove: async (req, res, next)=>{
        console.log('remove ');
        console.log(req.body._id);
        try {
            const reg = await models.Cita.findByIdAndDelete(
                {_id:req.body._id}
            );
            res.status(200).json(reg);
        }catch (e){
            res.status(500).send({
                message:"Ocurrio un error",
            });
            next(e);
        };
    },
    query: async (req, res, next)=>{
        try {
            const reg = await models.Cita.findOne({_id:req.query._id});
            !reg ?  res.status(404).send({message:"El registro no existe"}) : res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({ message:"Ocurrio un error" });
            next(e);
        };
    },
};