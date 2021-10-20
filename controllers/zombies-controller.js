//const { fetchAll } = require('../models/incidente'); // Imortar el fetch all del modelo del modelo
const Zombie = require('../models/zombie');
//const { fetchPlaces } = require('../models/incidente');
let suma_incidentes;
let suma_estados = [];

exports.addZombie = (request, response, next) => {
    response.render('add_zombie',  {
        titulo_1: "Agregar Zombie",
        titulo_2: "Lista Zombies",
    });
};

exports.postZombie = (request, response, next) => {
    const zombie = new Zombie(request.body.nombre_completo, request.body.created_at);
    zombie.save(request.body.nombre_completo)
        .then(([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

exports.getZombies = (request, response, next) => {
    Zombie.fetchAll()
        .then(([rows, fieldData]) => {
            console.log("Get Exitoso 🚀"); 
            Zombie.sumZombies()
                .then(([sum, fieldData]) => {
                    console.log("Suma Exitosa 🤓");
                    suma_Zombies = sum[0][0].total_zombies;
                    Zombie.sumStateZombies()
                        .then(([sum_states, fieldData]) => {
                            suma_estados[0] = sum_states[0][0].cantidad;
                            suma_estados[1] = sum_states[0][1].cantidad;
                            suma_estados[2] = sum_states[0][2].cantidad;
                            suma_estados[3] = sum_states[0][3].cantidad;
                            suma_estados[4] = sum_states[0][4].cantidad;
                            console.log(suma_estados);
                            response.status(200).json({sum: suma_Zombies, rows, suma_estados: suma_estados});
                        })
                        .catch(err => {
                            console.log(err);
                            response.status(302).json({error: err});
                        })
                })
                .catch(err => {
                    console.log(err);
                    response.status(302).json({error: err});
                })
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

/*exports.addIncident = (request, response, next) => {
    Incident.fetchPlaces()
        .then(([rows1, fieldData]) => {
            Incident.fetchTypes()
                .then(([rows2, fieldData]) => {
                    response.render('add_incidents',  {
                        titulo_1: "Agregar Incidente",
                        titulo_2: "Listado de Incidentes",
                        lista_lugares: rows1,
                        lista_tipos: rows2,
                    });
                })
                .catch(err => {
                    console.log(err);
                    response.status(302).redirect('/error');
                });
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

exports.getIncident = (request, response, next) => {
    Incident.fetchAll()
        .then(([rows, fieldData]) => {
            console.log("Get Exitoso 🚀");
            // response.status(200).json({rows});
            Incident.sumIncidents()
                .then(([sum, fieldData]) => {
                    console.log("Suma Exitosa 🤓");
                    suma_incidentes = sum[0][0].total_incidentes;
                    response.status(200).json({sum: suma_incidentes, rows});
                    
                })
                .catch(err => {
                    console.log(err);
                    response.status(302).json({error: err});
                })
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

exports.postIncident = (request, response, next) => {
    const incidente = new Incident(request.body.created_at, request.body.lugares, request.body.tipos);
    incidente.save(request.body.lugar, request.body.tipo)
        .then(([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};*/

