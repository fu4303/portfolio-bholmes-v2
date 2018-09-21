import React from 'react'

module.exports = [
  {
    title: 'Work Experience',
    content: [{
      title: 'Snag',
      summary: (
        <React.Fragment>
          My summer spent with the Snag team brought an interesting blend of old codebases, Mario Kart, modern backend practices with <b>C#</b>, and countless dodged Nerf bullets. Fellow intern <a href="https://www.linkedin.com/in/medenzon/">Michael Edenzon</a> and I were given a single task: rewrite the company’s employee assessment portal in a <b>DotNet Core + SQL</b> application. This added a level of creative independence most software internships miss, allowing us to write a new application from the ground up.
        </React.Fragment>
      ),
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
      colors: {
        primary: '#3C8FFF',
        secondary: 'transparent',
      },
      links: [],
    }]
  }
]