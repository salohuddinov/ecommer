import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { MdOutlineCancel } from "react-icons/md";

const EditProductOverlay = ({ product, onSave, onClose }) => {
    const {
        data: categoriesData,
        isLoading: categoriesLoading,
        isError: categoriesError,
    } = useGetCategoryQuery();

    const [editedProduct, setEditedProduct] = useState({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image ? product.image.slice() : [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleImageChange = (e, index) => {
        const updatedImages = [...editedProduct.image];
        updatedImages[index] = e.target.value;
        setEditedProduct({ ...editedProduct, image: updatedImages });
    };

    const handleAddImage = () => {
        setEditedProduct({ ...editedProduct, image: [...editedProduct.image, ""] });
    };

    const handleRemoveImage = (index) => {
        const updatedImages = editedProduct.image.filter((_, i) => i !== index);
        setEditedProduct({ ...editedProduct, image: updatedImages });
    };

    const handleSave = () => {
        if (!editedProduct.title || !editedProduct.description || !editedProduct.price || !editedProduct.category) {
            toast.error("Please fill in all required fields");
            return;
        }
        onSave(editedProduct);
        onClose();
        toast.success("Product updated successfully");
    };

    if (categoriesLoading) {
        return <div>Loading categories...</div>;
    }

    if (categoriesError) {
        return <div>Error loading categories</div>;
    }

    return (
        <div className="product__overlay">
            <div className="product__overlay__content">
                <h3>Edit Product</h3>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={editedProduct.description}
                    onChange={handleChange}
                />
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleChange}
                />
                <label>Category:</label>
                <select
                    name="category"
                    value={editedProduct.category}
                    onChange={handleChange}
                >
                    {categoriesData?.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
                <label>Image URLs:</label>
                {editedProduct.image.map((url, index) => (
                    <div key={index}>
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => handleImageChange(e, index)}
                        />
                        <button onClick={() => handleRemoveImage(index)}>Remove</button>
                    </div>
                ))}
                <button onClick={handleAddImage}>Add Image</button>
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button className="cancel" onClick={onClose}>
                        <MdOutlineCancel />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProductOverlay;
