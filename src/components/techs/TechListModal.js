import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: {techs, loading} }) => {

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div id="tech-list-modal" className='modal'>
      <div className='modal-content'>
        <h4>Technologies List</h4>
        <ul className='collection with-header'>
          {!loading && techs !== null && techs.map(tech => (
            <li className='collection-item' key={tech.id}>
              {tech.firstName} {tech.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
};


TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs}) (TechListModal);
