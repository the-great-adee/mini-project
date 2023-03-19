import React from 'react'
import HeadNavBar from './head-nav-bar';
import FootNavBar from './foot-nav-bar';
function JavaComplier() {
  return (
    <>
    <HeadNavBar />
    <embed type="text/html" src="https://www.programiz.com/java-programming/online-compiler/" width="1500" height="2000">
    </embed>
    <FootNavBar />
    </>
  );
}

export default JavaComplier;