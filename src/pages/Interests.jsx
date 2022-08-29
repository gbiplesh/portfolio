import React from 'react';
import "./../css/interest.css";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExploreIcon from '@mui/icons-material/Explore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNav } from '../customHooks/useNav';

const Interests = () => {
  const interestsRef = useNav('Interests');
  return ( 
    <section ref={interestsRef} id='interestsContainer'>
      
      <h3>Interests</h3>

      <div className='interest-list'>
        <ul>
          <li>
            <div className='interest-blocks'>
              <span className='interest-blocks-items'>
              <PhotoCameraIcon sx={{ fontSize: 80 }} />
              <h2>Photography</h2>
              </span>
            </div>
          </li>
          <li>
            <div className='interest-blocks'>
              <span className='interest-blocks-items'>
              <MusicNoteIcon sx={{ fontSize: 80 }} />
              <h2>Guitar</h2>
              </span>
            </div>
          </li>
          <li>
            <div className='interest-blocks'>
              <span className='interest-blocks-items'>
              <ExploreIcon sx={{ fontSize: 80 }} />
              <h2>Exploring</h2>
              </span>
            </div>
          </li>
          <li>
            <div className='interest-blocks'>
              <span className='interest-blocks-items'>
              <AutoStoriesIcon sx={{ fontSize: 80 }} />
              <h2>Reading</h2>
              </span>
            </div>
          </li>

        </ul>
      </div>


    </section>
   );
}
 
export default Interests;