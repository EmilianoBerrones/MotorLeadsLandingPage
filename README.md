# MotorLeadsLandingPage

Esta es una página de inicio para MotorLeads y compañeros de semestres anteriores, construida con Quasar y Vue 3. Dentro
de esta documentación, cada que se menciona el uso de una terminal estoy usando Windows Powershell, dentro de Windows.
Si usas MacOS o Linux, por favor instala los requerimientos de acuerdo a tu sistema operativo

# Prerequisitos

## Instalar Node.js y NPM

Node.js es un entorno de ejecución para poder visualizar la página web. NPM es un sistema de gestión de paquetes.
Básicamente es lo que nos va a ayudar para instalar el resto de requisitos listados en este apartado, al igual que
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

# Descarga del repositorio y modo de uso

En la página de este proyecto, dale clic al botón que dice `< > Code`, y descarga el ZIP. <br>
![Imagen de descarga del ZIP dentro de GitHub](/images/downloadzip.png) <br>
Posteriormente, usa el IDE de tu preferencia (nosotros usamos WebStorm para este proyecto). Y ubícate en la carpeta del
proyecto (MotorLeadsLandingPage).

# Visualizar en modo desarrollador
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