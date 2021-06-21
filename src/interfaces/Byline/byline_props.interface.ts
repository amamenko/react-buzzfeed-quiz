type BylineProps = {
  /**
   * Whether or not to render the author information sub-header.
   */
  byline: boolean;
  /**
   * The name of the quiz creator.
   */
  bylineAuthor?: string;
  /**
   * URL to redirect to when byline author name is clicked.
   */
  bylineAuthorLink?: string;
  /**
   * Whether or not to open a new tab when redirecting to the byline author link URL upon author name click.
   */
  bylineAuthorLinkOpenInNewTab?: boolean;
  /**
   * Additional text to render under the author name in the byline.
   */
  bylineAuthorTagline?: string;
  /**
   * URL or local filename to be included in the byline's circular avatar image's src attribute.
   */
  bylineAvatarImageSrc?: string;
};

export default BylineProps;
