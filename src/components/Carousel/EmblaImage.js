import React from 'react';
import PropTypes from 'prop-types';

const EmblaImage = ({ data }) => (
  <div className="embla__slide__img">
    <article className="mini-post" style={{ marginBottom: '0' }}>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </div>
    </article>
  </div>
);

EmblaImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmblaImage;
