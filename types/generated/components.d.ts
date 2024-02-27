import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedV extends Schema.Component {
  collectionName: 'components_shared_vs';
  info: {
    displayName: 'V';
    icon: 'alien';
  };
  attributes: {
    Youtube: Attribute.JSON &
      Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface SharedYoutube extends Schema.Component {
  collectionName: 'components_shared_youtubes';
  info: {
    displayName: 'Youtube';
    icon: 'picture';
  };
  attributes: {
    Youtube: Attribute.JSON &
      Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface YoutubeOembed extends Schema.Component {
  collectionName: 'components_youtube_oembeds';
  info: {
    displayName: 'OEMBED';
    icon: 'slideshow';
  };
  attributes: {
    OEMBED: Attribute.Text & Attribute.CustomField<'plugin::oembed.oembed'>;
  };
}

export interface YoutubeYoutube extends Schema.Component {
  collectionName: 'components_youtube_youtubes';
  info: {
    displayName: 'Youtube';
    icon: 'picture';
  };
  attributes: {
    Youtube: Attribute.JSON &
      Attribute.CustomField<'plugin::video-field.video'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.v': SharedV;
      'shared.youtube': SharedYoutube;
      'youtube.oembed': YoutubeOembed;
      'youtube.youtube': YoutubeYoutube;
    }
  }
}
