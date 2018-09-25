import React from 'react'

module.exports = [
  {
    title: '',
    backingColor: '#608390',
    textColor: '#eee',
    content: [{
      title: 'In brief...',
      summary: (
        <React.Fragment>
          I’m a junior <b>Georgia Tech</b> student born and raised in Charleston, SC, making my way to the big city of Atlanta to pursue my love of CS. My time here has let me explore every coding venture I’m willing to go after, exploring <b>animated SVGs</b> to <a href="https://devpost.com/software/hole-blind">VR gaming experiences</a> and everything in between. Being part of a culture has nerdy as I am certainly helps; I’m never short on advice from other devs or games of Smash Bros to cool off after tough exams. Oh, I also like <b>charcoal sketching</b> in my spare time, in case you couldn’t tell 🙂
        </React.Fragment>
      ),
      colors: {
        primary: '#2BFF88',
        secondary: '#08AEEA',
      },
    }]
  },
  {
    title: 'Work Experience',
    content: [{
      title: 'Snag',
      summary: (
        <React.Fragment>
          My summer spent with the Snag team brought an interesting blend of old codebases, Mario Kart, modern backend practices with <b>C#</b>, and countless dodged Nerf bullets. Fellow intern <a href="https://www.linkedin.com/in/medenzon/">Michael Edenzon</a> and I were given a single task: rewrite the company’s employee assessment portal in a <b>DotNet Core + SQL</b> application. This added a level of creative independence most software internships miss, allowing us to write a new application from the ground up.
        </React.Fragment>
      ),
      img: {
        name: 'snagImage',
        alt: 'Snag logo sketch with downtown Charleston in the background',
      },
      colors: {
        primary: '#6916CB',
        secondary: '#73ADFD',
      },
      links: [{
        href: 'https://www.snagajob.com/about/',
        icon: 'link',
      }, {
        href: 'https://www.facebook.com/snag.co/',
        icon: 'logoFacebook',
      }],
    },
    {
      title: 'Good Done Great',
      summary: (
        <React.Fragment>
          GDG gave me an opportunity few high school sophomores get: working on a real world codebase as a project team member. My novice coding knowledge was stretched to the limit, abandoning the object oriented principles of <b>Java</b> for markup languages and callback functions with <b>AngularJS</b>. By the third summer, I completed the company’s nonprofit image gallery, a guided website tour, fixed countless analytics tables, and even built a cross platform app in <b>Ionic</b> from the ground up.
        </React.Fragment>
      ),
      img: {
        name: 'gdgImage',
        alt: 'GDG logo sketch with the Charleston Ravenel Bridge in the background',
      },
      colors: {
        primary: '#3C8FFF',
        secondary: 'transparent',
      },
      links: [],
    }]
  },
  {
    title: 'Activities',
    backingColor: '#444',
    textColor: '#eee',
    content: [{
      title: 'RoboJackets',
      summary: (
        <React.Fragment>
          As a new Georgia Tech student, I thought: why not join the biggest computing based club on campus? Joining a club over 100 members strong with 5 competitive divisions, I was a proud contributor to <b>C++</b> codebase backing project Bigoli, a semi-autonomous RC vehicle that went on to win the <a href="https://robotracing.wordpress.com/">IARRC</a> this past July. Currently, I’m focusing on behind-the-scenes logistics as a frontend project leader for the <a href="https://github.com/RoboJackets/onken-web">Onken</a> vendor communication portal. This is being built with <b>Next + ReactJS frontend</b> and a <b>Django + SQL backend.</b>
        </React.Fragment>
      ),
      colors: {
        primary: '#F1DF5A',
        secondary: '#f1be5a',
      },
      links: [{
        href: 'https://robojackets.org/',
        icon: 'link',
      }, {
        href: 'https://github.com/RoboJackets',
        icon: 'logoGithub',
      }]
    }]
  },
  {
    title: 'Personal Projects',
    content: [{
      title: 'Chekt + Bullets',
      summary: (
        <React.Fragment>
          As a college student looking for how to make people’s lives easier, I naturally looked to how I organize my schoolwork. Using an iPad note taking app and my phone’s task manager for years, I realized two things: <b>neither</b> were very capable, and they could both work better if they were connected to the same system. That’s where Chekt and Bullets come in, sharing your collections of notes and tasks in one place to help you see everything you need to get done, and all the tools you need to do it. You can <a href="https://medium.com/p/924a45e1a588/edit">read my quaint proposal</a> for more information.
        </React.Fragment>
      ),
      colors: {
        primary: '#772CE5',
        secondary: '#F6D72E',
      },
      links: [{
        href: 'https://xd.adobe.com/spec/fe7e41eb-e355-4918-6370-28a5f32af2a0-884f/',
        icon: 'logoAdobe',
      }, {
        href: 'https://github.com/Holben888/Chekt',
        icon: 'logoGithub',
      }]
    }, {
      title: 'Microsoft Hack Productivity',
      summary: (
        <React.Fragment>
          This hackathon stood out in Devpost’s sea of exciting projects because of how open ended it was, letting entrees solve any problem they could think of using Microsoft’s robust APIs. I decided on the <b>AngularJS + vanilla JS</b> based chrome extension <b>OutLink</b> to let the user mark up any webpage they wanted and send those notes via OutLook. Using a <b>content script</b> and some sneaky invisible tags to hide markup information in an email, the final app let people with the extension share annotated webpages right from their browser.
        </React.Fragment>
      ),
      colors: {
        primary: '#0179DB',
        secondary: 'transparent',
      },
      links: [{
        href: 'https://devpost.com/software/outlink',
        icon: 'logoDevpost',
      }, {
        href: 'https://github.com/Holben888/OutLink',
        icon: 'logoGithub',
      }]
    }]
  }
]