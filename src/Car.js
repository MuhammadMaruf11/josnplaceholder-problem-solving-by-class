

import React from 'react';

class Car extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts:[]
    };
  }

  componentDidMount() {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await response.json();
      this.setState({posts: postsData});
    };
    fetchPosts();
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) =>(
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Car;
