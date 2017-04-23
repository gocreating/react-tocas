import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactDisqus extends Component{
  componentDidMount() {
    this.embedDisqus();
  }

  embedDisqus() {
    var disqus_config = function () {
      this.page.url = this.props.pageurl;
      this.page.identifier = this.props.identifier;
    };
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'https://' + this.props.shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  render() {
    return(
      <div>
        <div id="disqus_thread">
          <noscript>
            <span>
              Please enable JavaScript to view the
              <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a>
            </span>
          </noscript>
        </div>
      </div>
    )
  }
}

ReactDisqus.propTypes = {
  shortname: PropTypes.string.isRequired,
  pageurl: PropTypes.string,
  identifier: PropTypes.string,
};

ReactDisqus.defaultProps = {
  shortname: null,
  pageurl: window.location.href,
  identifier: null
};

export default ReactDisqus;
