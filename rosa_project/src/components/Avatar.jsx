import { useState } from "react";
export default function Avatar ({character}){

    const [count, setCount] = useState(0);

    return  <figure>{character.image ? (<img src={character.image} alt={character.firstName}/>) : (<p>?????</p>)}<figcaption>{character.firstName} {character.lastName}     <button onClick={
        ()=>setCount(count+1)
    }><img src="../src\assets\donut.png" alt="donut" width={20}/></button> {count}</figcaption></figure>;


}