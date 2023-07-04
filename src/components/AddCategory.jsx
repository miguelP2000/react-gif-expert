import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //No refrescar la pagina

        if(inputValue.trim().length <= 1) return //Mas de dos caracteres

        //setCategories(categories => [inputValue, ...categories]); //Modificar el estado de otro componente
        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>

            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}