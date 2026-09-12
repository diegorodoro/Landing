# Imágenes reales

Los mockups de la landing son HTML+CSS animados (no pesan y no requieren archivos).
Esta carpeta es para las imágenes que sí necesitan archivo. Huecos pendientes:

| Archivo            | Uso                                    | Medidas       |
|--------------------|----------------------------------------|---------------|
| `og.jpg`           | Vista previa al compartir el enlace     | 1200 x 630 px |
| `caso-1.jpg`       | Foto/captura del caso de referencia     | 1600 x 1000 px|
| `equipo/*.jpg`     | Solo si algún día queréis bios con foto | 800 x 800 px  |

Para usarlas, impórtalas con `astro:assets` (optimiza a WebP/AVIF y evita CLS):

```astro
---
import { Image } from "astro:assets";
import caso from "../assets/caso-1.jpg";   // ojo: src/assets, no public/
---
<Image src={caso} alt="Descripción real de la imagen" widths={[400, 800, 1600]} />
```

Regla: lo que va en `public/` se sirve tal cual, sin optimizar.
Lo que quieras que Astro optimice va en `src/assets/`.
