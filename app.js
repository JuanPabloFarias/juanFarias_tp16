escribirArchivo = require("./datosBici.js")

dhBici = {
    bicicletas: escribirArchivo(),
    buscarBici: function(id){
        let encontrado = this.bicicletas.filter(element => element.id === id)
        if(encontrado.length === 0){ //filter nos deja un arreglo vacio [] si no encuentra nada
            return null;
        }
            return encontrado;
    },
    venderBici: function(id){
        let biciAVender = dhBici.buscarBici(id)
        if(biciAVender.length === 0 ){
            return "Bicicleta no encontrada"
        }
        biciAVender[0].vendida = true;
        return biciAVender;
    },
    biciParaLaVenta: function(){
        return this.bicicletas.filter(element => element.vendida === false)
    },
    totalDeVentas: function(){
        let calcular = this.bicicletas.filter(element => element.vendida === true)
        calcular = calcular.reduce(
            (accumulator, currentValue) => accumulator + currentValue.precio,
            0,)
        return calcular;
    },
    aumentoBici: function(porcentaje){
        this.bicicletas = this.bicicletas.map(
            function (x) {
                x.precio += Math.round(x.precio * (porcentaje/100));
                return x
              })
        return this.bicicletas
    },
    biciPorRodado: function(rodaje){
        return this.bicicletas.filter(element => element.rodado === rodaje)
    },
    listarTodasLasBici: function(){
    //     let acumulador = [];
    // this.bicicletas.forEach(element => {
    //     acumulador.push(element)
    // });
    // return acumulador;
    for (let value of this.bicicletas) {
        console.log(value);
      }
}
}

// console.log(dhBici.buscarBici(1));
// console.log("-------------------------------")
// console.log(dhBici.venderBici(1));
// console.log("-------------------------------")
// console.log(dhBici.biciParaLaVenta());
// console.log("-------------------------------")
// console.log(dhBici.totalDeVentas());
// console.log(dhBici.aumentoBici(10));
// console.log("-------------------------------")
// console.log(dhBici.biciPorRodado(29));
// console.log("-------------------------------")
dhBici.listarTodasLasBici()