## Desarrollo de API paso a paso

1. Descripcion de los archivos y carpetas en la raíz del proyecto:

   - `.env`: Archivo que contiene variables de entorno para la configuración de la API.
   - `.env.example`: Archivo de ejemplo que muestra la estructura y las variables que deben definirse en el archivo `.env`.
   - `.gitignore`: Archivo que especifica qué archivos y carpetas deben ser ignorados por el control de versiones Git.
   - `bookshop.db`: Archivo de base de datos que almacena la información relacionada con la librería.
   - `package-lock.json` y `package.json`: Archivos que describen las dependencias y configuraciones del proyecto en formato JSON.

2. Descripcion de la carpeta `src` que contiene el código fuente de la API:

   - `app.js`: Archivo principal de la aplicación que inicializa y configura el servidor de la API.
   - `config`: Carpeta que contiene archivos de configuración para diferentes aspectos de la API.
     - `dbConfig.js`: Archivo de configuración de la base de datos, donde se establece las conexion.
     - `userConfig.js`: Archivo de configuración específico donde se definen la creación del primer usuario.

3. Descripcion de la carpeta `controllers` que contiene los controladores de la API:

   - `authController.js`: Controlador encargado de la autenticación del usuario.
   - `bookController.js`: Controlador encargado de la gestión de libros en la librería.
   - `index.js`: Archivo que exporta todos los controladores para ser utilizados en otros módulos.
   - `libraryController.js`: Controlador encargado de la gestión de la librería en general.
   - `userController.js`: Controlador encargado de la gestión de usuarios.

4. Descripcion de la carpeta `middlewares` que contiene los middlewares de la API:

   - `authMiddlewares.js`: Middleware encargado de la autenticación de las solicitudes (CREATE-UPDATE-DELETE).
   - `loggerMiddlewares.js`: Middleware encargado de registrar y gestionar los registros de actividad de la API.

5. Descripcion de la carpeta `models` que contiene los modelos de datos de la API:

   - `bookModel.js`: Modelo de datos para representar la entidad "libro".
   - `index.js`: Archivo que exporta todos los modelos para ser utilizados en otros módulos.
   - `libraryModel.js`: Modelo de datos para representar la entidad "librería".
   - `userModel.js`: Modelo de datos para representar la entidad "usuario".

6. Descripcion de la carpeta `providers` que contiene los proveedores de datos de la API:

   - `authProvider.js`: Proveedor de datos encargado de verificar la autenticación.
   - `bookProvider.js`: Proveedor de datos encargado de la gestión de libros en la base de datos.
   - `index.js`: Archivo que exporta todos los proveedores para ser utilizados en otros módulos.
   - `libraryProvider.js`: Proveedor de datos encargado de la gestión de la librería en la base de datos.
   - `userProvider.js`: Proveedor de datos encargado de la gestión de usuarios en la base de datos.

7. Descripcion de la carpeta `routes` que contiene las rutas de la API:

   - `authRoute.js`: Ruta que maneja las solicitudes relacionadas con la autenticación (LOGIN).
   - `bookRoute.js`: Ruta que maneja las solicitudes relacionadas con los libros (CRUD).
   - `index.js`: Archivo que exporta todas las rutas para ser utilizadas en otros módulos.
   - `libraryRoute.js`: Ruta que maneja las solicitudes relacionadas con la librería (CRUD).
   - `userRoute.js`: Ruta que maneja las solicitudes relacionadas con los usuarios (CRUD).

8. Descripcion de la carpeta la carpeta `services` que contiene los servicios de la API:
   - `authService.js`: Servicio encargado de la lógica de autenticación .
   - `bookService.js`: Servicio encargado de la lógica relacionada con los libros.
   - `index.js`: Archivo que exporta todos los servicios para ser utilizados en otros módulos.
   - `libraryService.js`: Servicio encargado de la lógica relacionada con la librería.
   - `userService.js`: Servicio encargado de la lógica relacionada con los usuarios.
