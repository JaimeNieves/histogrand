# histogrand
Generador de valores aleatorios según histogramas personalizados
creado por Jaime Nieves (www.jaimenieves.es)

v1.0

histogrand permite generar juegos de datos aleatorios a partir de una distribución de probabilidades fácilmente configurable por el usuario.

La aplicación generará un CSV con un conjunto de valores que estarán siempre entre el máximo y el mínimo definidos por el usuario. 

La distribución estadística del conjunto se ajustará al patrón de 19 pesos indicados por las barras verticales. Las barras pueden modificarse simplemente pulsando sobre ellas, o pueden usarse los botones de la parte superior para cargar algunas distribuciones estándar o cambiarlas al azar.

Cada barra representa un peso estadístico relativo; una barra dos veces más alta que otra generará dos veces más valores en su correspondiente intervalo.

El factor de aleatoriedad añade una variación aleatoria adicional a los datos generados. El valor por defecto es 20, lo que expresa que los valores generados pueden ser hasta un 20% más altos o más bajos que lo que corresponde a su intervalo.

Roadmap:
 - Obtener una curva suavizada a partir del histograma para obtener valores de forma continua.
 - Generador de datos categorizados siguiendo pesos aleatorios (en vez de numéricos).
 - Generador de puntos con coordenadas geográficas según una distribución espacial aleatoria en un extent definido.
