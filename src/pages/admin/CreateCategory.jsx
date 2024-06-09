import React, { useRef, useState } from "react";
import { useGetCategoryQuery, useCreateCategoryMutation, } from "../../context/categoryApi";
import { toast } from "react-toastify";

const CreateCategory = () => {
    const title = useRef();
    const { data, isLoading, isError } = useGetCategoryQuery();
    const [createCategory, { isLoading: loadingCategory }] =
        useCreateCategoryMutation();
    const [isCreatingCategory, setIsCreatingCategory] = useState(false);

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        const categoryTitle = title.current.value.trim();
        if (!categoryTitle) {
            toast.error("Category title cannot be empty");
            return;
        }

        if (data.some((category) => category.title === categoryTitle)) {
            toast.error("Category already exists");
            return;
        }

        if (isCreatingCategory) return;

        try {
            setIsCreatingCategory(true);
            await createCategory({ title: categoryTitle });
            toast.success("Category created successfully");
            title.current.value = "";
        } catch (error) {
            toast.error("Failed to create category");
        } finally {
            setIsCreatingCategory(false);
        }
    };

    const categories = data?.map((el, index) => (
        <div className="category__item" key={el.id}>
            <p className="category__item__p">
                {index + 1}.{el.title}
            </p>
        </div>
    ));

    return (
        <>
            <form className="admin__category" onSubmit={handleCreateCategory}>
                <h1>Create Category</h1>
                {/* {isError && <p>Something went wrong...</p>} */}
                <div className="create__categories">
                    <input className="create__categories__input" ref={title} type="text" placeholder="create product" />
                    <button className="create__categories__button" disabled={loadingCategory || isCreatingCategory}>
                        {loadingCategory ? "Loading..." : "Create Category"}
                    </button>
                </div>
            </form>
            {isLoading && <p>loding...</p>}
            <div className="admin__category">{categories}</div>
        </>
    );
};

export default CreateCategory;
