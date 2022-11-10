import { Pokemon } from "@/pokedexTypes";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";


export const PokemonCard = ({ id, name, image }: Pokemon) => {
    return (
        <Link href={`/${id}/`}>
            <a className={styles.card}>
                <img className={styles.image} src={`${image}`} alt={`pokemon ${name} image`} />
                <h2>{name} | {id}</h2>
            </a>
        </Link>
    );
};
