import React from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoAdd(){

    const {addtask,setModalValue} = React.useContext(TodoContext);
    const [TextValue,setTexvalue] = React.useState('');

    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addtask(TextValue);
        // Cerramos nustro modal
        setModalValue(false);
        // También estaría bien resetear nuestro formulario
        setTexvalue('')
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                onChange={(e)=> setTexvalue(e.target.value)}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={()=>setModalValue(false)}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export {TodoAdd};
