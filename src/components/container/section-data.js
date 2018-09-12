import React from 'react'

module.exports = [
  {
    title: 'Work Experience',
    content: [{
      title: 'Snag',
      summary: (
        <React.Fragment>
          My summer spent with the Snag team brought an interesting blend of old codebases, Mario Kart, modern backend practices with <b>C#</b>,
          and countless dodged Nerf bullets. Fellow intern <a href="https://www.linkedin.com/in/medenzon/">Michael Edenzon</a> and I were
          given a single task: rewrite the company’s employee assessment portal in a <b>DotNet Core + SQL</b> application. This added a level of
          creative independence most software internships miss, allowing us to write a new application from the ground up.
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
          My first time diving into JavaScript and frontend development practices.
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