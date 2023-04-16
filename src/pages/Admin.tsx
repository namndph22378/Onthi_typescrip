import React, { useEffect, useState } from "react";
import { Table, Divider, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { iProduct } from "../models";
import { deleteProduct, getAll } from "../api/product";

const Admin = () => {
  const [data, setData] = useState<iProduct[]>([]);

  const fetchData = async () => {
    try {
      const res = await getAll();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
  };

  useEffect(() => {
    fetchData();
  });

  const columns: ColumnsType<iProduct> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Original price",
      dataIndex: "original_price",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Actions",
      render: (a, data) => {
        return (
          <div className="flex gap-2">
            <Link
              to={`/admin/${data.id}/update`}
              className="p-2 rounded bg-blue-700 text-white"
            >
              Edit
            </Link>
            <button
              className="p-2 rounded bg-red-700 text-white"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-[1200px] mx-auto py-4">
      <Link
        to={"/admin/add"}
        className="p-2 bg-blue-500 text-white inline-block rounded-xl mb-3"
      >
        Thêm sản phẩm
      </Link>
      <Table columns={columns} dataSource={data} size="small" />
    </div>
  );
};

export default Admin;
