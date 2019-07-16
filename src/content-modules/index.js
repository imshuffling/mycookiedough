import React from 'react'
import PropTypes from 'prop-types'

// import BlockTextArea from './blocktextarea';
// import BlockTextAreaNoPageTitle from './blocktextareanopagetitle';
// import BlockIntroText from './blockintrotext';
// import BlockDownloadLink from './blockdownloadlink';
// import BlockResources from './blockresources';
// import BlockGridWrapper from './blockgridwrapper';
// import BlockAccordion from './blockaccordion';
// import BlockContacts from './blockcontacts';
// import BlockTextWithImage from './blocktextwithimage';
// import BlockInlineImages from './blockinlineimages';
import BlockVideo from './blockvideo';
import BlockText from './blocktext';
import BlockImage from './blockimage';

const MODULE_MAP = {
//   ContentfulBlockTextArea: BlockTextArea,
//   ContentfulBlockTextAreaNoPageTitle: BlockTextAreaNoPageTitle,
//   ContentfulBlockIntroText: BlockIntroText,
//   ContentfulBlockDownloadLink: BlockDownloadLink,
//   ContentfulBlockGridWrapper: BlockGridWrapper,
//   ContentfulBlockResourcesWrapper: BlockResources,
//   ContentfulBlockAccordionWrapper: BlockAccordion,
//   ContentfulBlockContactsWrapper: BlockContacts,
//   ContentfulBlockTextWithImage: BlockTextWithImage,
//   ContentfulBlockInlineImages: BlockInlineImages,
  ContentfulBlockVideo: BlockVideo,
  ContentfulBlockText: BlockText,
  ContentfulBlockImage: BlockImage,
};

const propTypes = {
  blocks: PropTypes.any
};

export default function ContentModules({blocks}) {
  //console.log('---', blocks);
  return (
    <div className="blocks">
      {blocks.map(({"__typename": type, ...props}, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}

ContentModules.propTypes = propTypes;
