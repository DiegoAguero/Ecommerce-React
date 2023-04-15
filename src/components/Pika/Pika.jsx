import React, { useState, useEffect } from 'react'
function Pika(){
//Eliminar
    const [pokemon, setPokemon] = useState('');
    const [id, setId] = useState(1);
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) =>res.json())
        .then((data)=>{
            setPokemon({
                numero: data.id,
                nombre: data.name,
                img: data.sprites.front_default,
            })
        })
    }, [id])
    
    const siguiente = () =>{
        setId(id + 1)
    }
    
    const anterior = () =>{
        id > 1 && setId(id - 1)
    }

    const buscar = (e) =>{
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(busqueda.length > 2){
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then((res) => res.json())
            .then((data)=>{
                setPokemon({
                    nombre: data.name,
                    img: data.sprites.front_default,
                })
                setId(
                    data.id
                )
            })
        }
    }
    return(
        <>  
            <div>
                <h3>{pokemon.numero}</h3>
                <h3>{pokemon.nombre}</h3>
                <img src={pokemon.img} style={{width:100, height: 100}} />
            </div>
            
            <div>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={busqueda} onChange={buscar}/>
                    <button type="submit">Enviar tio</button>
                </form>
            </div>
        </>
    )
}

export default Pika