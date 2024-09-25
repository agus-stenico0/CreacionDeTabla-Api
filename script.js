// Hacer la solicitud para obtener los datos
fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
        // Llamar a la función para generar la tabla
        generarTabla(data);
    })
    
    const tbody = document.querySelector('#usersTable tbody');
// Función para generar la tabla
function generarTabla(usuarios) {
    tbody.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
     
     let tabla = `
        <tbody>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].name}</td>
            <td>${usuarios[i].email}</td>
            <td>${usuarios[i].address.city}</td>
        </tbody>  
     `;
 
     // Agregar la tarjeta al contenedor
     tbody.innerHTML += tabla;
   }
 
 }
