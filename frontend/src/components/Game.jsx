import React, { useState } from 'react'

export default function Game() {
    const tabuleiro_vazio = Array(9).fill('')
    const [tabuleiro, setTabuleiro] = useState(tabuleiro_vazio)
    
    const clicando_na_celula = (index) =>{
        setTabuleiro(tabuleiro.map((item, itemindex) => itemindex === index ? 'X' : item))
    }
    return (
        <div>
            <h1 className='title'>
                DOG CAT WAR
            </h1>
            <div className='board'>
                {
                    tabuleiro.map((item, index) => (
                        <div key={index} 
                        className={`cell ${item}`}
                        onClick={() => clicando_na_celula(index)}
                        >
                            {item}
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
