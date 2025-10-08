function Post({ post, handleDelete, viewPost }) {
  const { id, title, body } = post;
  return (
    <div key={post.id} className="mb-5 p-2 border border-gray-300 rounded">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          <button
            onClick={() => viewPost(id)}
            className="cursor-pointer hover:text-blue-700 hover:underline"
          >
            view
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="cursor-pointer hover:text-red-700 hover:underline"
          >
            delete
          </button>
        </div>
      </div>
      <p>{body}</p>
    </div>
  );
}

export default Post;