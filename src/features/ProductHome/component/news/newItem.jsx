import PropTypes from 'prop-types';
import React from 'react';

newItem.propTypes = {
  items: PropTypes.object,
};

function newItem({ items }) {
  const { images, title, content, date, link } = items;
  return (
    <div className="post_item">
      <div className="post_adside">
        <div className="post_figure">
          <a href={link}>
            <img src={images} alt="" />
          </a>
        </div>
      </div>
      <header className="post_header">
        <div className="post_date">
          <span>{date}</span>
        </div>
        <div className="post_title">
          <span>{title}</span>
        </div>
      </header>
      <footer className="post_footer">
        <div className="post_action">
          <span>{content}</span>
        </div>
      </footer>
    </div>
  );
}

export default newItem;
