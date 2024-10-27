import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import {
  initializeGoogleAnalytics,
  trackGoogleAnalyticsCustomEvent
} from '../utils/google-analytics/index'
import {
  socialCategory,
  githubClickAction,
  linkedinClickAction,
  instagramClickAction
} from '../utils/google-analytics/events/socials'

initializeGoogleAnalytics()

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        👋 Sawasdee Krub, I&apos;m a developer based in Bangkok!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" textAlign="center">
            Panupong Chimmai
          </Heading>
          <Heading as="h4" size="md" textAlign="center">
            - Alpha -
          </Heading>
          <p style={{ textAlign: 'center' }}>
            Software Engineer / Full-Stack Developer
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/alpha-3.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Alpha is a dedicated and versatile Computer Engineering graduate eager
          to contribute as a Software Engineer or in a related role. I possess
          strong professional and technical skills honed through various work
          experiences. Proficient in working within agile environments, I have
          substantial expertise in web development, encompassing both frontend
          and backend technologies. With hands-on experience in AWS, I am
          passionate about clean coding and continuously expanding my knowledge
          of emerging technologies.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Bangkok, Thailand.
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Moved to Mahasarakham, Thailand.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Graduated elementary school from the Holy Infant Jesus Mahasarakham
          School.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Graduated middle school from Phadungnaree School.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated high school from Sarakhampittayakhom School.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Intern as a programmer at AERO Group (1992) for 3 months.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated with a bachelor's degree in Computer Engineering from Khon
          Kaen University with first-class honors.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started working as a full-time Software Engineer at{' '}
          <Link href="https://wisesight.com/" target="_blank">
            WISESIGHT
          </Link>
          . Served for nearly a year.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Entered military service at 12th Military District, located in
          Prachinburi. Active duty for 1 year. 🎖️
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Excited to join the{' '}
          <Link href="https://www.shipnity.com/" target="_blank">
            Shipnity
          </Link>{' '}
          team as a full-time Full Stack Developer! 🤩💻
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Programming Languages</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>-</BioYear>
          JavaScript, TypeScript, HTML/CSS, Go, Python, C/C++, PHP, SQL
        </BioSection>
        <BioSection mt={{ base: 3 }}>
          <BioYear>Frameworks / Libraries</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>-</BioYear>
          NodeJS, ExpressJS, ReactJS, NextJS, Tailwind CSS, Bootstrap 5, GraphQL, Laravel, Jest, PyTest
        </BioSection>
        <BioSection mt={{ base: 3 }}>
          <BioYear>Software / Tools</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>-</BioYear>
          Docker, Git, Postman, MySQL, PosgtreSQL, MongoDB, Firebase, Linux,
          AWS, Arduino IDE, Figma, Adobe Photoshop
        </BioSection>
        <BioSection mt={{ base: 3 }}>
          <BioYear>Hardware</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>-</BioYear>
          ESP32, ESP8266, Arduino
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, Animals, Art, Music, Drawing, Movies/Series, Cooking
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/alphanomy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
                onClick={trackGoogleAnalyticsCustomEvent(
                  socialCategory,
                  githubClickAction,
                  '@alphanomy'
                )}
              >
                @alphamomy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/panupong-chimmai-6880821b6/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
                onClick={trackGoogleAnalyticsCustomEvent(
                  socialCategory,
                  linkedinClickAction,
                  '@Panupong Chimmai'
                )}
              >
                @Panupong Chimmai
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/alphanomy_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
                onClick={trackGoogleAnalyticsCustomEvent(
                  socialCategory,
                  instagramClickAction,
                  '@alphanomy_'
                )}
              >
                @alphanomy_
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
