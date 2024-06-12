const PostCard = () => {
  return (
    <div className="post-card">
      <div className="card-img">600 x 400</div>
      <div className="card-content">
        <h4 className="card-title">Titolo del Post</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          tempore eos, vitae voluptatibus sint quod dicta ipsa molestias
          quibusdam dolorem totam dolore, enim unde deleniti ipsum placeat!
          Eaque, numquam quidem.
        </p>
        <div>
          <button className="card-btn">Leggi di più</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
