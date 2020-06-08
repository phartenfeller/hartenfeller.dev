import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Imprint = () => (
  <Layout>
    <SEO title="Privacy" meta={[{ name: 'robots', content: 'noindex' }]} />
    <header className="grid grid-cols-3 py-2">
      <div className="flex">
        <Link
          className="text-red-800 py-2 px-4 self-center font-semibold tracking-wider"
          to="/"
        >
          <svg
            className="inline-block h-8 mr-2 text-red-700"
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7 13.25l-.573.614a.2.2 0 000 .272l5.327 5.707a.2.2 0 00.292 0l1.127-1.206a.2.2 0 000-.273l-3.945-4.228a.2.2 0 010-.272l3.945-4.228a.2.2 0 000-.273l-1.127-1.206a.2.2 0 00-.292 0L12.7 13.25z"
            />
          </svg>
          BACK
        </Link>
      </div>
      <h1 className="text-3xl text-center">Privacy Policy</h1>
    </header>
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
