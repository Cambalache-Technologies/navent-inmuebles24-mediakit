# Landing Page con Marketing Cloud (CloudPage)
Para trabajar en Cloud Pages de Marketing Cloud se recomienda seguir el siguiente flujo de trabajo para brindarle orden, organización y seguimiento al código:

1. Inicializar un repositorio de código con Github.
1. Crear los assets en Marketing Cloud y hacer la inyección del codigo crudo con AMPScript para agilizar su desarrollo (Descripción de cómo hacerlo más abajo).
1. Los archivos que vayan a ser usados para SSJS tienen que ser de formato JSON.
1. Crear una colección en Postman, en caso que no exista, y crear cada request que se vaya a impactar en el SSJS de manera independiente para poder tener agilidad en las pruebas de los formularios.
1. Al finalizar el desarrollo, reemplazar la inyección de codigo crudo por el contenido real en los assets de Marketing Cloud


## Inyección de código crudo para assets de Marketing Cloud
Cada asset de Marketing Cloud acepta la invocación de AMPScript en su codigo, sin excepción. Por lo tanto, usaremos los métodos `TreatAsContent` y `HTTPGet` para inyectar nuestro codigo crudo hosteado en otro lugar (para evitar depender del refresh de las CDN para ver los cambios impactados).
Por ejemplo:
```
%%=TreatAsContent(HTTPGet("https://raw.githubusercontent.com/Cambalache-Technologies/navent-inmuebles24-mediakit/main/index.ssjs"))=%%
```

### Dropbox:
1. Tener tu codigo fuente dentro de las carpetas locales sincronizadas con Dropbox
1. Ir al sitio web de Dropbox y hacer que el link del arhivo que queremos inyectar sea de permisos publicos para los que tengan el link (`Mas` -> `Administrar Permisos` -> `Vínculos` -> `Configuración` -> `Quien tiene acceso` -> `Cualquiera con el vínculo`).
1. Ir al link del archivo que acabamos de hacer publico y reemplazar el `www` por `dl`.
1. Copiar la URL con la corrección de `www` por `dl`.

### Github:
1. Subir el repositorio de codigo.
1. Ir al arhivo deseado a su rama master.
1. Hacer click en el botón de `Raw` que se encuentra arriba del codigo fuente.
1. Copiar la URL a la que fuiste redirigido que inicia con `https://raw.githubusercontent...`