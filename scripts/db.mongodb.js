use("ejercicio-citas")

db.createCollection("users", {
  
  validator: {
    $jsonSchema: {

      bsonType: "object",
      additionalProperties: false,
      required: ["names", "phone", "address", "email", "genre", "attendant", "quotes"],
      properties: {
        _id: { bsonType: "objectId" },
        names: { bsonType: "object", description: "names is required" },
        phone: { bsonType: "string", description: "apellido is required" },
        address: { bsonType: "int", description: "dni is required" },
        email: { bsonType: "string", description: "direccion is required" },
        genre: { bsonType: "object", description: "genre is required" },
        attendant: { bsonType: "object", description: "attendant is required" },
        quotes: { bsonType: "object", description: "quotes is required" },
      }
    }
  }
})

db.createCollection("doctors", {

    validator: {
      $jsonSchema: {

        bsonType: "object",
        additionalProperties: false,
        required: ["nameFull", "consultingRoom", "speciality"],
        properties: {
          _id: { bsonType: "objectId" },
          nameFull: { bsonType: "string", description: "nameFull is required and the type string" },
          speciality: { bsonType: "string", description: "speciality is required and the type string" },
          consultingRoom: { 
                bsonType: "object",
                description: "consultingRoom is required and the type string",
                required: ["code", "name"],
                properties: {
                    name: { bsonType: "string", description: "name is required and the type string" },
                    code: { bsonType: "int", description: "code is required and the type integer" },
                }
            },
        }
      }
    }
  })

  db.users.insertMany([
    {
        names: {
            name: "Juan",
            secondName: "Diego",
            firstLastName: "Ramirez",
            secondLastName: "Mogotocoro",
        },
        phone: "300000",
        address: "alguna direccion",
        email: "juan@gmail.com",
        genre: {
            name: "Masculino",
            abbreviation: "M"
        },
        attendant: {
            name: "Daniela",
            phone: "400000",
            address: "alguna direccion"
        },
        quotes: [
            {
                code: 1,
                date: "alguna fecha",
                quotesStatus: 1,
                doctorId: {
                    "$oid": "64d69f071e3a8eccb3d5b23e"
                  }
            },
            {
                code: 12,
                date: "alguna fecha",
                quotesStatus: 1,
                doctorId: {
                    "$oid": "64d69f071e3a8eccb3d5b23d"
                  }
            }
        ]
    },
    {
        names: {
            name: "Leslie",
            secondName: "second",
            firstLastName: "lastname",
            secondLastName: "cordoba",
        },
        phone: "300000",
        address: "alguna direccion",
        email: "leslie@gmail.com",
        genre: {
            name: "Femenino",
            abbreviation: "F"
        },
        attendant: {
            name: "Daniela",
            phone: "400000",
            address: "alguna direccion"
        },
        quotes: [
            {
                code: 1,
                date: "alguna fecha",
                quotesStatus: 1,
                doctorId: {
                    "$oid": "64d69f071e3a8eccb3d5b23e"
                  }
            },
            {
                code: 12,
                date: "alguna fecha",
                quotesStatus: 1,
                doctorId: {
                    "$oid": "64d69f071e3a8eccb3d5b23d"
                  }
            }
        ]
    }
])



db.doctors.insertMany([
    {
        nameFull: "Luna Ramirez",
        consultingRoom: {
            code: 10,
            name: "name consultingRoom"
        },
        speciality: "Forence"
    },

    {
        nameFull: "Emily",
        consultingRoom: {
            code: 3,
            name: "name consultingRoom"
        },
        speciality: "psicologa"
    }
])