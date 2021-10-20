document.getElementById("enviar_ajax").onclick = () => {
    console.log("Se presionó el botón 😄");
    fetch('/zombies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre_completo: document.getElementById("nombre_completo").value
        }),   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            console.log("Se pudo insertar todo 😎");
            M.toast({
                html: 'Zombie Agregado con éxito 🧟',
                classes: "light-green lighten-2"
            });
            fetch('/zombies/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }   
                }).then(result => {
                    return result.json(); //Regresa otra promesa
                }).then(data => {
                    datos = data.rows;
                    sum  = data.sum;
                    estado_1 = data.suma_estados[0];
                    estado_2 = data.suma_estados[1];
                    estado_3 = data.suma_estados[2];
                    estado_4 = data.suma_estados[3];
                    estado_5 = data.suma_estados[4];
                    let tabla = "";
                    let sum_zombies = "";
                    sum_zombies += '<h6>Total Zombies: ' + sum + ' </h6>';
                    sum_zombies += '<h6 id="estado_1">Total Infectados: ' + estado_1 + ' </h6>';
                    sum_zombies += '<h6 id="estado_2">Total Desorientados: ' + estado_2 + ' </h6>';
                    sum_zombies += '<h6 id="estado_3">Total Violentos: ' + estado_3 + ' </h6>';
                    sum_zombies += '<h6 id="estado_4">Total Desmayados: ' + estado_4 + ' </h6>';
                    sum_zombies += '<h6 id="estado_5">Total Transformados: ' + estado_5 + ' </h6>';
                    if(datos.length > 0){
                        for(let zombie of datos){
                            tabla += '<tr>';
                            tabla += '<td>' + zombie.nombre_completo +'</td>';
                            tabla += '<td>' + zombie.estado + '</td>';
                            tabla += '<td>' + new Date(zombie.created_at) + '</td>';
                            tabla += '<td><a class="waves-effect waves-light btn" id="button_edit" href="/update/'+zombie.id+'"><i class="material-icons left">edit</i>editar</a></td>';
                            //tabla += '<td><a class="waves-effect waves-light btn" id="button_edit" href="/update"><i class="material-icons left">edit</i>editar</a></td>';
                            tabla +='</tr>';
                        }
                    }
                    else{
                        tabla += '<tr>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla +='</tr>';
                        tabla += '</tbody>';
                    }
                    document.getElementById("table_body").innerHTML = tabla;
                    document.getElementById("sum_zombies_cont").innerHTML = sum_zombies;
                }).catch(err => {
                    console.log(err);
                });
        }).catch(err => {
            console.log(err);
    });
};