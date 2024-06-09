import React, { useState } from "react";
import { useGetProductQuery, useDeleteProductMutation } from "../../context/productApi";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import EditProductOverlay from "../../components/editproduct/EditProduct";

const ManageProducts = () => {
    const { data: products, isLoading, isError } = useGetProductQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [editProductId, setEditProductId] = useState(null);
    const [deletingProductId, setDeletingProductId] = useState(null);

    const handleEditProduct = (product) => {
        setEditProductId(product.id);
    };

    const handleSaveChanges = (editedProduct) => {
        setEditProductId(null);
    };

    const handleCancelEdit = () => {
        setEditProductId(null);
    };

    const handleDeleteProduct = (productId) => {
        setDeletingProductId(productId);
        deleteProductById(productId)
            .finally(() => setDeletingProductId(null));
    };

    const deleteProductById = async (productId) => {
        try {
            await deleteProduct(productId).unwrap();
            toast.success("Product deleted successfully");
        } catch (error) {
            toast.error("Failed to delete product");
        }
    };


    return (
        <div className="manage__products">
            <h3>Manage Products</h3>
            {isLoading && <h2>Loading...</h2>}
            {isError && <p>Error loading products...</p>}
            {products && (
                <div className="admin__wrapper">
                    {products.map((product) => {
                        const discountRate = 0.1;
                        const oldPrice = product.price / (1 - discountRate);

                        return (
                            <div key={product.id} className="admin__wrapper__card">
                                <img className='admin__wrapper__card__img' src={product.image} alt={product.title} />
                                <p className="admin__wrapper__card__p">{product.title}</p>
                                <div className="admin__wrapper__card__body">
                                    <div className="admin__wrapper__card__body__left">
                                        <s className="admin__wrapper__card__body__left__oldprice">{oldPrice.toFixed(2)} ₽</s>
                                        <p className="admin__wrapper__card__body__left__price">{product.price} ₽</p>
                                    </div>
                                    <div className="admin__wrapper__card__body__right">
                                        <button className="admin__wrapper__card__body__right__edit" onClick={() => handleEditProduct(product)}><CiEdit /></button>
                                        <button className="admin__wrapper__card__body__right__edit" onClick={() => handleDeleteProduct(product.id)} disabled={deletingProductId === product.id}>
                                            {deletingProductId === product.id ? (
                                                "..."
                                            ) : (
                                                <FaRegTrashAlt />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                {editProductId === product.id && (
                                    <EditProductOverlay
                                        product={product}
                                        onSave={handleSaveChanges}
                                        onClose={handleCancelEdit}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ManageProducts;
