
const carrinho = []


const carrinhoReducer = (state = carrinho, action) =>{

    switch (action.type) {

        case "ADD_CARRINHO":
        const {item} = action 
        return [...state, item]

        case "REMOVER_CARRINHO":
        const {lixo} = action   
        const remocao = state.filter((item) => (
            item !== lixo
        ))
        return remocao

        default:
        return state;

    }
}

export default carrinhoReducer