# Movie Management System

## Descripción
Este proyecto es un sistema de gestión de películas que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) a través de una aplicación web desarrollada con **Angular** en el frontend y **ASP.NET Core Web API** en el backend, utilizando **SQLite** como base de datos.

## Características
- Listar películas existentes con detalles relevantes.
- Agregar nuevas películas.
- Editar películas existentes.
- Eliminar películas de la base de datos.
- Interfaz visualmente atractiva inspirada en plataformas modernas como Netflix.

## Tecnologías Utilizadas
### Backend:
- **ASP.NET Core Web API**
- **Entity Framework Core**
- **SQLite**

### Frontend:
- **Angular 19**
- **TypeScript**
- **CSS**

## Requisitos Previos
### Herramientas Necesarias:
- **Node.js** (versión 18 o superior)
- **Angular CLI**
- **.NET 6 SDK**
- **SQLite**
- **DB Browser for SQLite** (opcional, para explorar la base de datos)

## Instalación
### Backend:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo/backend
   ```
2. Restaura las dependencias del proyecto:
   ```bash
   dotnet restore
   ```
3. Aplica las migraciones para configurar la base de datos SQLite:
   ```bash
   dotnet ef database update
   ```
4. Inicia la API:
   ```bash
   dotnet run
   ```

### Frontend:
1. Cambia al directorio del frontend:
   ```bash
   cd ../frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación Angular:
   ```bash
   ng serve
   ```
4. Abre el navegador en `http://localhost:4200`.

## Uso
### Operaciones CRUD:
1. **Listar Películas:**
   - Accede a la página principal para ver una lista de todas las películas.
2. **Agregar Película:**
   - Haz clic en el botón "Agregar Película", completa el formulario y guarda los cambios.
3. **Editar Película:**
   - Selecciona una película y edítala a través del botón "Editar".
4. **Eliminar Película:**
   - Elimina una película usando el botón "Eliminar" en la tarjeta de cada película.

## Estructura del Proyecto
```plaintext
/
├── backend/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Program.cs
│   └── appsettings.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── app.module.ts
│   │   ├── assets/
│   │   └── styles.css
│   └── angular.json
└── README.md
```

## Contribuciones
Las contribuciones son bienvenidas. Por favor:
1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y haz commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Haz un push a tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar este proyecto! 😊

