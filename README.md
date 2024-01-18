# API
API-REST facilita la gestión de tareas. Se basa en un modelo cliente-servidor, donde los clientes pueden interactuar con el servidor a través de formularios y peticiones HTTP.

**También se especifica el método de rutas correspondiente**

- *Create = post* 

- *Read = get*

- *Update = put*

- *Delete = delete*


## INSTALACIÓN - CONFIGURACIÓN
Para usar el proyecto en su repositorio local, siga cuidadosamente las indicaciones, teniendo en cuenta que debe clonar el repositorio
inicialmente, luego siga las instrucciones indicadas:

- Inicializar el proyecto
```code
    npm init 
```
- Instalar dependencias del proyecto
```code
    npm i
```
- Crear el fichero .env *(Variables de entorno para la base de datos )*
```code
    .env
```
## TECNOLOGÍAS
Algunas tecnologías usadas en el proyecto:
 [![Expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]()    [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()    [![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)]()

### Rutas API

Para consumir la API correctamente se debe tener en cuenta la siguiente estructura...

#### *endpoint/Doctores*
```http
  GET      /api/task
  GET      /api/task/{id}
  POST     /api/task/{body}
  PUT      /api/task/{id}
  DELETE   /api/task/{id}
```
##### **body**
```json
    {
        "":"666",
        "":"Juanito",
        "":"Alimaña"
    }   

```

-----

#### *endpoint/Pacientes*
```http
  GET      /api/pacientes
  GET      /api/pacientes/{id}
  POST     /api/pacientes/{body}
  PUT      /api/pacientes/{id}
  DELETE   /api/pacientes/{id}
```
##### **body**
```json
    {
        "id_numeroCedula":"777",
        "nombre":"Angel",
        "apellido":"Casallas",
        "fechaNacimiento":"2000-08-28",
        "id_telefono":"315678"
    } 
#### *Consultorio*
```http
  GET      /api/consultorio
  GET      /api/consultorio/{id}
  POST     /api/consultorio/{body}
  PUT      /api/consultorio/{id}
  DELETE   /api/consultorio/{id}
```
##### **body**
```json
    {
        "id_consultorio":"101",
        "direccionConsultorio":"Transversal 78H bis#41c-48 - Compensar"
    }
```
-----

#### *endpoint/Especialización*
```http
  GET      /api/especialidad   
  GET      /api/especialidad/{id}
  POST     /api/especialidad/{body}
  PUT      /api/especialidad/{id}
  DELETE   /api/especialidad/{id}
```
##### **body**
```json
    {
        "especialidad":"Neurologia",
        "descripcion":"Medicina especializada"
    }
```

-----
#### *endpoint/Cita*
```http
  GET      /api/cita   
  GET      /api/cita/{data}
  POST     /api/cita/{id}
  PUT      /api/cita/{id}
  DELETE   /api/cita/{id}
```
##### **body**
```json
    {
        "fecha_hora":"2023-12-07T12:00:00",
        "id_profesional":"56254652",
        "id_numeroCedula":"98723421",
        "id_especializacion":"1",
        "id_consultorio":"101"
    } 
```


### Ejemplo para el uso de parametros
#### Get item {id} 

```http
  GET /api/consultorio/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id del recurso |
