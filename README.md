API de Personas - Node.js con Express y MongoDB

Descripción

Esta API permite gestionar una colección de personas almacenadas en MongoDB. Proporciona un CRUD completo para la colección personas, permitiendo crear, leer, actualizar y eliminar registros.

Tecnologías utilizadas

Node.js

Express.js

MongoDB

Mongoose

'''''''''''''''''''''''''''''''''

Instalación y ejecución

Clonar este repositorio:

git clone <URL_DEL_REPOSITORIO>
cd nodejs~personas

''''''''''''''''''''''''''''''''''

Instalar dependencias:

npm install

Configurar variables de entorno:

Crear un archivo .env

Agregar la variable MONGO_URI con la URL de conexión a MongoDB


'''''''''''''''''''''''''''''''''''''

Iniciar el servidor:

npm start

'''''''''''''''''''''''''''''''''''''

Endpoints disponibles

Obtener todas las personas con filtros opcionales

GET /personas

Parámetros opcionales:

edad: Filtra por edad

region: Filtra por región

Ejemplo de uso:

GET /personas?edad=25&region=Sur

Agregar una nueva persona

POST /personas

Body (JSON):

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "genero": "Masculino",
  "telefono": "123456789",
  "edad": 30,
  "region": "Metropolitana"
}

Obtener una persona por ID

GET /personas/{idPersona}

Actualizar una persona por ID

PUT /personas/{idPersona}

Body (JSON):

{
  "nombre": "Carlos",
  "telefono": "987654321"
}

Eliminar una persona por ID

DELETE /personas/{idPersona}

''''''''''''''''''''''''''''''''''''


