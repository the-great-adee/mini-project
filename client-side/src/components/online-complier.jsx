import React from 'react'
import { Link } from 'react-router-dom';
import HeadNavBar from './head-nav-bar';
import FootNavBar from './foot-nav-bar';
function OnlineComplier() {
  return (
    <>
    <HeadNavBar />
    <embed type="text/html" src="https://www.programiz.com/python-programming/online-compiler/" width="1500" height="2000">
    </embed>
    <FootNavBar />
    </>
  );
}

export default OnlineComplier;