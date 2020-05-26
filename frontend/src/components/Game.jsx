import React, { useState, useEffect } from 'react'


export default function Game() {
    const tabuleiro_vazio = Array(9).fill('')
    const [tabuleiro, setTabuleiro] = useState(tabuleiro_vazio)
    const [jogadoratual, setJogadoratual] = useState('Gato')
    const [vencedor, setVencedor] = useState()

    const clicando_na_celula = (index) => {

        if (vencedor) {
            alert("Jogo Finalizado")
            return null
        }

        if (tabuleiro[index] !== '') {
            alert("Posição já ocupada")
            return null
        }

        setTabuleiro(tabuleiro.map(
            (item, itemindex) => itemindex === index ? jogadoratual : item)
        )

        setJogadoratual(jogadoratual === 'Gato' ? 'Cachorro' : 'Gato')
    }

    const checar_vencedor = () => {
        const casos_vencedor = [
            [tabuleiro[0], tabuleiro[1], tabuleiro[2]],
            [tabuleiro[3], tabuleiro[4], tabuleiro[5]],
            [tabuleiro[6], tabuleiro[7], tabuleiro[8]],

            [tabuleiro[0], tabuleiro[3], tabuleiro[6]],
            [tabuleiro[1], tabuleiro[4], tabuleiro[7]],
            [tabuleiro[2], tabuleiro[5], tabuleiro[8]],

            [tabuleiro[0], tabuleiro[4], tabuleiro[8]],
            [tabuleiro[2], tabuleiro[4], tabuleiro[6]]
        ]

        casos_vencedor.forEach(cells => {
            if (cells.every(cell => cell === 'Cachorro'))
                setVencedor('Cachorro')
            if (cells.every(cell => cell === 'Gato'))
                setVencedor('Gato')
        })

        checar_empate()
    }

    const checar_empate = () => {
        if (tabuleiro.every(cells => cells !== ''))
            setVencedor("Empate")
    }

    const resetar_jogo = () => {
        if (vencedor)
            setJogadoratual(vencedor)
        if (!vencedor)
            setJogadoratual('Gato')

        setTabuleiro(tabuleiro_vazio)
        setVencedor(null)
    }

    useEffect(checar_vencedor, [tabuleiro])

    return (
        <main>
            <h1 className='title'>
                DOG CAT WAR
            </h1>
            <div className={`board ${vencedor ? "game-over" : ""}`}>
                {
                    tabuleiro.map((item, index) => (
                        <div key={index}
                            className={`cell ${item}`}
                            onClick={() => clicando_na_celula(index)}
                        >
                            <img className={`${item}`} />
                        </div>

                    ))
                }
            </div>

            <footer>
                {
                    vencedor
                    &&
                    <h2 className='player-message'>
                        <span className={`v${vencedor}`}> {vencedor}</span> Venceu!
                    </h2>
                    ||
                    <h2 className='player-message'>
                        O<span className={`v${jogadoratual}`}> {jogadoratual} </span>Joga!
                    </h2>
                }
                <button onClick={resetar_jogo} >Novo Jogo</button>
            </footer>

        </main>
    )
}
