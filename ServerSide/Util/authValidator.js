const Ajv = require('ajv').default;
const ajv = new Ajv();

const schema = {
    "type": "object",
    "properties": {
        "email":{ "type": "string"},
        "password":{ "type": "string" },
        },
    "required": ["email","password",]
}


module.exports = ajv.compile(schema)