import React from 'react'

module.exports = [
  {
    title: 'Work Experience',
    content: [{
      title: 'Snag',
      summary: (
        <p>
          My summer spent with the Snag team brought an interesting blend of old codebases, Mario Kart, modern backend practices with C#,
          and countless dodged Nerf bullets. Fellow intern <a href="https://www.linkedin.com/in/medenzon/">Michael Edenzon</a> and I were
          given a single task: rewrite the company’s employee assessment portal in a DotNet Core + SQL application. This added a level of
          creative independence most software internships miss, allowing us to write a new application from the ground up.
        </p>
      ),
      colors: {
        primary: '#270DEA',
        secondary: '#3C8FFF',
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
        <p>
          My first time diving into JavaScript and frontend development practices.
          </p>
      ),
      colors: {
        primary: '#3C8FFF',
        secondary: 'transparent',
      },
      links: [],
    }]
  }
]