import { PokemonDetails } from '@/pokedexTypes';
import styles from '../../styles/pokemon.module.css';

const PokemonDetailsCard = ({
  id,
  name,
  species,
  image,
  abilities,
  baseExperience,
  height,
  weight,
}: PokemonDetails) => {
  return (
    <div className="md:h-screen bg-slate-900">
      <div className="flex flex-wrap gap-x-1 gap-y-1 items-start justify-center mx-10 sm:mx-24 md:mx-48">
        <div className={styles.cardDetails_image}>
          <img
            className={styles.image}
            src={`${image}`}
            alt={`pokemon ${name} image`}
          />
        </div>
        <div className="flex flex-col gap-x-1 gap-y-1 items-start justify-center">
          <div className={styles.cardDetails_mainInfo}>
            <h1>{name}</h1>
            <p>Id: {id}</p>
            <p>Species: {species}</p>
            <p>Base experience: {baseExperience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
          </div>
          <div className={styles.cardDetails_mainInfo}>
            <h2>Abilities</h2>
            {abilities.map((name) => {
              return (
                <ul className="list-disc list-inside" key="abilities">
                  <li>{name}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
