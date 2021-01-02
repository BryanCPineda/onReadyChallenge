const concesionariaOnready = () => {

    class concesionaria{
        constructor(){
            this.nombre  
            this.direccion  
            this.ciudad  
        }

        cargarListaDeVehiculos(listaDeVehiculos){
            
            this.imprimirListaDeVehiculos(listaDeVehiculos)
            
        }

        imprimirListaDeVehiculos = (listaDeVehiculos) => {

            listaDeVehiculos.forEach(vehiculo => {
                    console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // ${vehiculo.puertas === '' ? '' : `Puertas: ${vehiculo.puertas} //`} ${vehiculo.cilindrada === '' ? '' : `Cilindrada: ${vehiculo.cilindrada}cc //`} Precio: $${vehiculo.precio}`)
            })

            console.log("=============================")

            listaDeVehiculos.map((vehiculo, i) => {
                let quitarPunto = vehiculo.precio.replace('.','')
                let quitarComa = quitarPunto.replace(',','.')
                let convertirEntero = Number(quitarComa)
                vehiculo.precio = convertirEntero;
            
            });

            let arrayPrecios = listaDeVehiculos.map(vehiculo => {return vehiculo.precio})
            let arrayModelos = listaDeVehiculos.map(vehiculo => {return vehiculo.modelo})

            let vehiculoMasCaro = listaDeVehiculos.find( vehiculo => {return vehiculo.precio === Math.max.apply(null, arrayPrecios)})
            let vehiculoMasBarato = listaDeVehiculos.find( vehiculo => {return vehiculo.precio === Math.min.apply(null, arrayPrecios)})
            let vehiculoConYenModelo; 

            arrayModelos.forEach( (modelo, i) => {
                if(modelo.includes("Y")){
                    let vehiculo = listaDeVehiculos[i]
                    vehiculoConYenModelo = vehiculo
                }else return null
            })

            vehiculoConYenModelo.precio = vehiculoConYenModelo.precio.toString().replace(/(\d)(\d{3})($|,|\.)/g, '$1.$2,')

            console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoConYenModelo.marca} ${vehiculoConYenModelo.modelo} $${vehiculoConYenModelo.precio}0`)
    
            
            console.log("=============================")
            
            vehiculoConYenModelo.precio = Number(vehiculoConYenModelo.precio.replace('.','').replace(',','.'))

            arrayPrecios.sort((a,b) => {
                return b - a
            })

            let vehiculosOrdenadosPorPrecio = [];
            
            arrayPrecios.forEach(precio => {
                listaDeVehiculos.forEach(vehiculo => {
                        if(vehiculo.precio === precio) vehiculosOrdenadosPorPrecio.push(vehiculo)
                })
            })

            console.log(`Vehículos ordenados por precio de mayor a menor:`)
            vehiculosOrdenadosPorPrecio.forEach(vehiculo=>{console.log(`${vehiculo.marca} ${vehiculo.modelo}`)})
        }
    }

    class vehiculo {
        
        constructor(parametros){
            this.marca = parametros.marca
            this.modelo = parametros.modelo
            this.puertas = parametros.puertas
            this.cilindrada = parametros.cilindrada
            this.precio = parametros.precio
            this.tipo = parametros.tipo
        }
        
    }

const onReady = new concesionaria()

const listaDeVehiculos = []

const auto = new vehiculo({marca:'Peugeot', modelo:'206', puertas:4, cilindrada:'',precio:'200.000,00',tipo:'auto'})
const moto = new vehiculo({marca:'Honda', modelo:'Titan', puertas:'', cilindrada:125,precio:'60.000,00',tipo:'moto'})
const auto2 = new vehiculo({marca:'Peugeot', modelo:'208', puertas:5, cilindrada:'',precio:'250.000,00',tipo:'auto'})
const moto2 = new vehiculo({marca:'Yamaha', modelo:'YBR', puertas:'', cilindrada:160,precio:'80.500,50',tipo:'moto'})


listaDeVehiculos.push(auto,moto,auto2,moto2)

onReady.cargarListaDeVehiculos(listaDeVehiculos);

}  

concesionariaOnready();