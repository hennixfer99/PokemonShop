
const carrinho = []


const carrinhoReducer = (state = carrinho, action) =>{

    switch (action.type) {

        case "ADD_CARRINHO":
        const {item} = action 
        return [...state, item]

        case "REMOVER_CARRINHO":
        const {lixo} = action 
        const indexRemove = state.findIndex((item) => (
            item.name === lixo.name
        ))  
        const novoCarrinho = [...state]
        novoCarrinho.splice(indexRemove,1)
        return novoCarrinho

        default:
        return state;

    }
}

export default carrinhoReducer