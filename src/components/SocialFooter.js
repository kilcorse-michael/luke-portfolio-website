import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialFooter = () => {
  return(
    <div className="container">
      <div className= "socialFooter">
        
          <a   target = "_blank"
               rel="noopener noreferrer"
               href="https://www.facebook.com/luke.kilcorse.5"
               className="facebook social"
            >
               <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a   target = "_blank"
               rel="noopener noreferrer"
               href="https://www.youtube.com/channel/UCeDBvdRJret6GqZLROEODyw"
               className="youtube social"
            >
               <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a   target = "_blank"
               rel="noopener noreferrer"
               href="https://twitter.com/lkilcorse?lang=en"
               className="twitter social"
            >
               <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a   target = "_blank"
               rel="noopener noreferrer"
               href="https://www.instagram.com/luke_kilcorse/"
               className="instagram social"
            >
               <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
      </div>
    </div>

  );

}

export default SocialFooter;
