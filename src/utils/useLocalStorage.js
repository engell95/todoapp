import React from "react";

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {

    // ¡Podemos utilizar otros hooks!
    const [item, setItem] = React.useState(initialValue);
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(() => {
    // Simulamos un segundo de delay de carga 
      setTimeout(() => {
        // Manejamos la tarea dentro de un try/catch por si ocurre algún error
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
    
            setItem(parsedItem);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
      }, 1000);
    });

    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    // Regresamos los datos que necesitamos
    return {
        item,
        saveItem,
        loading,
        error
    };

}

export default useLocalStorage;