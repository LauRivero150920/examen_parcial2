const db = require('../util/database');

module.exports = class Incidente {
    constructor(mi_nombre, created_at) {
        this.nombre_completo = mi_nombre;
        this.created_at = created_at;
    }
    save(nombre_completo) {
        return db.execute('INSERT INTO nuevos_zombies (nombre_completo, estado) VALUES (?,?)'
        ,[this.nombre_completo, 1]);
    }
    
    static fetchAll() {
        return db.execute('SELECT Z.id id, Z.nombre_completo nombre_completo, E.descripcion estado, Z.created_at created_at FROM nuevos_zombies Z, estados E WHERE Z.estado = E.id ORDER BY Z.created_at DESC')
    }

    static fetchStatus(){
        return db.execute('SELECT * FROM estados ORDER BY id ASC');
    }

    static sumZombies(){
        return db.execute('CALL suma_zombies()');
    }

    static sumStateZombies(){
        return db.execute('CALL suma_estados_zombies()');
    }

    static updateZombieSate(id){
        return db.execute('UPDATE nuevos_zombies SET estado = ? WHERE id = ?',
        [2, id])
    }
}