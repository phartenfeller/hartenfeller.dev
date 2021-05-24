import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Imprint = () => (
  <Layout header>
    <SEO title="Privacy" meta={[{ name: 'robots', content: 'noindex' }]} />

    <h1 className="text-3xl text-center my-6">Privacy Policy</h1>
    <div className="m-auto w-3/4 md:w-1/2 mb-8">
      <h2 className="text-2xl my-4">Server-Log-Files</h2>
      <p className="text-gray-800 mb-2">
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log Files, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-2">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
      </ul>
      <p className="text-gray-800">
        Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
        Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
        wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
        werden.
      </p>
      <h2 className="text-2xl my-4">SSL Verschlüsselung</h2>
      <p className="text-gray-800 mb-2">
        Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
        Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
        Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und
        an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>

      <p className="text-gray-800">
        Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an
        uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>
    </div>
  </Layout>
);

export default Imprint;
