import React, { useRef, useState } from "react";
import { useCreateProductMutation } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { toast } from "react-toastify";

const CreateProduct = () => {
    const {
        data: categories,
        isLoading: categoriesLoading,
        isError: categoriesError,
    } = useGetCategoryQuery();
    const [createProduct, { isLoading: productLoading }] = useCreateProductMutation();
    const title = useRef();
    const description = useRef();
    const price = useRef();
    const category = useRef();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [image, setImage] = useState("");

    const handleCreateProduct = async (e) => {
        e.preventDefault();

        const newProduct = {
            title: title.current.value.trim(),
            description: description.current.value.trim(),
            price: parseFloat(price.current.value),
            category: selectedCategory,
            image: image.trim(),
        };

        if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.category || !newProduct.image) {
            toast.error("Malumot to'liq emas");
            return;
        }

        try {
            await createProduct(newProduct);
            toast.success("Product created successfully");
            title.current.value = "";
            description.current.value = "";
            price.current.value = "";
            category.current.value = "";
            setImage("");
            setSelectedCategory("");
        } catch (error) {
            toast.error("Failed to create product");
        }
    };

    return (
        <div className="create__products">
            <p className="create__products__p">Create Product</p>
            <form className="create__products__form" onSubmit={handleCreateProduct}>
                <input className="create__products__form__input" ref={title} type="text" placeholder="Title" />
                <input className="create__products__form__input" ref={price} type="text" placeholder="Price" />
                <input className="create__products__form__input" type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <select className="create__products__form__input" ref={category} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select category</option>
                    {categories && categories.map((category, inx) => (
                        <option key={inx} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
                <textarea className="create__products__form__textra" ref={description} style={{ resize: "none" }} placeholder="Description"></textarea>
                <button className="create__products__form__button" type="submit" disabled={productLoading || categoriesLoading}>
                    {productLoading ? "Creating..." : "Add"}
                </button>
            </form>
            {categoriesError && <p>Error loading categories...</p>}
        </div>
    );
};

export default CreateProduct;
