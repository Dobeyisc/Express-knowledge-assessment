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

#### *endpoint/Api/task*
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
        "name":"Stephen Hoking",
        "completed":true,
        "description":"Lorem Ipsum has been the industry's standard dummy "
    }   

```

-----



