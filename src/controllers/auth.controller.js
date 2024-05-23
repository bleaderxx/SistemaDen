import models from "../database/models/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const login = async (req, res) => {

    const { email, password } = req.body;

    let user = await models.User.findOne({
        where: { email: email }
    })

    if (!user) return res.status(401).json({ message: "Credenciales incorrectas" })

    const correcto = await bcrypt.compare(password, user.password); //esto es para comparar password del cifrado con el no cifrado
    if (correcto) {

        const payload = {
            id: user.id,
            email: user.email,
            time: new Date()
        }

        const {time} = payload;
        console.log(time);

        //GENERAMOS TOKEN
        const token = jwt.sign(payload, process.env.JWT_SECRET || "MI_CODIGO_SECRETO_JWT", {expiresIn: 60*60})

        return res.status(200).json({ access_token: token, user: user, error: false})

    } 
        return res.status(422).json({ message: "La contraseña es incorrecta" })
    


}
const registro = async (req, res) => {

    // /api/user/:nombre | req.params.nombre
    // /api/user?q=juan | req.query.q
    // /api/user | req.headers
    // /api/user | req.body

    console.log(req.body);

    const { email, password } = req.body  //Capturamos del cuerpo el email y password
    //CONSULTA SEQUELIZE ORM
    //select * fromn users where email = req.body.email
    let user = await models.User.findOne({
        where: { email: email }
    });   //Comparar en la base de datos sequelize de express

    if (!user) {

        const hash = await bcrypt.hash(password, 12)

        user = await models.User.create({ email, password: hash });

        return res.status(201).json({ message: "Usuario Registrado", data: user })
    } else {
        return res.status(422).json({ message: "El correo ya existe" })
    }
}


const perfil = (req, res) => {

    return res.send("ESTO ES UNA RESPUESTA DE MI PERFIL");

}
const logout = (req, res) => {

}

export default {
    login,
    registro,
    perfil,
    logout
}