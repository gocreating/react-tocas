import React from 'react';

let GithubButton = ({
  type,
  href,
  countHref,
  countApi,
  countAriaLabel,
  ariaLabel,
  children,
  ...rest
}) => (
  <a
    className="github-button"
    href={href}
    data-style={type}
    data-count-href={countHref}
    data-count-api={countApi}
    data-count-aria-label={countAriaLabel}
    aria-label={ariaLabel}
    {...rest}
  >
    {children}
  </a>
);

GithubButton.defaultProps = {
  type: 'mega',
}

export default GithubButton;
