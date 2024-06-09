import React, { useState } from "react";
import { useGetCategoryQuery, useDeleteCategoryMutation, useCreateCategoryMutation, } from "../../context/categoryApi";
import { toast } from "react-toastify";
// import Loading from "../../components/loading/Loading";
import { CiEdit } from "react-icons/ci";

const ManageCategory = () => {
    const { data, isLoading, isError } = useGetCategoryQuery();
    const [deleteCategory, { isLoading: deleteLoading }] =
        useDeleteCategoryMutation();
    const [updateCategory, { isLoading: updateLoading }] =
        useCreateCategoryMutation();

    const [isEditing, setIsEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [newTitle, setNewTitle] = useState("");

    const handleDeleteCategory = (id) => {
        deleteCategory(id)
            .then(() => toast.success("Category deleted successfully"))
            .catch(() => toast.error("Failed to delete category"));
    };

    const handleEditCategory = (category) => {
        setCurrentCategory(category);
        setNewTitle(category.title);
        setIsEditing(true);
    };

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        if (!newTitle.trim()) {
            toast.error("Category title cannot be empty");
            return;
        }

        try {
            await updateCategory({ id: currentCategory.id, title: newTitle });
            toast.success("Category updated successfully");
            setIsEditing(false);
            setCurrentCategory(null);
            setNewTitle("");
        } catch (error) {
            toast.error("Failed to update category");
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsEditing(false);
        }
    };

    const categories = data?.map((el, index) => (
        <div className="create__categories" key={el.id}>
            <p>
                {index + 1}.{el.title}
            </p>
            <div className="create__categories__button">
                <button className="create__categories__button__dale" onClick={() => handleDeleteCategory(el.id)}>Delete</button>
                <button className="create__categories__button__edit" onClick={() => handleEditCategory(el)}>
                    <CiEdit />
                </button>
            </div>
        </div>
    ));

    return (
        <div className="manage__categories">
            <h2>Manage Categories</h2>
            {isError && <p>Something went wrong...</p>}
            {isLoading && <h2>loging</h2>}
            <div className="admin__category">{categories}</div>

            {isEditing && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="admin__category">
                        <h2>Edit Category</h2>
                        <form className="create__categories" onSubmit={handleUpdateCategory}>
                            <input className="create__categories__input"
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <button className="create__categories__button" type="submit" disabled={updateLoading}>
                                {updateLoading ? "Updating..." : "Update Category"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCategory;
