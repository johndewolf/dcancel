import React, { Component } from "react"
import davidCancel from '../img/David-Cancel.png'
import podcastCover from '../img/podcast-cover.png'
import dcLogo from '../img/dc-logo.png'
import dcLogoSm from '../img/dc-logo-sm.png'

import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'
//publication logos
import nyTimes from '../img/ny-times.png'
import forbes from '../img/forbes.png'
import fortune from '../img/fortune.png'
import techcrunch from '../img/techcrunch.png'
import hbr from '../img/hbr.png'
import entrepreneur from '../img/entrepreneur.png'
import '../scss/styles.scss'

const App = ({data}) => {

  return (
    <div>
      <section className=" bg-dark hero-section">
        <div className="container">
          <div className="row navigation">
            <div className="col-2">
              <img src={dcLogoSm} />
            </div>
            <div className="col-10">
              <nav>
                <a href="#talks" className="footer-link">Videos</a>
                <a href="#talks" className="footer-link">Podcast</a>
                <a href="#talks" className="footer-link">Recommended Books</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="section-padding container">
          <div className="row">
            <div className="col-8">
              <h1 className="with-label with-label__white">5x entrepreneur</h1>
              <h1>CEO of Drift</h1>
              <p className="hero-quote">"Quote by DC Friend"</p>
              <div className="hero-quote-name">-Person Name</div>
            </div>
          </div>
        </div>
        <img src={davidCancel} className="dc-hero"/>
      </section>
      <section className="section-padding bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="with-label with-label__white">Watch This</h2>
            </div>
          </div>
          <div className="row">
            {console.log(data)}
            {data.allContentfulHomepageVideos.edges.map((video, i) => {
              return (
                <div className="col-6" key={i}>
                  <img src={video.node.videoThumbnail.file.url} />
                  <div className="video-title">{video.node.title}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section-padding" id="podcast">
        <div className="container">
          <div className="row">
            <div className='col-12'>
              <h2 className="with-label with-label__black">My Podcast</h2>
            </div>
          </div>
          <div className="podcast-banner margin-top">
            <div className="podcast-cover">
              <img src={podcastCover} />
            </div>
            <div className="podcast-text">
              Join the 20000+ strong community. Updated weekly.
            </div>
            <div className="podcast-button text-center">
              <a href="https://soundcloud.com/seekingwisdom" className="btn yellow">Subscribe</a>
            </div>
          </div>
          <div className="row margin-top">
            <div className='col-12'>
              <h2 className="with-label with-label__black">Listen to this</h2>
            </div>
          </div>
          <div className="row margin-top">
            <div className="col-12">
            {data.allContentfulSoundcloudEmbeds.edges.map((podcast, i) => {
              let url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+podcast.node.soundcloudId+"&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              return (
                 <div key={i}>
                <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src={url}></iframe>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding container">
        <h2 className="with-label with-label__black">RECOMMENDED READING</h2>
        <div className="row">
        {data.allContentfulHomepageBooks.edges.map((book, i) => {
          return (
            <div className="col-sm-3 margin-top book-col" key={i}>
              <img src={book.node.bookCover.file.url} className="book-cover margin-center" />
              <div className="book-title text-center">{book.node.title}</div>
              <div className="text-center"><a href={book.node.link} className="btn btn__sm ghost-black" target="_blank">Buy</a></div>
            </div>
          )
        })}
        </div>
      </section>
      <section className="section-padding container">
        <h2 className="with-label with-label__black">David has been featured in</h2>
        <div className="logo-section">
           <img src={nyTimes} className="publication-logo" />
           <img src={forbes} className="publication-logo" />
           <img src={fortune} className="publication-logo" />
           <img src={techcrunch} className="publication-logo" />
           <img src={hbr} className="publication-logo" />
           <img src={entrepreneur} className="publication-logo" />
        </div>
      </section>
      <footer className="bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={dcLogo} />
              <div className="margin-top">
                <h4 className="with-label with-label__white">Reach out</h4>
                <div className="social-icons margin-top__sm">
                  <a href="https://twitter.com/dcancel/" className="social-link" target="_blank"><img src={twitter} /></a>
                  <a href="https://www.youtube.com/channel/UCwdKmeYQ76Sh22lfTiFg5fg" className="social-link" target="_blank"><img src={youtube} /></a>
                  <a href="https://www.linkedin.com/in/dcancel/" className="social-link" target="_blank"><img src={linkedin} /></a>
                  <a href="https://www.instagram.com/dcancel" className="social-link" target="_blank"><img src={instagram} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 footer-links">
              <a href="#talks" className="footer-link">Videos</a>
              <a href="#talks" className="footer-link">Podcast</a>
              <a href="#talks" className="footer-link">Recommended Books</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
export default App;

export const query = graphql`
  query HomepageQuery {
    allContentfulHomepageVideos(limit:4){
  	  edges{
  	    node {
  	      id,
          title,
  				videoThumbnail{
            id,
            file {
  						contentType
              fileName
              url
            }
          }
        },
  	  }
    },
    allContentfulHomepageBooks(limit:4){
      edges{
        node{
          title,
          link,
          bookCover {
            id,
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    },
  	allContentfulSoundcloudEmbeds(limit: 4){
      edges{
        node{
          soundcloudId
        }
      }
    }
  }
`
