// styles
import '../../styles/Genesis.css'
// components
import Header from '../../components/Header'
import Organizers from '../../components/Organizers'
import Databox from '../../components/genesis/Databox'
import Faq from '../../components/genesis/FAQ'
import Drop from '../../components/Drop'
import bogota from '../../static/bogota.png'
import collage from '../../static/collage.png'
import { useRef } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import Subtitle from '../../components/Subtitle'

export default function Genesis() {
  const organizersRef = useRef()
  const dropRef = useRef()

  const scrollPosition = useScrollPosition()
  let backgroundImgPosition = `${scrollPosition}px`
  let dropPosition = dropRef?.current?.offsetTop
  let opacityBackground = 1 - scrollPosition / dropPosition
  let displayBackground = scrollPosition > dropPosition ? 'none' : 'block'

  return (
    <>
      <div
        className='background-image'
        style={{
          top: `${backgroundImgPosition}`,
          opacity: `${opacityBackground}`,
          display: `${displayBackground}`,
        }}
      ></div>
      <section className='genesisContainer'>
        <Header active='genesis' />
        <div className='genesisMainText'>
          <strong>Introducing Infinite Genesis in Bogotá</strong>
        </div>
        <Subtitle />

        <div className='imgContainer'>
          <img src={bogota} alt='bogota' className='bodyGenesis' />
        </div>
        <div className='bodyContainer'>
          <div className='bodyGenesis bodyText'>
            <p className='genesisBodyTitle'>
              Welcome to the inaguration of Infinite.
            </p>

            <p className='bodyParagraphs'>
              In this celebratory iniatiation of Infinite, hackers from far and
              wide will congregate around the beautiful city of Bogotá, Colombia
              to collaborate, build, and prepare for the coming events at Devcon
              VI.
            </p>
            <p className='bodyParagraphs'>
              Infinite arose from an innate desire to provide the industry with
              a special type of hackathon - a more intimate experience where
              builders can come to learn with minimal interruptions. Hackers
              will be able to unleash their innovative and creative energy while
              avoiding distractions, inefficiencies, and other unnecessary fuss.
            </p>
          </div>
        </div>

        <div className='bodyContainer'>
          <div ref={organizersRef}>
            <Organizers />
          </div>
          <div className='bodyGenesis bodyText uniquePhrase bodyContainer'>
            The most unique take on a “hacker-first” hackathon in Ethereum.
          </div>
          <div className='dataBoxContainer'>
            <Databox
              title='NO NOISE'
              body='Infinite Genesis opted not to seek outside sponsors to minimize distractions and elevate the level of technical experience. Instead, it opted for an aligned co-organization process.'
              footer='Co - Organizers'
              customStyle='databox-left databox column'
              internalRef={organizersRef}
            />
            <Databox
              title='PUBLIC JUDGING'
              body='Judges will be chosen by event organizers; members drawn from involved communities. Both project presentations and judging will be conducted in public featuring real-time results.'
              footer=' '
              customStyle='databox-center databox column'
            />
            <Databox
              title='EAGER MENTORS'
              body='Infinite features a collection of deeply experienced mentors from throughout the Ethereum ecosystem. Hackers can approach mentors for guidance at any time during the event.'
              footer='Apply as Mentor'
              externalLink='https://twitter.com/messages/compose?recipient_id=1544019424382009345'
              customStyle='databox-right databox column'
            />
          </div>
          <div className='bodyContainer'>
            <img src={collage} alt='bogota' className='bodyGenesis' />
          </div>
          <div className='bodyGenesis bodyText bodyContainer'>
            <p className='genesisBodyTitle'>
              A gorgeous and accommodating venue.
            </p>
            <p className='bodyParagraphs'>
              The hackathon of the future will happen in an environment
              conducive to creation and innovation. Hilton DoubleTree Conference
              Salitre, in Bogotá Colombia, will house the first of many
              wandering the Infinite. Weary travellers will have access to
              breakfast, lunch and dinner, with snacks and refreshments all day
              long. <br />
            </p>
          </div>
          <div className='bodyGenesis bodyText'>
            <p className='genesisBodyTitle'>A collection of fun prizes. </p>
            <p className='bodyParagraphs'>
              Infinite will award a variety of interesting rewards to hackers,
              including medals, NFTs and crypto. Organizers will be hosting
              their own bounties alongside this.
            </p>
          </div>
          <div className='bodyGenesis bodyText'>
            <p className='genesisBodyTitle'>A variety of incentives. </p>
            <p className='bodyParagraphs'>
              There are <i>infinite</i> reasons to join Infinite hackathons.
              Participation in the genesis event grants hackers access to travel
              grants, hacker house accommodation, token prizes, and much more.
              Learn how to become eligible at the{' '}
              <a
                style={{ 'text-decoration': 'underline' }}
                href='https://discord.gg/sqrHkJgA2w'
              >
                Infinite Discord
              </a>
              !
            </p>
          </div>
          <Faq />
        </div>
      </section>
      <div ref={dropRef}>
        <Drop />
      </div>
    </>
  )
}
