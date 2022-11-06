import { Pokemon } from "@/pokedexTypes";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";


const PokemonCard = ({ id, name, image }: Pokemon) => {
    return (
        <Link href={`/${id}/`}>
            <a className={styles.card}>
                <h3>{name} | {id}</h3>
                <p>{image}</p>
            </a>
        </Link>
    );
};

export default PokemonCard;