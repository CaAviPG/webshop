import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProduct, deleteProduct, updateProduct, getProduct } from "../api/products.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ProductFormPage() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, data);
      toast.success('Producto actualizado');
    } else {
      await createProduct(data);
      toast.success('Producto creado');
    }

    navigate("/products");
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const {
          data: { name, description, price, stock, sold},
        } = await getProduct(params.id);
        setValue('name',  name);
        setValue('description',  description);
        setValue('price',  price);
        setValue('stock',  stock);
        setValue('sold',  sold);
      }  
    }
    loadProduct();
  }, [])
    
  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input 
          type="text" 
          placeholder="name" 
          {...register("name", {required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>This field is required</span>}

        <textarea
          rows ="3"
          placeholder="Description"
          {...register("description", {required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <input 
          type="number" 
          placeholder="price" 
          {...register("price", {required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.price && <span>This field is required</span>}
        <input 
          type="number" 
          placeholder="stock" 
          {...register("stock", {required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.stock && <span>This field is required</span>}
        <input 
          type="number" 
          placeholder="sold" 
          {...register("sold", {required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.sold && <span>This field is required</span>}
        <button
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>      
      </form>
      
      {params.id &&  (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteProduct(params.id);
              toast.success('Producto eliminado');
              navigate("/products")
            }
          }}
        >
          Delete
        </button>)}
    </div>  
  );
}
