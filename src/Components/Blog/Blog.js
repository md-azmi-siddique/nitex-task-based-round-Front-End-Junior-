import React from "react";
import bImg from '../Assets/images/Products/Fruits/1.png'
import './Blog.css'

const Blog = () => {
  return (
    <div className="container blog-container">
      <h1>Blog</h1>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={bImg} class="img-fluid rounded-start blog-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a green apple of newly invented seeds that was introduces 11 months ago and not this is the final outcome, wooh what a discovery!!!!</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 months ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Blog;
