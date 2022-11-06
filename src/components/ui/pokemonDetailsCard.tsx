import { PokemonDetails } from "@/pokedexTypes";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";

const PokemonDetailsCard = ({ id, name, image, abilities, baseExperience, height, weight }: PokemonDetails) => {
    return (
        <Link href={`/${id}/`}>
            <a className={styles.card}>
                <h3>{name} | {id}</h3>
                <p>{image}</p>
                <p>base experience: {baseExperience}</p>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </a>
        </Link>
    );
};

export default PokemonDetailsCard;