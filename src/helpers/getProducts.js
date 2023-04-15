import stock from '../data/Stock';
//Establecemos funcion para obtener productos
const getProducts = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(stock)
        reject('Rechazado')
      }, 2000)
    })
}
export default getProducts