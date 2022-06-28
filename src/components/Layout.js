import React from "react";
import {Link} from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText } 
  from "./Layout.module.css";

function Layout({ pageTitle, children}){
  return(
    <>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>

        <div>백엔드 개발자 최승근 - 기술블로그</div>
      </div>
    </>
  );
}

export default Layout;