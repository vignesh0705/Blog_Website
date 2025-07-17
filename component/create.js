"use client";
import { useState } from "react";

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {

      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = formData;
      setBlogs(updatedBlogs);
      setEditIndex(null);
      alert("Blog updated successfully!");
    } else {

      setBlogs((prev) => [...prev, formData]);
      alert("Blog created successfully!");
    }

    
    setFormData({
      title: "",
      summary: "",
      image: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const handleDelete = (index) => {
    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;
    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
  };

  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditIndex(index);
  };

  return (
    <div className="create-form-wrapper">
      <div>
        <form onSubmit={handleSubmit} className="create-form">
          <h1>{editIndex !== null ? "Edit Blog" : "Create a New Blog"}</h1>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="summary"
            placeholder="Summary"
            value={formData.summary}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">{editIndex !== null ? "Update Blog" : "Create Blog"}</button>
        </form>

        {blogs.length > 0 && (
          <div className="blog-table-container">
            <h2>Created Blogs</h2>
            <table className="blog-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Summary</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{blog.title}</td>
                    <td>{blog.summary}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td>
                      <img
                        src={blog.image}
                        alt="blog-img"
                        style={{ width: "80px", height: "50px", objectFit: "cover" }}
                      />
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(index)}>✏️ Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>🗑️ Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBlogPage;