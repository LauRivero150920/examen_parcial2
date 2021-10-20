document.getElementById("mostrar3").onclick = () => {
    fetch('/zombies/list/violent', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            datos = data.rows;
            sum  = data.sum;
            estado_3 = data.suma_estados[2];
            let tabla = "";
            let sum_zombies = "";
            sum_zombies += '<h6 id="estado_3">Total Violentos: ' + estado_3 + ' </h6>';
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
};