const Ajv = require('ajv').default;
const ajv = new Ajv();

const schema = {
    "type": "object",
    "properties": {
        "idUser": {"type": "number"},
        "name":{ "type": "string" },
        "phone":{ "type": "string" },
        "email":{ "type": "string"},
        "password":{ "type": "string" },
        },
    "required": ["idUser", "name", "phone", "email","password",]
}


module.exports = ajv.compile(schema)