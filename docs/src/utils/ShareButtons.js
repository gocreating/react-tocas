import React from 'react';
import {
  ShareButtons as SB,
  generateShareIcon
} from 'react-share';
import './ShareButtons.css';

let {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = SB;

let FacebookIcon = generateShareIcon('facebook');
let TwitterIcon = generateShareIcon('twitter');
let GooglePlusIcon = generateShareIcon('google');
let LinkedinIcon = generateShareIcon('linkedin');

let ShareButtons = ({ url, title }) => (
  <div>
    <FacebookShareButton
      url={url}
      title={title}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    <GooglePlusShareButton
      url={url}
    >
      <GooglePlusIcon size={32} round />
    </GooglePlusShareButton>

    <LinkedinShareButton
      url={url}
      title={title}
      windowWidth={750}
      windowHeight={600}
    >
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  </div>
);

export default ShareButtons;
