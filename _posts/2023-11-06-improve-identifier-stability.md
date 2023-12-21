---
title:  "GBIF intenta mejorar la estabilidad de los identificadores controlando los cambios de los occurrenceID"
date:   2023-11-06 09:00:00 -0500
categories: ["DataBlog"]
lang-ref:
background: https://static.antweb.org/images/casent0650521/casent0650521_p_1_high.jpg
imageLicense: |
  _Neivamyrmex clavifemur_ Borgmeier, 1953 [collectada](https://www.gbif.org/occurrence/3406930306){:target="_blank"} en Sucumbíos, Ecuador por D. Forrister. Fotografía por la [Academia de Ciencias de California](https://www.gbif.org/dataset/13b70480-bd69-11dd-b15f-b8a03c50a862){:target="_blank"}. [(CC BY-SA)](https://creativecommons.org/licenses/by-sa/4.0/)
toc: true
---

`Este post fue publicado originalmente en el DataBlog de GBIF por Kumiko Totsu`

Desde 2022, GBIF ha estado monitorizando los cambios en los campos `occurrenceID` de los conjuntos de datos para mejorar la estabilidad de los identificadores de GBIF. Detenemos la ingesta de datos cuando se detecta que más de la mitad de los registros de ocurrencia de la última versión tienen `occurrenceID` diferentes a los de la versión anterior (en GBIF.org). Este proceso de validación de identificadores crea automáticamente problemas en GitHub y el servicio de asistencia de GBIF se pone en contacto con los editores para verificar los cambios de `occurrenceID`.

El objetivo en este proceso es minimizar los cambios de los identificadores de GBIF y apoyar las necesidades de citación y vinculación de datos. Aquí explicamos algunos antecedentes sobre la estabilidad de los identificadores, cómo gestionamos los identificadores en GBIF por `occurrenceID` y qué opciones podemos tomar para los problemas con los identificadores.

## ¿Qué son los identificadores de GBIF? ¿Por qué es importante conservarlos?

Una vez que los conjuntos de datos están registrados en GBIF, se asigna un gbifID único (cadena numérica como `1676099845`) a cada registro de ocurrencia para crear una URL como `https://www.gbif.org/occurrence/1676099845`. Aunque estos identificadores no están diseñados para ofrecer identificadores persistentes en primer lugar, estas URLs se usan para citar especímenes individuales o registros de observación fuera de los servicios de GBIF, por ejemplo en [Bionomia](https://bionomia.net/). Nos gustaría evitar la pérdida de enlaces tanto como podamos, para apoyar las citas. Más detalles sobre las demandas hacia los identificadores de GBIF se introducen [en esta noticia](https://www.gbif.org/news/2M3n65fHOhvq4ek5oVOskc/new-processing-routine-improves-stability-of-gbif-occurrence-ids). Gracias a los esfuerzos y colaboración con los editores hacia este proyecto, el porcentaje de `occurrenceID` que cambiaron en los registros de especímenes ha bajado del 3,75% (2021-2022) al 1,39% (2022-2023) como se informó en la 30ª reunión del Consejo de Administración de GBIF (GB30).

## La gestión de los identificadores GBIF depende de los occurrenceID

Los identificadores de GBIF (gbifIDs) son creados automáticamente por nuestro sistema, usando los occurrenceID proporcionados por los editores. Los `occurrenceID` son las claves para la relación entre los registros existentes disponibles en GBIF.org y los registros actualizados en la última versión en los servicios web de alojamiento. Esto significa que si los `occurrenceID` cambian, no podremos relacionarlos. Cuando un registro tiene un nuevo `occurrenceID`, lo tratamos como un "nuevo" registro y le asignamos un nuevo identificador de GBIF. El registro con el antiguo `occurrenceID` (que existe en GBIF.org pero no en la última versión en los servicios web de hospedaje) se considerará borrado del conjunto de datos, por lo que la URL del registro será obsoleta como esta ocurrencia.

Vea la figura de abajo que es un ejemplo de actualización de un conjunto de datos (en este caso, el cambio en el código del catálogo).

- Ejemplo superior (sin cambios de `occurrenceID`): La URL de la incidencia seguirá siendo la misma.
- Ejemplo inferior (cambios de `occurrenceID`): Se emitirá una nueva URL para los datos actualizados y la antigua URL quedará obsoleta.

![Imagen](https://data-blog.gbif.org/post/2023-11-01-improve-identifier-stability/change_of_occurrenceIDs.png "Imagen")

El ejemplo anterior utiliza un "triplete", la combinación de `institutionCode`, `collectionCode` y `catalogNumber` para los `occurrenceID` (Por ejemplo: `urn:catalog:UWBM:Bird:89776`). Sin embargo, en general se recomienda utilizar valores enteros o de cadena sin sentido para los ID. Actualmente no existen reglas estrictas para los `occurrenceID`, aparte de la exclusividad dentro de un conjunto de datos. Después de las discusiones con nuestra comunidad [(como este tema de GitHub)](https://github.com/tdwg/dwc/issues/491), GBIF ha pasado a recomendar `occurrenceID` sin sentido para promover **identificadores persistentes**. Un identificador único a nivel mundial como UUID (por ejemplo, `000866d2-c177-4648-a200-ead4007051b9`) puede ser una de las mejores prácticas según lo recomendado por [TDWG aquí](http://rs.tdwg.org/dwc/terms/occurrenceID).

No se preocupe si ya ha utilizado el triplete u otro contenido significativo para los `occurrenceID` en sus conjuntos de datos publicados. En caso de que cambie los `occurrenceIDs` existe una forma de migrar los gbifIDs y las URLs de los antiguos `occurrenceID` a los nuevos occurrenceIDs que se explicará con más detalle en las siguientes secciones.

> **Nota:** Si cambia el campo `catalogNumber`, el `catalogNumber` anterior puede rellenarse en `otherCatalogNumbers`, que se utiliza para la agrupación de datos [(consulte esta entrada del blog)](https://data-blog.gbif.org/post/clustering-occurrences/).

## Tres opciones para tratar los problemas de identificación

La ingesta de datos se inicia después de que los editores actualicen y publiquen un conjunto de datos en los servicios web de alojamiento. Durante la validación del identificador, el sistema cuenta los registros de ocurrencia y comprueba la proporción de nuevos `occurrenceID`. Si supera el 50 % del recuento de registros, la ingestión de datos se detendrá y se creará una incidencia en [GitHub](https://github.com/gbif/ingestion-management/issues) para cada conjunto de datos.

Ofrecemos tres opciones para tratar los problemas de los identificadores.

|No.|Opción|¿Quien lo puede hacer?|¿Qué pasa después?|
|---|------|----------------------|------------------|
|1 |Reanudar la ingestión de datos permitiendo cambios delos `occurrenceID`|Servicio de asistencia de GBIF|Los identificadores GBIF bajo los antiguos `occurrenceID` serán obsoletos y se darán nuevos identificadores GBIF para los nuevos `occurrenceID`|
|2|Volver a cambiar los `occurrenceID` (es decir, restaurar los antiguos `occurrenceID`)|Publicadores|La ingesta de datos se reanudará automáticamente tras la publicación y los identificadores de GBIF seguirán siendo los mismos.|
|3|Migrar los identificadores GBIF de los antiguos `occurrenceID` a los nuevos `occurrenceID`|Servicio de asistencia de GBIF[^1]|La ingesta de datos se reanudará manualmente y los identificadores GBIF seguirán siendo los mismos.|


[^1]: Se debe proveer una lista con los `occurrenceID` nuevos y viejos.