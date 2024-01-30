import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <h1>Post Organic Club</h1>
      <nav>
        <ul className="flex">
          <li className="flex-1 mr-2">
            <Link href="/tonight">
              <a className="text-center block border border-white rounded py-2 px-4 bg-transparent hover:bg-white hover:text-blue-500">
                Tonight Pava
              </a>
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link href="/post-organic-club">
              <a className="text-center block border border-white rounded py-2 px-4 bg-transparent hover:bg-white hover:text-blue-500">
                Post Organic Club
              </a>
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link href="/next-week">
              <a className="text-center block border border-white rounded py-2 px-4 bg-transparent hover:bg-white hover:text-blue-500">
                Next week
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

