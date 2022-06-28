import React from "react";
import {Link, useStaticQuery, graphql} from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, } 
  from "./Layout.module.css";

function Layout({ pageTitle, children}){

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);

  return(
    <>
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className="siteTitle">{data.site.siteMetadata.title}</header>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About</Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/blog">Blog</Link>
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