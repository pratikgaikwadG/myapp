import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        <li><Link to="post1">1. Smashing Magazine
Description: Smashing Magazine offers a wealth of resources on web design and development. It features articles on front-end development, UX/UI design, web performance, and best practices. It also includes tutorials, case studies, and insights from industry experts.

Why It's Useful: It provides in-depth articles and guides on a wide range of web development topics, from modern CSS techniques to JavaScript frameworks. It's a great resource for both beginners and experienced developers looking to keep up with the latest trends and technologies.</Link></li>
        <li><Link to="post2">Description: CSS-Tricks is a blog by Chris Coyier that focuses on web design and development, with a strong emphasis on CSS. The blog covers a variety of topics including CSS, JavaScript, front-end frameworks, and web design principles.

Why It's Useful: CSS-Tricks offers practical advice and tutorials, often with a focus on real-world use cases and problems. It’s an excellent resource for learning new techniques and improving your web development skills. The blog also includes a useful "Almanac" section with detailed explanations of CSS properties and concepts.  </Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Blog;
