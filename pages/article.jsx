import React from 'react'
import ArticleMeta from '@/component/Meta/Article'

import dateFormatter from '@/lib/date-formatter'

import article from '../src/fixture/article'
import author from '../src/fixture/author'

import Container from '@/component/Primitive/Container'
import SpacedList from '@/component/Primitive/SpacedList'
import Type from '@/component/Primitive/Type'

import Blockquote from '@/component/Primitive/Blockquote'
import Byline from '@/component/Primitive/Byline'
import CaptionedMedia from '@/component/Primitive/CaptionedMedia'
import Floater from '@/component/Primitive/Floater'
import Prose from '@/component/Primitive/Prose'
import ResponsiveImage from '@/component/Primitive/ResponsiveImage'
import ResponsiveMedia from '@/component/Primitive/ResponsiveMedia'

const ArticlePage = () => (
  <>
    <ArticleMeta
      title={article.headline}
      // customTitle /* opts out of the default titleTemplate */
      description={article.sell}
      slug={article.slug}
      images={[
        {
          url: 'https://source.unsplash.com/800x600?nature',
          width: 800,
          height: 600,
          alt: 'Example alt test'
        }
      ]}
      publishedTime={dateFormatter(article.displayDate, 'ISO')}
      // modifiedTime="2018-01-21T18:04:43Z"
      // expirationTime="2022-12-21T22:04:11Z"
      authorName={author.name}
      publisherName="Publisher Name"
      publisherLogo="https://source.unsplash.com/600x60?nature"
    />

    <SpacedList>
      <Container size="wide" center>
        <ResponsiveMedia ratio={3 / 8}>
          <ResponsiveImage
            alt=""
            src="https://source.unsplash.com/800x300?nature"
          />
        </ResponsiveMedia>
      </Container>

      <Container size="medium" center gutter>
        <Type as="h1" size="title">
          {article.headline}
        </Type>
        <Byline
          author={author.name}
          timestamp={dateFormatter(article.displayDate, 'ISO')}
          displayDate={dateFormatter(article.displayDate, 'LLL')}
        />
      </Container>

      {/* TEXT WIDGET */}
      <Container size="medium" center gutter noClearfix>
        <Prose>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Cras mattis
            consectetur purus sit amet fermentum. Etiam porta sem malesuada
            magna mollis euismod.
          </p>
        </Prose>
      </Container>

      {/* INLINE IMAGE WIDGET */}
      <Container size="large" center>
        <Floater size="small" align="left">
          <CaptionedMedia
            caption={
              <Type size="small">Example caption to accompany image</Type>
            }
          >
            <ResponsiveMedia ratio={9 / 16}>
              <ResponsiveImage
                src="https://source.unsplash.com/800x450?nature"
                alt="Description of visual content"
              />
            </ResponsiveMedia>
          </CaptionedMedia>
        </Floater>
      </Container>

      {/* TEXT WIDGET */}
      <Container size="medium" center gutter noClearfix>
        <Prose>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Cras mattis
            consectetur purus sit amet fermentum. Etiam porta sem malesuada
            magna mollis euismod.
          </p>
        </Prose>
      </Container>

      {/* INLINE VIDEO WIDGET */}
      <Container size="medium" center gutter>
        <Floater>
          <CaptionedMedia
            caption={
              <Type size="small">Example caption to accompany video</Type>
            }
          >
            <ResponsiveMedia ratio={9 / 16}>
              <video
                muted
                controls
                poster="https://img.clock.co.uk/640x360"
                // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              />
            </ResponsiveMedia>
          </CaptionedMedia>
        </Floater>
      </Container>

      {/* BLOCKQUOTE WIDGET */}
      <Container size="small" center gutter>
        <Blockquote citation="Firstname Lastname">
          This is an amazing pull quote for an article
        </Blockquote>
      </Container>

      {/* HTML WIDGET */}
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<strong style="background:#00f;color:#fff">custom HTML</strong>'
        }}
      />
    </SpacedList>
  </>
)

export default ArticlePage
