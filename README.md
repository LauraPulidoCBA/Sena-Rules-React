#  SENA Rules — Build & Play en React

Mini SPA desarrollada en React para presentar y gestionar normas básicas del Reglamento del Aprendiz SENA.  
Este proyecto fue creado como práctica individual para aplicar conceptos clave de React: **componentización, props, estado, eventos, composición y diseño declarativo**.

---

##  Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/sena-rules-app.git

2. Instala las dependencias:
    npm install

3. Ejecuta el servidor de desarrollo:
    npm run dev

4. Abre en tu navegador: http://localhost:5173 


##  Estructura de componentes

  ##  Componente                  Descripción
    Header	                      Título y subtítulo de la app
    SearchBar	                    Input controlado para filtrar normas por texto
    CategoryFilter	              Menú  para filtrar por categoría
    ComplianceCounter	            Contador global de normas cumplidas
    RuleList	                    Renderiza la lista de normas filtradas
    RuleCard	                    Tarjeta reutilizable con imagen, título, categoría, descripción y botón de cumplimiento
    Footer	                      Pie de página con créditos y derechos

## Estado y flujo de datos

    Estado global en App.jsx:

      searchText: texto de búsqueda

      category: categoría seleccionada

      completedRules: objeto con normas marcadas como cumplidas

    Props y callbacks se pasan a los componentes hijos

    Los hijos notifican cambios al padre (ej. marcar norma como cumplida)

## Funcionalidades

    Filtrado en tiempo real por texto y categoría

    Botón de cumplimiento alterna entre pendiente y “Compliant ✅”

    Contador global muestra progreso de cumplimiento

    Accesibilidad: uso de aria-pressed, etiquetas <label>, foco visible

    Diseño responsivo para móvil y escritorio

## Diseño visual

    Paleta de colores institucional (verde oscuro, blanco, gris)

    Layout en grid responsivo para tarjetas

    Imágenes representativas en cada norma

    Sombra, espaciado y jerarquía tipográfica

    Footer fijo al final de la pantalla

## Decisiones de diseño

  CategoryFilter: permite filtrar normas por tipo (Presentación, Seguridad, Convivencia)

  ComplianceCounter: motiva al aprendiz mostrando progreso

  Footer: aporta contexto institucional y cierre visual

  Uso de imágenes para mejorar comprensión visual de cada norma