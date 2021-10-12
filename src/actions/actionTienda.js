import {typesTienda } from "../types/types"

export const activeTienda = (tienda) => {
    return {
            type:typesTienda.select,
            payload: tienda
}
}

