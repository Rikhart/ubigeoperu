'use strict';
var ubigeoJson = require('./ubigeo.json')
class ubigeoItem {
    constructor(data) {
        var data = data;
        this.id = data.id;
        this.name = data.name;
        this.level = data.level;
        Object.defineProperty(this, 'data', { value: data, enumerable: false });
    }
    districts() {
        if (this.level == 'province') {
            return this.data.childrens.map(item => {
                return new ubigeoItem(item);
            });
        }
        return console.log(`el elemento es de tipo ${this.level} no contiene distritos`)
    }
    provinces() {
        if (this.level == 'department') {
            return this.data.childrens.map(item => {
                return new ubigeoItem(item);
            });
        }
        return console.log(`el elemento es de tipo ${this.level} no contiene provincias`)
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            level: this.level
        }
    }
}

class Ubigeo {
    constructor() {
        this.allRegions = [];
        this.allProvinces = [];
        this.allDistricts = [];
        for (var item of ubigeoJson) {
            if (item.level == 'department') {
                this.allRegions.push(new ubigeoItem(item))
            }
            for (var p of item.childrens) {
                this.allProvinces.push(new ubigeoItem(p));
                for (var d of p.childrens) {
                    this.allDistricts.push(new ubigeoItem(d))
                }
            }
        }
    }
    getRegions(codeOrName) {
        if (!codeOrName)
            return this.allRegions;
        else {
            codeOrName=String(codeOrName).trim();
            let isnum = /^\d+$/.test(codeOrName);
            codeOrName=isnum?codeOrName.substring(0,2):codeOrName;
            codeOrName=String(codeOrName).trim().toLowerCase();
            return this.allRegions.filter(r => {
                if (String(r.id).toLowerCase() == codeOrName || r.name.toLowerCase() == codeOrName) {
                    return r;
                }
            })[0]
        }
    }
    getProvinces(codeOrName) {
        if (!codeOrName)
            return this.allProvinces;
        else {
            codeOrName=String(codeOrName).trim();
            let isnum = /^\d+$/.test(codeOrName);
            codeOrName=isnum?codeOrName.substring(0,4):codeOrName;
            codeOrName=codeOrName.toLowerCase();
            return this.allProvinces.filter(r => {
                if (String(r.id).toLowerCase() == codeOrName || String(r.name).toLowerCase() == codeOrName) {
                    return r;
                }
            })[0]
        }
    }
    getDistricts(codeOrName) {
        if (!codeOrName)
            return this.allDistricts;
        else {
            codeOrName=String(codeOrName).trim().toLowerCase();
            return this.allDistricts.filter(r => {
                if (String(r.id).toLowerCase() == codeOrName || String(r.name).toLowerCase() == codeOrName) {
                    return r;
                }
            })[0]
        }
    }
    getByUbigeoCode(code) {
        if(code.length==2){
            return this.getRegions(code);
        }else if(code.length==4){
            return this.getProvinces(code);
        }else{
            return this.getDistricts(code);
        }
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Ubigeo();
        }
        return Singleton.instance;
    }
}
module.exports = Singleton;