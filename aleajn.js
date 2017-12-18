// Librería para el generador aleatorio JN
// Modo Librería.
// Requiere jquery 1.11.1
// v0.3

var aleajn = {
	
	load: function(csvFile){
		// Esta función carga una lista de palabras a partir de un CSV.
		// El CSV debe tener una única columna y no tener encabezado.
		
		var miArray = [];
		console.log("Leyendo lista de " + csvFile);
				
		var miCSV = $.ajax({
			type: "GET",
			url: csvFile,
			dataType: "text",
			async: false,
			success: function(data) { 
				miLista = CSVToArray( data );
				for (i=0; i < miLista.length; i++){
					miArray.push(miLista[i][0]);
				}
			}			
		});
		console.log("Lista cargada: " + miArray);
		return miArray;
	},
	
	choose: function(listName){
		// Este método escoge un elemento al azar de una lista simple
		// proporcionada como un array. Normalmente, crearemos
		// antes esta lista con el método load, a partir de un csv.
		
		var instante = new Date();
		var miAleatorio = Math.random(instante.getTime());
		if (typeof listName == 'undefined'){
			console.log("Ojo a la lista " + listName);
		}
		var miElemento = Math.floor( miAleatorio * ( listName.length) ) ;
		return listName[miElemento];
		
	},
	
	genderAdj: function ( adjetivo, genero ){
		// Escoge el género y número adecuado de un objetivo de una lista separada por el carácter "|"
		// Parte de listas de adjetivos en la forma ms|fs|mp|fp (rojo|roja|rojos|rojas)
	
		var adjArr = adjetivo.split("|");
		switch ( genero ){
			case "ms":
				return adjArr[0];
				break;
			case "fs":
				return adjArr[1];
				break;
			case "mp":
				return adjArr[2];
				break;
			case "fp":
				return adjArr[3];
				break;	
		}
	},
	
	chooseWP: function ( listName , propertiesList ){
		// Escoge un elemento al azar de una lista de elementos complejos.
		// En una lista de elementos complejos, cada uno tiene propiedades separadas
		// por el carácter |. Este método devuelve un objeto donde cada propiedad
		// tiene un nombre definido en el array propertiesList, y un valor extraído de
		// la lista.
		// Por ejemplo:
		// p = aleajn.chooseWP(["rey|masculino","reina|femenino"],["personaje","genero"]);
		// console.log(p.personaje + " es de género " + p.genero)
		
		
		var objArr = this.choose(listName).split("|");
		var miObjeto = {};
		for (i=0 ; i < propertiesList.length; i++){
			miObjeto[propertiesList[i]] = objArr[i];
		}
		
		return miObjeto;
	},
	
	randint: function (inf,sup) {
		//Devuelve un aleatorio entero entre dos valores. Usa el momento actual como semilla.
		
		var instante2 = new Date();
	
		var miAleatorio2 = Math.random(instante2.getTime());
		
		return Math.round ( inf + Math.floor( miAleatorio2 * (sup - inf) ));
	},
	
	random: function (inf,sup) {
		//Devuelve un aleatorio  entre dos valores. Usa el momento actual como semilla.
		
		var instante3 = new Date();
	
		var miAleatorio3 = Math.random(instante3.getTime());
		
		return inf + ( miAleatorio3 * (sup - inf) );
	},
	
	dice: function (n, m){
		// Tira ndm
		var tirada = 0;
		for ( i = 1; i < n+1; i++){
			tirada += this.randint(1,m);
		}
		return tirada;
	},
	
	roll: function (n,m,cd){
		//Realiza una tirada de ndm y la compara con una clase de dificultad (CD).
		//Si el resultado es mayor o igual que la CD, devuelve VERDADERO. Si no, devuelve FALSO.
		if (this.dice(n,m) >= cd){
			return true;
		}
		else {
			return false;
		}
		
	},
	
	d20: function (cd) {
		//Tira 1d20 y lo compara con una clase de dificultad, como una prueba de rol.
		//Si el resultado es mayor o igual que la CD, devuelve VERDADERO. Si no, devuelve FALSO.
		if ( this.randint (1,20) >= cd){
			return true;
			}	
		else { 
			return false;
		}
	},
	
	cap: function (string) {
		//Devuelve una cadena con el primer carácter en mayúsculas.
		
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	title: function ( string ){
		//Devuelve un texto en tipo título (las palabras principales llevan la primera en mayúscula)
		var misPalabras = string.toLowerCase().split(" ");
		var nuevasPalabras = "";
		var excepciones = ["el","la","los","las","de","del","y"];
		for ( i = 0 ; i < misPalabras.length ; i++ ){
			if ( excepciones.indexOf(misPalabras[i]) > -1 ) {
			nuevasPalabras += " " + misPalabras[i];
			continue;
			}
		nuevasPalabras += " " + this.cap(misPalabras[i]);
		}
		
		return nuevasPalabras.slice(1);
	}
	

	
}
