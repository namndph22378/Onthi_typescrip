import { useForm } from "react-hook-form";
import { iProduct } from "../models";
import { createProduct } from "../api/product";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProduct>();
  const navigate = useNavigate();

  const handleOnSubmit = async (data: iProduct) => {
    const res = await createProduct(data);
    navigate("/admin");
  };

  return (
    <form
      action=""
      className="w-[1200px] mx-auto p-4"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className="flex flex-col items-center">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="name"
          className="p-2 border-2 border-gray-200 rounded"
          {...register("name")}required
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Price</label>
        <input
          type="number"
          className="p-2 border-2 border-gray-200 rounded"
          placeholder="123"
          {...register("price")}required
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Original Price</label>
        <input
          type="number"
          placeholder="123"
          className="p-2 border-2 border-gray-200 rounded"
          {...register("original_price")}required
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Brand</label>
        <input
          type="text"
          className="p-2 border-2 border-gray-200 rounded"
          placeholder="apple,.."
          {...register("brand")}required
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
          className="p-2 border-2 border-gray-200 rounded"
          rows={4}
          placeholder="description"
          {...register("description")}required
        />
      </div>
      <div className="flex flex-col items-center">
        <button type="submit" className="p-2 rounded bg-blue-700 text-white">
          Thêm
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
