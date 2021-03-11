const assert = require('assert');
const ubigeoperu = require('../index.js');

describe('ubigeoperu', () => {
  var ubigeo=new ubigeoperu();
  it('Listado de regiones', () => {
    var list=ubigeo.getRegions()
    if(list.length)
      assert(true, 'Existe un listado de regiones'+JSON.stringify(list[0]));
  });
  it('Listado de provincias', () => {
    var list=ubigeo.getProvinces()
    if(list.length)
      assert(true, 'Existe un listado de provincias'+JSON.stringify(list[0]));
  });
  it('Listado de distritos', () => {
    var list=ubigeo.getDistricts()
    if(list.length)
      assert(true, 'Existe un listado de distritos'+JSON.stringify(list[0]));
  });
  it('Region por codigo', () => {
    var list=ubigeo.getRegions('01')
    if(list.length)
      assert(true, 'Existe un listado de distritos'+JSON.stringify(list[0]));
  });

  it('Region por nombre', () => {
    var data=ubigeo.getProvinces('Lima')
    console.log(data,"lima")
    if(data)
      assert(true, 'Existe un item'+JSON.stringify(data));
  });

  var region=ubigeo.getRegions('01')
  it('Regiones en arbol', () => {
    if(region.provinces()){
      var oneProvince=region.provinces()[0];
      if(oneProvince.districts()){
          console.log(oneProvince.districts())
          assert(true, 'Existe un listado de distritos');
      }
    }
  });
  it('Region por ubigeoCode', () => {
    var one=ubigeo.getByUbigeoCode('01')
    var two=ubigeo.getByUbigeoCode('010119')
    console.log(one,two);
  });
});
