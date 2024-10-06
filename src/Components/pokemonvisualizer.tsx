interface PokemonInfo {
    name: string;
    level: number;
    type: string;
}

interface PokemonInfoList {
    InfoOfPokemons: PokemonInfo[]
}
function PokemonDisplay(props: PokemonInfoList) {
    return (
        <div>
            {props.InfoOfPokemons.map((pokemonInfo) => (
                <div>
                    <h1>{pokemonInfo.name}</h1>
                    <h1>{pokemonInfo.level}</h1>
                    <h1>{pokemonInfo.type}</h1>
                </div>
            ))}
        </div>
    )
}

export default PokemonDisplay;