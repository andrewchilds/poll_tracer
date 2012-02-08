## Poll Tracer

### Installation

1. Create a new bookmark in your browser
2. Name it `Poll Tracer`
3. Copy-paste as the URL: `javascript:void(function(){var s=document.createElement('script');s.src='https://raw.github.com/andrewchilds/poll_tracer/master/poll_tracer.js';document.body.appendChild(s);})()`
4. Click the link on any page to see what, if anything, is using setTimeout or setInterval.

### Warning

This will effectively stop the page from functioning if it relies on polling, as it works by capturing setTimeout/setInterval call execution.
