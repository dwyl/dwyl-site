[![Build Status](https://travis-ci.org/dwyl/dwyl-site.svg?branch=master)](https://travis-ci.org/dwyl/dwyl-site)[![Dependency Status](https://david-dm.org/dwyl/dwyl-site.svg)](https://david-dm.org/dwyl/dwyl-site)
[![devDependency Status](https://david-dm.org/dwyl/dwyl-site/dev-status.svg)](https://david-dm.org/dwyl/dwyl-site?type=dev)

# *Welcome* to the dwyl website!

It's as ever a work in progress, so please don't hesitate to [share your ideas](https://github.com/dwyl/dwyl-site/issues) on how to make it better!

The current site is designed by [@harrygfox](https://github.com/harrygfox) and built by [@Cleop](https://github.com/cleop), [@ZooeyMiller](https://github.com/ZooeyMiller), [@finnhodgkin](https://github.com/finnhodgkin) and [@markwilliamfirth](https://github.com/markwilliamfirth).

You can see the original [Invision slides here](https://projects.invisionapp.com/share/VSBOA5D8B) :sparkles:

## How?

## Technology

**Hosted on GitHub Pages**

**Functional CSS with Tachyons :heart:**

Hop over to [learn-tachyons](https://github.com/dwyl/learn-tachyons) to find out
how we use functional css to power our website.

**Javascript**

We've kept JS to a minimum on the site, using it only when required to
enhance UX, and taking every care to ensure that it
[gracefully degrades](https://github.com/dwyl/learn-progressive-web-apps)
for users with JavaScript disabled.

**Serverless forms via Google scripts**

We're using our very own set up for submitting forms without having a back end
set up. If you're interested in learning how it works, check out out
[html-form-send-email-via-google-script-without-server repo!](https://github.com/dwyl/html-form-send-email-via-google-script-without-server)

### How do I add myself to the team page?

You'll need to copy and past this block of code, replace your details where
noted, and paste it at the bottom of the team section (just before the closing
`<section>` tag, with a comment `<!-- END TEAM PROFILES -->`) in `team.html`.

```html
<div class="dib w-25-l w-30-ml w-90 pt5 v-top">
  <input type="checkbox" id="YOUR-NAME" class="dn">
  <label for="YOUR-NAME" class="pointer">
    <img src="./img/common/team/YOUR-GITHUB-HANDLE.png" alt="YOUR-NAME" class="br-100 w5 w4-plus-l">
    <p class="b dwyl-dark-grey f4 mb2">YOUR-NAME</p>
    <p class="mt1">YOUR-JOB-ROLE</p>
  </label>
  <div class="dn description">
    <a href="https://github.com/YOUR-GITHUB-HANDLE" class="mr3 link dwyl-bg-yellow br-100 center w2 h2 dib">
      <span class="f0">YOUR-NAME's GitHub</span>
      <i class="fa fa-github dwyl-dark-gray f3 v-mid pt1 center pr1" aria-hidden="true"></i>
    </a>
    <div class="mh1 dib"> </div>
    <a href="https://twitter.com/YOUR-TWITTER-HANDLE" class="ml3 link dwyl-bg-yellow br-100 center w2 h2 dib">
      <span class="f0">YOUR-NAME's Twitter</span>
      <i class="fa fa-twitter dwyl-dark-gray f3 v-mid pt1 center pr1" aria-hidden="true"></i>
    </a>
    <p class="ph4 lh-copy tl">
      YOUR-SELF-DESCRIPTION-(50-100 words)
    </p>
  </div>
</div>
```

### Viewing locally

To view the site locally you'll need to clone the repo and install live-server:

```
npm i -g live-server && git clone https://github.com/dwyl/dwyl-site.git && cd dwyl-site
```

Run `live-server` inside the dwyl-site directory to view the site with
hot-reloading enabled. Unfortunately most of the links won't work because the
live site uses clean URLs - `/values` rather than `/values.html` - which aren't
supported by live-server. As a short-term solution just add `.html` to the url
after following a link.  

### Accessibility

The site meets WCAG 2.0 Level A for accessibility. Please
[raise an issue](https://github.com/dwyl/dwyl-site/issues) if you notice any
accessibility problems!
