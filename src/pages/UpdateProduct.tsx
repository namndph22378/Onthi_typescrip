import { useForm } from "react-hook-form";
import { iProduct } from "../models";
import { createProduct, getDetail, updateProduct } from "../api/product";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProduct>();
  const navigate = useNavigate();
  const { id }: any = useParams();
  const [data, setData] = useState<iProduct>({} as iProduct);

  const handleOnSubmit = async (data: iProduct) => {
    const res = await updateProduct(id, data);
    navigate("/admin");
  };

  const fetchData = async (id: number) => {
    try {
      const res = await getDetail(id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(id);
  });

  return (
    <form
      action=""
      className="w-[1200px] mx-auto p-4"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className="flex flex-col items-center">
        <label htmlFor="">Name</label>
        <input
          defaultValue={data.name}
          type="text"
          placeholder="name"
          className="p-2 border-2 border-gray-200 rounded"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Price</label>
        <input
          defaultValue={data.price}
          type="number"
          className="p-2 border-2 border-gray-200 rounded"
          placeholder="123"
          {...register("price")}
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Original Price</label>
        <input
          defaultValue={data.original_price}
          type="number"
          placeholder="123"
          className="p-2 border-2 border-gray-200 rounded"
          {...register("original_price")}
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Brand</label>
        <input
          defaultValue={data.brand}
          type="text"
          className="p-2 border-2 border-gray-200 rounded"
          placeholder="apple,.."
          {...register("brand")}
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Xuất xứ</label>
        <select
          {...register("originId")}
          className="p-2 border-2 border-gray-200 rounded"
        >
          <option value="">Việt Nam</option>
          <option value="">Trung Quốc</option>
          <option value="">Pháp</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Description</label>
        <textarea
          value={data.description}
          className="p-2 border-2 border-gray-200 rounded"
          rows={4}
          placeholder="description"
          {...register("description")}
        />
      </div>
      <div className="flex flex-col items-center">
        <button type="submit" className="p-2 rounded bg-blue-700 text-white">
          update
        </button>
      </div>
    </form>
  );
};

export default UpdateProduct;
