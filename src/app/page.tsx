"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Youtube, Instagram, Twitter, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="noiseDiagonalGradient"
      cardStyle="glass-outline-light"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          brandName="LFAFO"
          navItems={[
            { name: "About", id: "about" },
            { name: "Destinations", id: "destinations" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Watch Now", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit 
          logoText="LFAFO"
          description="Lets F Around and Find Out. Join us as we travel the world, embrace the unexpected, and discover what happens when you stop planning and start exploring."
          buttons={[
            { text: "Watch Episodes", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890667958-kksw8gzk.jpg"
          imageAlt="Epic adventure travel landscape"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout 
          heading={[
            { type: "text", content: "The Show That Throws Away The Map" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Subscribe", href: "contact" }
          ]}
        />
      </div>
      
      <div id="destinations" data-section="destinations">
        <FeatureCardNine 
          title="Destination Highlights"
          description="Scroll through our most unforgettable moments from around the globe"
          features={[
            {
              id: 1,
              title: "Tropical Paradise Chaos",
              description: "We arrived with no reservations, no itinerary, and somehow ended up leading a community festival. Wild doesn't begin to describe it.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890668929-c5riyydz.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890669766-qmx57pci.jpg"
              }
            },
            {
              id: 2,
              title: "Mountain Madness",
              description: "Took a wrong turn at base camp and discovered a hidden village. The locals invited us to stay. Best mistake we ever made.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890670875-x0vwtxzn.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890671685-v5vd3cgr.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardSix 
          title="Meet The Adventurers"
          description="The fearless crew behind every unplanned journey"
          members={[
            {
              id: "1",
              name: "Alex Rivers",
              role: "Chief Explorer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890672522-a41ufhz3.jpg",
              imageAlt: "Alex Rivers"
            },
            {
              id: "2",
              name: "Jordan Sky",
              role: "Adventure Coordinator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890673180-u82qmkva.jpg",
              imageAlt: "Jordan Sky"
            },
            {
              id: "3",
              name: "Casey Wild",
              role: "Experience Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890673780-zu5mctyr.jpg",
              imageAlt: "Casey Wild"
            },
            {
              id: "4",
              name: "Morgan Cross",
              role: "Production Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890674535-06lmnymb.jpg",
              imageAlt: "Morgan Cross"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo 
          title="What Viewers Are Saying"
          description="Real feedback from people who watch us find out"
          testimonials={[
            {
              id: "1",
              name: "Emma Thompson",
              role: "Travel Enthusiast",
              testimonial: "This show completely changed how I think about travel. No schedules, no stress, just pure adventure. I'm hooked.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890675170-ur4eqipm.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Adventure Seeker",
              testimonial: "Finally a travel show that feels real. These guys actually get into situations and handle them on the fly. Brilliant.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890675902-9bwqvp5l.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              name: "Sophie Andersen",
              role: "Content Creator",
              testimonial: "The authenticity is refreshing. Every episode teaches me something about the world and about myself. Absolutely love it.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890676477-ktcg5u5k.jpg",
              imageAlt: "Sophie Andersen"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Wanderer",
              testimonial: "This is what travel content should be. Raw, unscripted, and genuinely inspiring. Can't wait for the next season.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890677003-e36tthh8.jpg",
              imageAlt: "David Rodriguez"
            },
            {
              id: "5",
              name: "Lisa Kim",
              role: "Documentary Fan",
              testimonial: "The editing, the storytelling, the spontaneity. Every episode is a masterpiece. These people deserve all the recognition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890677631-wpdpljoy.jpg",
              imageAlt: "Lisa Kim"
            },
            {
              id: "6",
              name: "James Wright",
              role: "Explorer",
              testimonial: "Inspired me to finally take that trip I've been planning. If they can figure it out on the fly, so can I. Game changer.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890678398-7u5px21k.jpg",
              imageAlt: "James Wright"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase 
          title="Questions? We've Got Answers"
          description="Everything you need to know about the show"
          faqs={[
            {
              id: "1",
              title: "How do you decide where to go?",
              content: "We don't. That's the whole point. We pick a continent, close our eyes, spin a globe, and go where our finger lands. Sometimes we flip a coin. The chaos is the magic."
            },
            {
              id: "2",
              title: "What if something goes really wrong?",
              content: "We've had situations where things got sketchy, but that's exactly why we film. Our team is trained in safety and emergency protocols, but we keep the experience as authentic as possible."
            },
            {
              id: "3",
              title: "Where can I watch new episodes?",
              content: "New episodes drop weekly on our streaming platform and YouTube. Subscribe to our newsletter below to get notified the moment episodes release."
            },
            {
              id: "4",
              title: "Can I apply to be featured on the show?",
              content: "Absolutely. If you have a destination tip, a wild experience to share, or want to meet us somewhere, reach out through our contact page. We love viewer participation."
            },
            {
              id: "5",
              title: "Do you plan anything in advance?",
              content: "We arrange visas, basic insurance, and camera equipment. Everything else is a mystery. We book flights, hostels, and transportation on the go. Full improvisation mode."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit 
          tag="Stay Connected"
          title="Get Updates On New Episodes"
          description="Subscribe to our newsletter and be the first to know about new destinations, behind-the-scenes content, and viewer meet-ups around the globe."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890679221-ei3tmhtz.jpg"
          imageAlt="Adventure travel landscape"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your inbox. No spam, just adventure. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard 
          logoText="LFAFO"
          copyrightText="© 2025 Let's F Around and Find Out. All rights reserved."
          socialLinks={[
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:contact@lfafo.com", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}