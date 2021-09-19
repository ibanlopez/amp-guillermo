import Head from 'next/head';
import Link from 'next/link';
import AmpImage from '../components/amp-image';
import JsonLd from '../components/jsonLd';
import Layout from '../components/layout';
import AmpSidebar from '../components/sidebar';

import pageData from '../data/pageData';

export const config = {
  amp: true,
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Trabajo ultima un acuerdo con los sindicatos para subir el salario
          mínimo 15 euros desde septiembre
        </title>
        <link
          rel="canonical"
          href="https://www.eldiario.es/economia/trabajo-ultima-acuerdo-sindicatos-subir-salario-minimo-15-euros-septiembre_1_8307315.html"
        />
        <meta
          property="article:modified_time"
          content="2021-09-16T12:01:50+02:00"
        />
        <meta
          property="article:published_time"
          content="2021-09-16T09:40:43+02:00"
        />
        <meta property="article:section" content="Economía" />
        <meta
          name="description"
          content="Fuentes sindicales aún no dan por cerrado el pacto, pendientes de cómo se concreta el compromiso de alza para 2022, que quieren que se sitúe en los 1.000 euros"
        />
        <meta
          name="keywords"
          content="trabajo, ultima, acuerdo, sindicatos, subir, salario, minimo, 15, euros, septiembre"
        />
        <meta
          property="og:description"
          content="Fuentes sindicales aún no dan por cerrado el pacto, pendientes de cómo se concreta el compromiso de alza para 2022, que quieren que se sitúe en los 1.000 euros"
        />
        <meta
          property="og:image"
          content="https://static.eldiario.es/clip/fbe3120e-c871-4dad-ad9f-8e1f6418f508_facebook-watermarked-aspect-ratio_default_0.jpg"
        />
        <meta property="og:site_name" content="ElDiario.es" />
        <meta
          property="og:title"
          content="Trabajo ultima un acuerdo con los sindicatos para subir el salario mínimo 15 euros desde septiembre"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.eldiario.es/economia/trabajo-ultima-acuerdo-sindicatos-subir-salario-minimo-15-euros-septiembre_1_8307315.html"
        />
        <meta name="publisher" content="elDiario.es" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Fuentes sindicales aún no dan por cerrado el pacto, pendientes de cómo se concreta el compromiso de alza para 2022, que quieren que se sitúe en los 1.000 euros"
        />
        <meta
          name="twitter:image"
          content="https://static.eldiario.es/clip/fbe3120e-c871-4dad-ad9f-8e1f6418f508_twitter-watermarked-aspect-ratio_default_0.jpg"
        />
        <meta
          name="twitter:title"
          content="Trabajo ultima un acuerdo con los sindicatos para subir el salario mínimo 15 euros desde septiembre"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="cXenseParse:pageclass" content="article" />
        <meta name="cXenseParse:articleid" content="8307315" />
        <meta name="cXenseParse:pagetype" content="news" />
        <link
          rel="amphtml"
          href="https://www.eldiario.es/economia/trabajo-ultima-acuerdo-sindicatos-subir-salario-minimo-15-euros-septiembre_1_8307315.amp.html"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/fa-brands-400.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/fa-regular-400.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/fa-solid-900.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Sanomat-Bold.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Sanomat-Regular.woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/assets/img/svg/logos/eldiario-logo-2c.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://static.eldiario.es/clip/fbe3120e-c871-4dad-ad9f-8e1f6418f508_16-9-discover-aspect-ratio_default_0.jpg"
          as="image"
        />
        <JsonLd data={pageData} />
      </Head>
      <main>
        <div className="article-page main-container">
          <header className="header">
            <div className="logotipo-cont">
              <div className="logotipo">
                <Link href="/">
                  <a>
                    <AmpImage
                      alt="El diario"
                      width="167"
                      height="23"
                      src="/assets/img/svg/logos/eldiario-logo-2c.svg"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hamburguer-menu hamburguer-menu-cont">
              <button
                className="h-i hamburguer-icon black"
                type="button"
                on="tap:sidebar"
                role="button"
                tabIndex="0"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </header>
          <AmpSidebar />
          <div className="container-fluid">
            <div className="c-header">
              <div className="content-kicker">
                <p className="text">
                  <span className="title"></span>
                </p>
              </div>

              <div className="news-header">
                <h1 className="title">
                  Trabajo ultima un acuerdo con los sindicatos para subir el
                  salario mínimo 15 euros desde septiembre
                </h1>

                <ul className="footer">
                  <li>
                    Fuentes sindicales aún no dan por cerrado el pacto,
                    pendientes de cómo se concreta el compromiso de alza para
                    2022, que quieren que se sitúe en los 1.000 euros
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <main className="content-container col-12 ">
                <div className="c-content">
                  <footer className="rs-pill"></footer>

                  <div className="partner-wrapper">
                    <div className="second-col">
                      <figure className="news-image">
                        <AmpImage
                          alt="Yolanda Díaz al salir del pleno del Congreso."
                          src="https://static.eldiario.es/clip/fbe3120e-c871-4dad-ad9f-8e1f6418f508_16-9-discover-aspect-ratio_default_0.jpg"
                          width="1200"
                          height="675"
                          layout="responsive"
                        ></AmpImage>

                        <figcaption className="footer">
                          Yolanda Díaz al salir del pleno del Congreso.
                          <span className="author">
                            {' '}
                            Sergio R. Moreno / Gtres
                          </span>{' '}
                        </figcaption>
                      </figure>
                    </div>

                    <footer className="n-i news-info">
                      <div className="info-wrapper">
                        <p className="authors">
                          <a href="https://www.eldiario.es/autores/laura_olias/">
                            Laura Olías
                          </a>
                        </p>

                        <div className="date-comments-wrapper">
                          <time className="date">
                            <span className="day">
                              16 de septiembre de 2021
                            </span>
                            <span className="hour">09:40 h</span>
                          </time>
                          <p className="comments">
                            <i className="far fa-comment-alt"></i>0
                          </p>
                        </div>
                      </div>
                      <div className="twitter-wrapper">
                        <a
                          href="https://twitter.com/@laura_olias"
                          className="twitter-account"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                          @laura_olias
                        </a>
                      </div>
                    </footer>
                  </div>

                  <div className="partner-wrapper morecontentfromtheauthor">
                    <div className="second-col">
                      <aside className="news-onfrontpage" data-href="">
                        <h2 className="title">Lo más leído por los socios</h2>

                        <div className="row">
                          <ul className="col-12 new-fronpage">
                            <li className="new-fronpage">
                              <div className="new-img">
                                <amp-img
                                  alt="Qué es el enjambre sísmico que está sacudiendo La Palma y cuál es el riesgo de una erupción"
                                  src="https://static.eldiario.es/clip/c49fdae1-334f-412d-99ee-66cf03fe96a2_16-9-aspect-ratio_default_0.jpg"
                                  width="880"
                                  height="495"
                                ></amp-img>
                              </div>

                              <div className="new-info">
                                <a
                                  href="/canariasahora/lapalmaahora/"
                                  className="new-category"
                                >
                                  La Palma Ahora
                                </a>
                                <a
                                  href="/canariasahora/lapalmaahora/enjambre-sismico-sacudiendo-palma_1_8305872.amp.html"
                                  className="new-title"
                                >
                                  Qué es el enjambre sísmico que está sacudiendo
                                  La Palma y cuál es el riesgo de una erupción
                                </a>
                              </div>
                            </li>

                            <li className="new-fronpage">
                              <div className="new-info">
                                <a href="/opinion/" className="new-category">
                                  Opinión
                                </a>
                                <a
                                  href="/opinion/mesa_131_8306712.amp.html"
                                  className="new-title"
                                >
                                  La mesa
                                </a>
                              </div>
                            </li>

                            <li className="new-fronpage">
                              <div className="new-info">
                                <a href="/sociedad/" className="new-category">
                                  Sociedad
                                </a>
                                <a
                                  href="/sociedad/ultima-hora-coronavirus-actualidad-politica-16-septiembre_6_8307175.amp.html"
                                  className="new-title"
                                >
                                  Última hora sobre el coronavirus y la
                                  actualidad política
                                </a>
                              </div>
                            </li>

                            <li className="new-fronpage">
                              <div className="new-img">
                                <amp-img
                                  alt="Paul Auster da voz al cronista más joven de las cloacas de Estados Unidos"
                                  src="https://static.eldiario.es/clip/83637a47-cd95-4ff5-8b10-0d82ba00256f_16-9-aspect-ratio_default_0.jpg"
                                  width="880"
                                  height="495"
                                ></amp-img>
                              </div>

                              <div className="new-info">
                                <a
                                  href="/cultura/libros/"
                                  className="new-category"
                                >
                                  Libros
                                </a>
                                <a
                                  href="/cultura/libros/paul-auster-stephen-crane-biografia_1_8309732.amp.html"
                                  className="new-title"
                                >
                                  Paul Auster da voz al cronista más joven de
                                  las cloacas de Estados Unidos
                                </a>
                              </div>
                            </li>

                            <li className="new-fronpage">
                              <div className="new-info">
                                <a href="/sociedad/" className="new-category">
                                  Sociedad
                                </a>
                                <a
                                  href="/sociedad/incidencia-cae-debajo-100-casos-primera-vez-junio_1_8308290.amp.html"
                                  className="new-title"
                                >
                                  La incidencia cae por debajo de los 100 casos
                                  por primera vez desde junio
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </main>
            </div>

            <div className="row">
              <div className="cmp-footer">
                <div className="footer-image-wrapper">
                  <amp-img
                    className="footer-image"
                    alt="Logo El Diario"
                    src="/assets/img/svg/logos/eldiario-logo-2c.svg"
                    height="24"
                    width="170"
                  ></amp-img>
                  <p>Periodismo a pesar de todo</p>
                </div>

                <div className="icons-container">
                  <div className="soIcons icons-wrapper">
                    <p className="icons-title">Descubre nuestras apps</p>
                    <div className="icons">
                      <a
                        title="Android"
                        href="https://play.google.com/store/apps/details?id=es.eldiario.app&amp;hl=es"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-android"></i>
                      </a>
                      <a
                        title="Apple"
                        href="https://apps.apple.com/es/app/eldiario-es/id1119554082"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-apple"></i>
                      </a>
                    </div>
                  </div>

                  <div className="shareIcons icons-wrapper">
                    <p className="icons-title">Vivimos en redes</p>
                    <div className="icons">
                      <a
                        title="Twitter"
                        href="https://www.twitter.com/eldiarioes"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        title="Facebook"
                        href="https://www.facebook.com/eldiarioes"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        title="Telegram"
                        href="https://t.me/eldiarioes"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                      <a
                        title="Instagram"
                        href="https://www.instagram.com/eldiarioes"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        title="RSS"
                        href="/rss/"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <i className="fas fa-rss"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="footer-info">
                  <p className="footer-title">
                    Necesitamos tu apoyo económico para hacer un periodismo
                    riguroso y con valores sociales
                  </p>

                  <a
                    id="hazte-socio-footer"
                    href="https://usuarios.eldiario.es/hazte_socio"
                    className="footer-btn transparent-btn"
                  >
                    HAZTE SOCIO, HAZTE SOCIA
                  </a>
                </div>
              </div>

              <div className="footer-links">
                <ul className="links-list">
                  <li className="link-item">
                    <a className="link" href="/que-es-eldiario-es/">
                      Qué es elDiario.es
                    </a>
                  </li>
                  <li className="link-item">
                    <a className="link" href="/el-equipo/">
                      El equipo
                    </a>
                  </li>
                  <li className="link-item">
                    <a
                      className="link"
                      href="https://creativecommons.org/licenses/by-nc/4.0/deed.es"
                    >
                      Creative Commons
                    </a>
                  </li>
                  <li className="link-item">
                    <a className="link" href="/aviso_legal/">
                      Aviso legal
                    </a>
                  </li>
                  <li className="link-item">
                    <a className="link" href="/privacidad/">
                      Política de privacidad
                    </a>
                  </li>
                  <li className="link-item">
                    <a className="link" href="/preguntas-y-respuestas/">
                      FAQ
                    </a>
                  </li>
                  <li className="link-item">
                    <a on="tap:didomi.prompt()" className="link">
                      Mis cookies
                    </a>
                  </li>
                  <li className="link-item">
                    <a className="link" href="/contacto/">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
