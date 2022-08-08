import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Calvin Tai</h2>
        <p>
          <a href="mailto:calvintai0402@gmail.com">calvintai0402@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Calvin. I like building interesting things. I am a software
        engineer at Meta where we move fast and build things. I am also a
        computer engineering and computer science graduate at{' '}
        <a href="https://www.colostate.edu/">Colorado State University</a>, and
        the founder/ex-president of CSU&apos;s table tennis association.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Calvin Tai.</p>
    </section>
  </section>
);

export default SideBar;
