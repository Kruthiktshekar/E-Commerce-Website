const cart = []

const handleCart = (state = cart,action) => {
    
    const product = action.payload
     
    switch(action.type){
        
        case "ADD_ITEM" :
            
        const exist = state.find((ex)=> ex.id === product.id)
        if(exist){
            return state.map((p)=>
            p.id === product.id ? {...p, qty: p.qty+1} : p)
        }else{
            const product = action.payload
            return [
                ...state ,
                {
                    ...product,
                    qty:1
                }
            ]
        }
        

        case "DEL_ITEM" :
           const exist1 = state.find((ex)=> ex.id === product.id)
            if(exist1.qty===1){
                return  state.filter((x)=> x.id !== exist1.id)
            }
            else {
                return state.map((x)=>
                x.id === product.id ? {...x , qty: x.qty-1}:x)
            }
           

         default:
            return state
    }
}

export default handleCart