import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, handleChange }) {
  return (
    <form>
      <input type="text" value={title} onChange={handleChange} name={'title'} placeholder="title"></input>
      <input type="texxt" value={subtitle} onChange={handleChange} name={'subtitle'} placeholder="subtitle"></input>
    </form>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Controls;
