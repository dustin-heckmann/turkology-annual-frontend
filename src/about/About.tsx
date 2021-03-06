import React from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

const About = () => (
  <div id="about">
    <BreadcrumbsItem to="/about">About</BreadcrumbsItem>

    <h3>The Turkology Annual</h3>
    <p>
      The Turkologischer Anzeiger/Turkology Annual (TA), founded by Andreas
      Tietze (&dagger;) and György Hazai, is an indispensable systematic
      bibliography for Turkology and Ottoman Studies. Experts from all over the
      world contribute to its compilation, which is funded by several
      institutions including the UNESCO. The volumes edited by the Department of
      Oriental Studies of the University of Vienna have until now only appeared
      in printed form.
    </p>
    <h3>Turkology Annual Online</h3>
    <p>
      Our project at Heidelberg University&apos;s
      <a href="http://www.asia-europe.uni-heidelberg.de/en/home.html">
        {' '}
        Cluster of Excellence &quot;Asia and Europe in a Global Context&quot;
      </a>{' '}
      has digitized the first 26 published TA volumes and for the first time
      provides an online &quot;re-published&quot; version of the resource with
      new and efficient search functionality. The entries of volume 27-28, which
      was published in 2010 after the start of our project, will be added as
      soon as possible.
    </p>
    <p>
      The TA contains entries in a large number of different languages,
      including transcriptions of Arabic and languages using the Cyrillic
      alphabet. Even single entries may contain chunks in several different
      languages. We expected this to constitute a serious problem for
      digitization using the Optical Character Recognition (OCR) software
      available at the Cluster of Excellence: Even very good OCR results are
      still hardly acceptable for building a database, as entries that contain
      recognition mistakes cannot be reliably retrieved in search. However, it
      turned out that accordingly fine-tuned, OCR results were of such a high
      quality that the few remaining errors were mostly irrelevant for typical
      search queries. While this meant that the effort of developing automatic
      OCR correction software would not be justified for our project, we
      encountered problems of another kind: Syntax analysis of the TA entries
      proved to be much harder than anticipated, as entry types and data
      structures are often only implicitly marked, and some of them change from
      volume to volume. Additionally, syntax analysis (parsing) had to cope with
      structural errors in the entries - errors that human editors have made and
      that human readers would not even notice, but errors that can be serious
      problems for parsing. Our parsing software therefore needed to be tailored
      on the data in order to be comprehensive as well as robust.
    </p>
    <ul>
      <li>
        <a href="http://www.asia-europe.uni-heidelberg.de/fileadmin/Documents/Research_Areas/HRA/Turkology_Annual_Online/TA_Online_Poster2009.pdf">
          Poster
        </a>{' '}
        presented at the{' '}
        <a href="http://www.asia-europe.uni-heidelberg.de/en/newsevents/events/annual-conference/archive/annual-conference-2009.html">
          Annual Conference 2009 &quot;Flows of Images and Media&quot;
        </a>
      </li>
      <li>
        <a href="http://www.asia-europe.uni-heidelberg.de/fileadmin/Documents/Research_Areas/HRA/Turkology_Annual_Online/TA_Online_Poster2010.pdf">
          Poster
        </a>{' '}
        presented at the{' '}
        <a href="http://www.asia-europe.uni-heidelberg.de/de/aktuelles/berichte/magazin-detail/m/the-flow-of-concepts-and-institutions-annual-conference-2010.html">
          Annual Conference 2010 &quot;Flows of Concepts and Institutions&quot;
        </a>
      </li>
      <li>
        <a href="/static/docs/Citation_Segmentation-SCCH_2013-Slides.pdf">
          Slides
        </a>{' '}
        and{' '}
        <a href="/static/docs/Citation_Segmentation-SCCH_2013-Abstract.pdf">
          Abstract
        </a>{' '}
        presented at the conference{' '}
        <a href="http://scch2013.wordpress.com/">
          Scientific Computing and Cultural Heritage 2013
        </a>
      </li>
      <li>
        Heckmann, Dustin, Anette Frank, Matthias Arnold, Peter Gietz, and
        Christian Roth. &quot;Citation Segmentation from Sparse &amp; Noisy
        Data: A Joint Inference Approach with Markov Logic Networks.&quot;
        Digital Scholarship in the Humanities 31, no. 2 (2016, First published
        online 8 December 2014): 333-356.{' '}
        <a href="http://dx.doi.org/10.1093/llc/fqu061">
          doi:10.1093/llc/fqu061
        </a>
        .
      </li>
    </ul>
    <h3>Partners</h3>
    <ul>
      <li>
        <a href="http://orientalistik.univie.ac.at">
          Department of Oriental Studies, University of Vienna (page in German)
        </a>
        <br />
        (publisher of the TA)
      </li>
      <li>
        <a href="http://www.nytud.hu/eng/index.html">
          Research Institute for Linguistics, Hungarian Academy of Sciences,
          Budapest
        </a>
        <br />
        (editorial office)
      </li>
      <li>
        <a href="http://www.cl.uni-heidelberg.de/index_en.mhtml">
          Department of Computational Linguistics, Heidelberg University
        </a>
        <br />
        (TA Online conception and programming)
      </li>
      <li>
        <a href="http://www.islamwissenschaft.uni-hd.de/index_english.html">
          Department of Languages and Cultures of the Near East (Islamic
          Studies), Heidelberg University
        </a>
        <br />
        (project patronage, TA copies for scanning)
      </li>
    </ul>
    <h3>The Team</h3>
    <ul>
      <li>
        Prof. Dr. Anette Frank: project director (Computational Linguistics)
      </li>
      <li>Prof. Dr. Michael Ursinus: project director (Islamic Studies)</li>
      <li>
        Matthias Arnold: coordination (image processing and user interface)
      </li>
      <li>
        Peter Gietz: coordination (integration into Heidelberg Research
        Architecture)
      </li>
      <li>Christian Roth: general coordination</li>
      <li>Arina Chitavong: scanning</li>
      <li>Jens Hansche: scanning</li>
      <li>Nicolas Bellm: programming (database programming)</li>
      <li>Mateusz Dolata: programming (syntax analysis)</li>
      <li>Dustin Heckmann: programming (user interface)</li>
    </ul>
    <h3>Important note</h3>
    <p>
      We are not involved in the actual editing of the TA. For any questions,
      please contact the editors or the University of Vienna.
    </p>
  </div>
)
export default About
