import { useEffect, useState } from "react"
import { gif } from "../helpers/gif";


export const useFetchGifs = (n) => {
    const [state, usestate] = useState({
        data:[],
        loading:false,
    });

    useEffect(() => {
      gif(n)
        .then((ga)=>{

            setTimeout(() => {
                usestate({
                    data:ga,
                    loading:true,
                })
            },);
            
        }
      )
    }, [n])
    return state;
}
