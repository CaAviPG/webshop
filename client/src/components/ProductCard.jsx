import { useNavigate } from "react-router-dom"

export function ProductCard({ product }) {

    const navigate = useNavigate()

    return (
        <div 
            className="bg-zinc-800 p-3 hover:bg-zinc-700"

            onClick = {() => {
                navigate(`/products/${product.id}`)
            }}
        >
            <h1 className="font-bold uppercase">{product.name}</h1>
            <p className="text-slate-400">{product.description}</p>
            <h3>{product.price}</h3>
            <h4>{product.stock}</h4>
            <h4>{product.sold}</h4>
            <hr />
        </div>
  );
}

