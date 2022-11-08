import { PokemonDetails } from "@/pokedexTypes";
import styles from "../../styles/pokemon.module.css";

const PokemonDetailsCard = ({ id, name, image, abilities, baseExperience, height, weight }: PokemonDetails) => {
    return (
        <div className="h-screen bg-slate-900">
            <div className={styles.carddetails}>
                <img className={styles.image} src={`${image}`} alt={`pokemon ${name} image`} />
                <h1>{name}</h1>
                <p>id: {id}</p>
                <p>base experience: {baseExperience}</p>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </div>
        </div>
    );
};

export default PokemonDetailsCard;