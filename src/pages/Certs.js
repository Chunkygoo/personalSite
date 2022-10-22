import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmblaCarousel from '../components/Carousel/EmblaCarousel';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Calvin Tai via email @ calvintai0402@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/certs">My Certificates</Link>
          </h2>
        </div>
      </header>
      <EmblaCarousel />
    </article>
  </Main>
);

export default Contact;
