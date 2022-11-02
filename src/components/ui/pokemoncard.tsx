import Link from "next/link";
import styles from "../../styles/pokemon.module.css";
import { Pokemon } from "../pokemons/pokemon_item";

const PokemonCard = ({ id, name, image }: Pokemon) => {
    return (
        <Link href={`/${id}/`}>
            <a className={styles.card}>
                <h3>{name} &rarr;</h3>
                <p>{id}</p>
                <p>{image}</p>
            </a>
        </Link>
    );
};

export default PokemonCard;