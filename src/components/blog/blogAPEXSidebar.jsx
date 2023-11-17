import React from 'react';

const BlogAPEXSidebar = () => (
  <div className="blog-sidebar">
    <span className="text-lg font-semibold">Check out the APEX Community:</span>
    <ul className="mt-5 flex flex-col space-y-4 text-lg">
      <li>
        <a href="https://apex.world/ords/f?p=100:700:">
          APEX Plug-ins | apex.world
        </a>
      </li>
      <li>
        <a href="https://apps.cloudnueva.com/apexblogs">
          Curated list of APEX blogs | cloudnueva.com
        </a>
      </li>
      <li>
        <a href="https://twitter.com/search?q=%23orclapex&src=typed_query">
          #orclapex | Twitter
        </a>
      </li>
      <li>
        <a href="https://apex.oracle.com/en/community/">
          APEX Community | apex.oracle.com
        </a>
      </li>
      <li>
        <a href="https://clocwise.org">
          APEX related events and conferences | clocwise.org
        </a>
      </li>
    </ul>
  </div>
);

export default BlogAPEXSidebar;
