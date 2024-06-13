export default function Avatar ({character}){


    return  <figure>{character.image ? (<img src={character.image} alt={character.firstName}/>) : (<p>?????</p>)}<figcaption>{character.firstName} {character.lastName}</figcaption></figure>;
}