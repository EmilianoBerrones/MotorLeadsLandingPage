El siguiente contenido es nuestra solución para el reto de Desarrollo e Implantación de Sistemas de Software dirigido hacia la empresa MotorLeads.

# Tabla de contenidos

1. [Prerrequisitos](#prerrequisitos)
2. [Descarga del repositorio y modo de uso](#descarga-del-repositorio-y-modo-de-uso)
3. [Visualizar en modo desarrollador](#visualizar-en-modo-desarrollador)
4. [Funcionalidades que atiende el modelo](#funcionalidades-que-atiende-el-modelo)
5. [Funcionalidades que atenderá el back-end](#funcionalidades-que-atenderá-el-back-end)
6. [Endpoints, métodos HTTP, y estructura del body para cada funcionalidad](#endpoints-métodos-http-y-estructura-del-body-para-cada-funcionalidad)
7. [Validaciones, códigos de error, y respuestas de los servicios asociados a cada funcionalidad.](#validaciones-códigos-de-error-y-respuestas-de-los-servicios-asociados-a-cada-funcionalidad)

# 1. Prerrequisitos

Esta es una página de inicio para MotorLeads y compañeros de semestres anteriores, construida con Quasar y Vue 3. Dentro
de esta documentación, cada que se menciona el uso de una terminal estoy usando Windows Powershell, dentro de Windows.
Si usas MacOS o Linux, por favor instala los requerimientos de acuerdo a tu sistema operativo

## Instalar Node.js y NPM

Node.js es un entorno de ejecución para poder visualizar la página web. NPM es un sistema de gestión de paquetes.
Básicamente, es lo que nos va a ayudar para instalar el resto de requisitos listados en este apartado, al igual que
ejecutar scripts para poder visualizar la página. **NPM se instala cuando instalas Node.js**.
Consulta la [página oficial de Node.js](https://nodejs.org/en/download) para instalar Node.js y NPM. Puedes comprobar
que está instalado cuando en la terminal
ejecutas los comandos:

 ```
 node --version
 npm --version
 ```

## Instalar VueJs

Vue.js es uno de los frameworks de JavaScript más famosos para desarrollo web, y fue usado para este proyecto. Una vez
instalado NodeJS puedes instalar la interfaz de comando de VueJS usando npm. Dentro de la terminal ejecuta el comando

```
npm install -g @vue/cli
```

Puedes checar la versión de Vue con el comando

```
vue --version
```

## Instalar Quasar

Quasar es un framework para Vue.js para agregarle funcionalidad de interfaces de usuario. Provee básicamente todos los
elementos gráficos dentro de este proyecto, incluyendo campos de texto, imágenes, barras de navegación, etcétera. Una
vez ya tengas instalado NodeJS, usa npm para instalar la interfaz de comando de Quasar en tu dispositivo.

```
npm install -g @quasar/cli
```

Puedes comprobar la versión de Quasar usando el siguiente comando:

```
quasar --version
```

### Nota

Es probable que la ejecución de scripts esté deshabilitada en el dispositvo. Sucede cuando al ejecutar un comando se
muestra lo siguiente:
![Imagen de error al ejecutar un comando](/images/error.png)
Para habilitar la ejecución de scripts dentro del equipo (y evitar que suceda este error) sigue los siguientes pasos:

1. Inicia _Windows PowerShell_ en modo administrador: <br>
   ![Imagen ilustrativa para iniciar PowerShell en modo administrador](/images/powershell1.png)
2. Ejecuta el comando `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`, y selecciona _Sí a todo_ (o presiona la
   tecla 'O'). <br>
   ![Imagen de ejecucion del primer comando](/images/powershell2.png)
3. Comprueba que se modificaron los permisos ejecutando `Get-ExecutionPolicy -List`. <br>
   ![Imagen de ejecucion del segundo comando](/images/powershell3.png)
4. Cierra la ventana y vuelve a abrir _Windows PowerShell_. Intenta correr el script conflictivo de nuevo. En mi caso
   era `vue --version`. <br>
   ![Imagen de ejecucion del comando de comprobacion](/images/comprobacion.png)

# 2. Descarga del repositorio y modo de uso

En la página de este proyecto, dale clic al botón que dice `< > Code`, y descarga el ZIP. <br>
![Imagen de descarga del ZIP dentro de GitHub](/images/downloadzip.png) <br>
Posteriormente, usa el IDE de tu preferencia (nosotros usamos WebStorm para este proyecto). Y ubícate en la carpeta del
proyecto (MotorLeadsLandingPage).

# 3. Visualizar en modo desarrollador

## Si es la primera vez que inicializas el repositorio

Una vez estés ubicado en la carpeta del proyecto, abre la terminal del editor de código y ejecuta los siguientes
comandos:

```
cd motorleadspage
npm install
quasar dev
```

- El primer comando es para ubicarte en la carpeta de [motorleadspage](/motorleadspage) y poder compilar el proyecto.
- El segundo comando es para instalar las dependencias del proyecto.
- El tercer comando es para iniciar la app en modo de desarrollador, y visualizarla en un entorno local.
- En caso de tener problemas para ejecutar el comando, asegúrate que la terminal esté ubicada en la carpeta del
  proyecto (MotorLeadsLandingPage/motorleadspage)

## Si no es la primera vez que inicializas el repositorio

Ejecuta solamente el primer y el último comando: `cd motorleadspage` y `quasar dev`.

# 4. Funcionalidades que atiende el modelo

Las diversas funcionalidades que deben atender los servicios web del proyecto CEPAI (Car Estimated Pricing using
Artificial Intelligence) incluyen:

Ingreso de Datos del Vehículo:

- Permitir al usuario mandar un JSON con los datos del vehículo para el cálculo de su precio estimado.
- Validar los datos ingresados para asegurar que estén completos, y que sigan el formato indicado.

Estimación del Precio:

- Calcular el precio estimado del vehículo utilizando el modelo de inteligencia artificial.
- Proporcionar al usuario el precio estimado.

Seguridad de Datos:

- Implementar el uso de tokens para acceder a la API.

Gestión de Errores:

- Manejar errores y excepciones de manera adecuada para proporcionar una experiencia fluida al usuario.

Mantenimiento del Modelo:

- Realizar pruebas y validaciones del modelo antes de implementarlo en producción.

Documentación y Soporte:

- Proporcionar documentación detallada de la API y sus servicios para facilitar su integración y uso.

# 5. Funcionalidades que atenderá el back-end

### Login

- Autenticación de cuenta
- Desplegar un mensaje de datos incorrectos en caso de ser necesario
- Cambiar de pantalla al realizar la validación de datos

### Búsqueda secuencial

- Trabajar en conjunto con la base de datos
- Desplegar todos los campos de la información del vehículo
- Cambiar de pantalla al realizar la selección de datos

### Despliegue de precio y gráficas

Mostrar gráficas y precio correcto al momento de mandar los datos en la página anterior
Cálculo del costo con los datos presentados

# 6. Endpoints, métodos HTTP, y estructura del body para cada funcionalidad

Nuestra API tiene como función básica el ingreso de datos a través de un JSON, y te regresa como resultado un JSON con
el precio estimado del vehículo. Este sería nuestro único endpoint de la API (/precio-estimado). Como método HTTP,
nosotros usamos el POST (por medio de postman), para enviar las características a la API y obtener el precio estimado.
JSON de entrada:

```
{
  "Price": 25000,
  "Levy": 1500,
  "Manufacturer": "Toyota",
  "Model": "Corolla",
  "Prod. year": 2018,
  "Category": "Sedan",
  "Leather interior": true,
  "Fuel type": "Gasoline",
  "Engine volume": 1.8,
  "Mileage": 30000,
  "Cylinders": 4,
  "Gear box type": "Automatic",
  "Drive wheels": "Front",
  "Doors": 4,
  "Wheel": "Left wheel",
  "Color": "Silver",
  "Airbags": 6
}
```

JSON de salida:

```
{precio: 1500}
```

# 7. Validaciones, códigos de error, y respuestas de los servicios asociados a cada funcionalidad.

## En la página web

### Login

Validaciones:

- El texto ingresado en el campo de "Correo" necesita tener formato de correo.
- Ninguno de los campos "Correo" o "Contraseña" pueden estar vacíos si se quiere iniciar sesión.

Códigos de error:

- En caso de que algún campo no sea válido, se mostrará un texto que informe al usuario.

### Ingreso de características del vehículo

Validaciones:

- Ningún campo puede estar vacío
- En el kilometraje, el texto ingresado necesita tener formato de número.

Códigos de error:

- En caso de que algún campo no sea válido, se mostrará un texto que informe al usuario.

### Cotización del carro usado

No hay validaciones relevantes en esta pantalla.

## En la API

### Ingreso de Datos del Vehículo:

- Todos los campos son obligatorios.
- Todos los campos numéricos deben de ser mayor a cero.
- Todos los campos de cadena no pueden ser una cadena vacía `" "`.

### Respuestas y Códigos de Error:

- 200 OK: Datos ingresados correctamente.
- 400 Bad Request: Error de validación, falta algún campo o valor no válido.
- 500 Internal Server Error: Error interno del servidor.

### Procesamiento de Datos y Estimación del Precio:

Validaciones:

- Verificar que todos los campos necesarios estén presentes y sean válidos.
  Respuestas y Códigos de Error.
- 200 OK: Procesamiento exitoso, devuelve el precio estimado.
- 400 Bad Request: Error de validación, datos incorrectos o faltantes.
- 404 Not Found: No se encontraron datos para procesar.
- 500 Internal Server Error: Error interno del servidor.

