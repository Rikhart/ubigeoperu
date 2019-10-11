# ubigeoperu [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Simple libreria para consultar codigos de ubigeo

## Installation

```sh
$ npm install --save ubigeoperu
```

## Usage

```js
const Ubigeoperu = require('ubigeoperu');

var ubigeo=new Ubigeoperu()

> Para listar todas las regiones:
var regions= ubigeo.getRegions()
[{id,name,level},{}.{}]


* Cada uno de los items es una instancia y cuenta con los siguientes metodos dependiendo del level que maneje:
    Asi por ejemplo para obtener las provincias de una region, probaremos con la primera del array.
    var oneRegion=regions[0];
    var provinces= oneRegion.provinces() 
    [{id,name,level},{},{}]

* Nos devuelve una lista de provincias si deseamos un distrito de una instancia en particular realizamos lo siguiente:

    var oneProvince=provinces[0];
    var districts= oneProvince.districts();
    -> De esta manera llegamos hasta el distrito.

También se cuenta con los siguientes metodos:

**METODOS GENERALES

ubigeo.getRegions(codeOrName)  -> codeOrName [EL CODIGO O EL NOMBRE DE LA REGION]
*Retornara una region en particular a  partir de la cual obtener el resto del arbol.

ubigeo.getProvinces(codeOrName)  -> codeOrName [EL CODIGO O EL NOMBRE DE LA PROVINCIA]
*Retornara una provincia en particular a  partir de la cual obtener el resto del arbol.

ubigeo.getDistricts(codeOrName)  -> codeOrName [EL CODIGO O EL NOMBRE DEL DISTRITO]
*Retornara un distrito en particular a  partir de la cual obtener el resto del arbol.

ubigeo.getByUbigeoCode(code) > te retorna una instancia en especifico


**METODOS DE INSTANCIA
doc.provinces() -> Retorna el listado de provincias que pertenecens a doc.

doc.districts() -> Retorna el listado de distritos que pertenecen a doc.


```
## License

MIT © [Lord Dicus, amor y señor de la KOMARCA]()


[npm-image]: https://badge.fury.io/js/ubigeoperu.svg
[npm-url]: https://npmjs.org/package/ubigeoperu
[travis-image]: https://travis-ci.com/Rikhart/ubigeoperu.svg?branch=master
[travis-url]: https://travis-ci.com/Rikhart/ubigeoperu
[daviddm-image]: https://david-dm.org/Rikhart/ubigeoperu.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Rikhart/ubigeoperu
[coveralls-image]: https://coveralls.io/repos/Rikhart/ubigeoperu/badge.svg
[coveralls-url]: https://coveralls.io/r/Rikhart/ubigeoperu
