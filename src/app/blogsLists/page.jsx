import React from "react";
import styles from "./blogList.module.css";
import Pagination from "../../components/pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ cat }) => {
  const page = parseInt(1);

  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  const handleEdit = (postId) => {
    console.log(`Edit post with ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(`Delete post with ID: ${postId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <table className={styles.userTextContainer}>
        <thead>
          <tr className={styles.content}>
            <th>Title</th>
            <th>Total_views</th>
            <th>Prams_link</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((item) => (
            <tr key={item._id} className={styles.content}>
              <td>{item.title}</td>
              <td>{item.views}</td>
              <td>{item.slug}</td>
              <td>{item.catSlug}</td>
              <td>
              <span
              className={styles.button} 
              >
                Edit
              </span>
              <span
               className={styles.button1} 
              >
                Delete
              </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
