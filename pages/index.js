import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
var flow;


// check your console 

export default function Home() {
  useEffect(() => {
    if (process.browser) {
      flow = new Flow({
        target: 'your upload api url',
        query: { upload_token: 'token' },
      });
      flow.assignBrowse(document.getElementById('browseButton'));
      flow.assignDrop(document.getElementById('dropTarget'));
      // flow.assignBrowse(browseButton);
      // flow.assignDrop(dropTarget);
      console.log('flow');
      console.log(flow);

      flow.on('fileAdded', function (file, event) {
        console.log('File Added', file, event);
      });
      flow.on('fileSuccess', function (file, message) {
        console.log('File Success', file, message);
      });
      flow.on('fileError', function (file, message) {
        console.log('File Error', file, message);
      });
    }
  }, []);

  function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.body.append(script);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Flow JS</title>
        <meta name="description" content="Flow JS" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="flow.min.js"></script>
      </Head>
      Select file(s) &nbsp;
      <input type="button" value="Browse" id="browseButton" />
      <br /><br />
      OR 
      <br /><br />
      <div id="dropTarget">Drop file(s) here</div>
      <br />
      <input
        type="button"
        value="Upload"
        id="uploadButton"
        onClick={() => flow.upload()}
      />
    </div>
  );
}
