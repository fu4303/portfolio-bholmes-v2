import React from 'react'

export default [
  {
    title: '',
    backingColor: '#608390',
    textColor: '#eee',
    content: [
      {
        title: 'In brief...',
        summary: (
          <React.Fragment>
            I’m a junior <b>Georgia Tech</b> student born and raised in
            Charleston, SC, making my way to the big city of Atlanta to pursue
            my love of CS. My time here has let me explore every coding venture
            I’m willing to go after, exploring <b>animated SVGs</b> to{' '}
            <a href="https://devpost.com/software/hole-blind">
              VR gaming experiences
            </a>{' '}
            and everything in between. Being part of a culture has nerdy as I am
            certainly helps; I’m never short on advice from other devs or games
            of Smash Bros to cool off after tough exams. Oh, I also like{' '}
            <b>charcoal sketching</b> in my spare time, in case you couldn’t
            tell 🙂
          </React.Fragment>
        ),
        colors: {
          primary: '#2BFF88',
          secondary: '#08AEEA',
        },
      },
    ],
  },
  {
    title: 'Industry XP',
    titleColor: '#6916CB',
    content: [
      {
        title: 'Snag',
        summary: (
          <React.Fragment>
            My summer spent with the Snag team brought an interesting blend of
            old codebases, Mario Kart, modern backend practices with <b>C#</b>,
            and countless dodged Nerf bullets. Fellow intern{' '}
            <a href="https://www.linkedin.com/in/medenzon/">Michael Edenzon</a>{' '}
            and I were given a single task: rewrite the company’s employee
            assessment portal in a <b>DotNet Core + SQL</b> application. This
            added a level of creative independence most software internships
            miss, allowing us to write a new application from the ground up.
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
        links: [
          {
            href: 'https://www.snagajob.com/about/',
            icon: 'link',
          },
          {
            href: 'https://www.facebook.com/snag.co/',
            icon: 'logoFacebook',
          },
        ],
      },
      {
        title: 'Good Done Great',
        summary: (
          <React.Fragment>
            GDG gave me an opportunity few high school sophomores get: working
            on a real world codebase as a project team member. My novice coding
            knowledge was stretched to the limit, abandoning the object oriented
            principles of <b>Java</b> for markup languages and callback
            functions with <b>AngularJS</b>. By the third summer, I completed
            the company’s nonprofit image gallery, a guided website tour, fixed
            countless analytics tables, and even built a cross platform app in{' '}
            <b>Ionic</b> from the ground up.
          </React.Fragment>
        ),
        img: {
          name: 'gdgImage',
          alt:
            'GDG logo sketch with the Charleston Ravenel Bridge in the background',
        },
        colors: {
          primary: '#3C8FFF',
          secondary: 'transparent',
        },
        links: [],
      },
    ],
  },
  {
    title: 'Activities',
    titleColor: '#F1DF5A',
    backingColor: '#444',
    textColor: '#eee',
    content: [
      {
        title: 'Bits of Good',
        summary: (
          <>
            <b>Current role:</b> Executive Director of Engineering <br />
            <br /> The <a href="https://bitsofgood.org">
              Bits of Good org
            </a>{' '}
            (yes, our website is getting reimagined these next few months 😆)
            was my first exposure to a team genuinely as excited about web dev
            as I am. I was tossed into a team lead role my first semester,
            tasked with getting a long-in-the-making admin web portal for the
            nonprofit <a href="https://www.drawchange.org">DrawChange</a> to the
            finish line. It was an amazing first experience working with a
            client directly, transforming feedback from progress calls into
            bite-sized GitHub issues for my teammates and myself. Encouraged by
            helping a nonprofit succeed and seeing the enthusiasm of the club
            directors, I decided to jump onto the exec board. Currently, I am
            building a bootcamp curriculum for new members to get fired up
            working with the <b>MERN stack 🔥</b>
          </>
        ),
        colors: {
          primary: '#F1DF5A',
          secondary: '#F08A09',
        },
        links: [
          {
            href: 'https://github.com/GTBitsOfGood',
            icon: 'logoGithub',
          },
        ],
        mainLink: {
          text: 'See my latest updates on BoG',
          icon: 'logoTwitter',
          href:
            'https://twitter.com/search?f=tweets&vertical=default&q=%40bholmesdev%20bits%20of%20good&src=typd',
        },
      },
      {
        title: 'Golden Swarm Games',
        summary: (
          <>
            <b>Current role:</b> Designer, website maintainer <br />
            <br /> Getting involved with GSG was my chance to go solo flexing my
            frontend skills and design sensibilities on an official site (beyond
            my own pet projects of course). The club is only 12 members strong
            but full of fire, working to ideate, design, produce, and eventually
            market it's first ever board game: <i>Escape to Ellysium</i>. The
            concept is still in its early play test stages, so to get more
            members to push the project harder/better/faster, the team needed a
            kicka** website to advertise their passion. I took it as a chance to
            go crazy, exploring the exotic JS framework{' '}
            <a href="https://svelte.dev">Svelte</a> in the process.
          </>
        ),
        colors: {
          primary: '#FFD033',
          secondary: '#3D56B0',
        },
        links: [
          {
            href: 'https://github.com/Holben888/gsg-site',
            icon: 'logoGithub',
          },
        ],
        mainLink: {
          text: 'Explore the finished product',
          icon: 'arrowRight',
          href: 'https://gsg.surge.sh',
        },
      },
      {
        title: 'RoboJackets',
        summary: (
          <React.Fragment>
            As a new Georgia Tech student, I thought: why not join the biggest
            computing based club on campus? Joining a club over 100 members
            strong with 5 competitive divisions, I was a proud contributor to{' '}
            <b>C++</b> codebase backing project Bigoli, a semi-autonomous RC
            vehicle that went on to win the{' '}
            <a href="https://robotracing.wordpress.com/">IARRC</a> this past
            July. Currently, I’m focusing on behind-the-scenes logistics as a
            frontend project leader for the{' '}
            <a href="https://github.com/RoboJackets/onken-web">Onken</a> vendor
            communication portal. This is being built with{' '}
            <b>Next + ReactJS frontend</b> and a <b>Django + SQL backend.</b>
          </React.Fragment>
        ),
        colors: {
          primary: '#F1DF5A',
          secondary: '#F08A09',
        },
        links: [
          {
            href: 'https://robojackets.org/',
            icon: 'link',
          },
          {
            href: 'https://github.com/RoboJackets',
            icon: 'logoGithub',
          },
        ],
      },
    ],
  },
  {
    title: 'Cool Projects',
    titleColor: '#026BFF',
    content: [
      {
        title: 'BuildGT Hack - Roombowling',
        summary: (
          <>
            I've definitely attended{' '}
            <a href="https://devpost.com/Holben888?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
              my fair share of hackathons
            </a>{' '}
            as a GA Tech student, but{' '}
            <a href="https://build.hack.gt">BuildGT2</a> was easily my favorite
            win. Our team's goal was simple from the start: reserve the Roomba
            ASAP, wing it from there. Inspired by a childhood classic, Wii
            Bowling, we decided to create an over-engineered frame of bowling
            with a Roomba as the ball. Some serious tech was involved: <br />
            <b>• </b> A Kinect motion camera using <b>Processing lang</b> to
            detect fallen pins <br />
            <b>• </b>{' '}
            <a href="https://twitter.com/BHolmesDev/status/1102254956973826048">
              A webapp running on Svelte and web sockets{' '}
            </a>{' '}
            for gameplay instructions and classic bowling alley animations{' '}
            <br />
            <b>• </b> A Raspberry Pi to host a <b>Python server</b> so
            everything could communicate with each other <br />
          </>
        ),
        colors: {
          primary: '#026BFF',
          secondary: '#01E1FF',
        },
        links: [
          {
            href: 'https://github.com/Holben888/roombowling-game-display',
            icon: 'logoGithub',
          },
        ],
        mainLink: {
          text: 'Experience the suck-iest game of bowling 🎳',
          href: 'https://devpost.com/software/roomballing',
          color: '#ffffff',
        },
      },
      {
        title: '32 Bit Rackets for Game Boy',
        summary: (
          <>
            Though I've found my niche in frontend dev and design, my interest
            in programming all started making simple games in Java. I spent my
            first few years of high school using and abusing Java.Swing to{' '}
            <a href="https://imgur.com/a/edUgWnK">
              recreate my favorite titles.
            </a>{' '}
            I had yet to rekindle this passion in just recently, when our system
            fundamentals class tasked us with creating a game in <b>C</b> using
            a Game Boy emulator. <br />The end result: a tennis simulator
            against a CPU skilled enough to send shivers down Serena William's
            spine. I pushed the emulator to its limits calculating arc
            velocities, jumpshots, angle characteristics, and match-based
            scoring. 40+ hours later, I couldn't be happier with the result!
          </>
        ),
        colors: {
          primary: '#E72832',
          secondary: '#EBDB2A',
        },
        img: {
          name: 'gbaImage',
          alt: 'An animated GIF of tennis gameplay',
        },
        links: [
          {
            href: 'https://github.com/Holben888/32BitRackets',
            icon: 'logoGithub',
          },
        ],
        mainLink: {
          text: 'Demo the AAA title 🎮',
          href: 'https://gba.zucc.io/',
          color: '#ffffff',
        },
      },
    ],
  },
]
