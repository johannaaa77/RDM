document.addEventListener('DOMContentLoaded', function () {
  const recipesContainer = document.getElementById('contenedor-recetas');

//  fetch('https://apirecetas.iacst.space/recetas/25')
//  .then(function(response) {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Error en la respuesta de la API');
//     }
//   })
//   .then(function(data) {
//     // Hacer algo con los datos de respuesta
//   })
//   .catch(function(error) {
//     // Manejar el error
//   });

  fetch('https://apirecetas.iacst.space/recetas/25', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(response => response.json())
  .then(data => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row', 'd-flex', 'justify-content-center', 'grid');
        for (let i = 0; i < data.data.length; i++) {
            const recipe = data.data[i];
            const recipeDiv = document.createElement('div');
          recipeDiv.classList.add('col-md-3', 'mb-4'); // Ajuste para columnas en Bootstrap

          console.log(recipe.nombre);

          // Utilizar backticks para generar el contenido HTML
          recipeDiv.innerHTML = `
              <div class="card" style="width: 18rem;">
                  <img src="img/cheems-waso.png" class="card-img-top img-thumbnail" alt="${recipe.nombre}" style="width: 270px; height: 270px;">
                  <div class="card-body">
                    <h5 class="card-title">${recipe.nombre}</h5>
                    <p class="card-text">${recipe.ingrediente}</p>
                    <a href="#" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-${recipe.id}">Ver preparación</a>
                  </div>
              </div>
        
              <!-- Modal -->
              <div class="modal fade" id="modal-${recipe.id}" tabindex="-1" aria-labelledby="modalLabel-${recipe.id}" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="modalLabel-${recipe.id}">${recipe.nombre}</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <img src="img/cheems-waso.png" alt="${recipe.nombre}" class="img-fluid">
                              <br>
                              ${recipe.preparacion}
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          </div>
                      </div>
                  </div>
              </div>
          `;

          rowDiv.appendChild(recipeDiv);
        }
    //   data.forEach(recipe => {
    //       const recipeDiv = document.createElement('div');
    //       recipeDiv.classList.add('col-md-3', 'mb-4'); // Ajuste para columnas en Bootstrap

    //       console.log(recipe.nombre_receta);

    //       // Utilizar backticks para generar el contenido HTML
    //       recipeDiv.innerHTML = `
    //           <div class="card" style="width: 18rem;">
    //               <img src="img/cheems-waso.png" class="card-img-top img-thumbnail" alt="${recipe.nombre_receta}" style="width: 270px; height: 270px;">
    //               <div class="card-body">
    //                 <h5 class="card-title">${recipe.nombre_receta}</h5>
    //                 <p class="card-text">${recipe.ingrediente_receta}</p>
    //                 <a href="#" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-${recipe.id}">Ver preparación</a>
    //               </div>
    //           </div>
        
    //           <!-- Modal -->
    //           <div class="modal fade" id="modal-${recipe.id}" tabindex="-1" aria-labelledby="modalLabel-${recipe.id}" aria-hidden="true">
    //               <div class="modal-dialog">
    //                   <div class="modal-content">
    //                       <div class="modal-header">
    //                           <h1 class="modal-title fs-5" id="modalLabel-${recipe.id}">${recipe.nombre_receta}</h1>
    //                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                       </div>
    //                       <div class="modal-body">
    //                           <img src="img/cheems-waso.png" alt="${recipe.nombre_receta}" class="img-fluid">
    //                           <br>
    //                           ${recipe.preparacion_receta}
    //                       </div>
    //                       <div class="modal-footer">
    //                           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    //                       </div>
    //                   </div>
    //               </div>
    //           </div>
    //       `;

    //       rowDiv.appendChild(recipeDiv);
    //   });

      recipesContainer.appendChild(rowDiv);
  })
  .catch(error => console.error('Hubo un error al obtener los datos:', error));
});
