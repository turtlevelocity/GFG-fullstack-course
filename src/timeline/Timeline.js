import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css'; 
import PostCard from '../postcard/PostCard';
import Navigation from '../navigation/Navigation';
import useDateTime from '../customHooks/useDateTime';
import useCustomDateHook from '../customHooks/dateHook';


const Posts = (props) => {
  if(props.posts != null) {
    return (
      props.posts.map(post => (
        <div key={post.id} className="post-card-container">
          <PostCard user={props.user.author} date={props.user.date} body={post.title}/>
        </div>
      ))
    )
  }
  else {
    return (<div>Loading Posts.....</div>)
  }
}

const Timeline = () => {


  const [postData, setPostData] = useState(null);
  const date = useCustomDateHook();
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPostData(data.slice(0,3));
      } catch(error){
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const timerID = setInterval(() => setDate(new Date()), 1000);

  //   return (()=> clearInterval(timerID));
  // }, []);


  const buttonClickEvent = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }


  const user = {
    id: 1,
    author: 'John Doe',
    date: 'July 14, 2023'
  }

  return (
    <div className='timeline-container'>
      <Navigation />
      <div className="timeline">
        <Posts posts={postData} user={user}/>
      </div>
    </div>
    
  );
};

export default Timeline;
