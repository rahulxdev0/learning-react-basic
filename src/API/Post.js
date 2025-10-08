import { API_URL } from "./util";

async function getAllPosts() {
  try {
    const response = await fetch(`${API_URL}posts`);
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error(error);
  }
}

async function getPostById(id) {
  try {
    const response = await fetch(`${API_URL}posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function deletePostById(id) {
  try {
    const response = await fetch(`${API_URL}posts/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error(error);
  }
}
export { getAllPosts, getPostById, deletePostById };