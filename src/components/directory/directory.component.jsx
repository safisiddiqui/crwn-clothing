import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'; 

import {selectDirectiorySections} from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

const Directory = ({sections}) => (
       <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps})=> (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
        </div>
        );
 
   const mapStateToProps = createStructuredSelector({
     sections: selectDirectiorySections
   });

export default connect(mapStateToProps)(Directory);