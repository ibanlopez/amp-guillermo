export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        @font-face {
          font-family: Sanomat-Bold;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0025-00ff;
          src: local(Sanomat-Bold),
            url(/fonts/Sanomat-Bold.woff2) format('woff2');
        }

        @font-face {
          font-family: Sanomat-BoldItalic;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0025-00ff;
          src: local(Sanomat-BoldItalic),
            url(/fonts/Sanomat-BoldItalic.woff2) format('woff2');
        }

        @font-face {
          font-family: Sanomat-Regular;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0025-00ff;
          src: local(Sanomat-Regular),
            url(/fonts/Sanomat-Regular.woff2) format('woff2');
        }

        @font-face {
          font-family: Sanomat-RegularItalic;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0025-00ff;
          src: local(Sanomat-RegularItalic),
            url(/fonts/Sanomat-RegularItalic.woff2) format('woff2');
        }

        .fa,
        .fab,
        .fad,
        .fal,
        .far,
        .fas {
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }

        .fa-twitter:before {
          content: ${'F099'};
        }

        .fa-comment-alt:before {
          content: ${'F27A'};
        }

        .fa-chevron-right:before {
          content: ${'F054'};
        }

        .fa-facebook-f:before {
          content: ${'F39E'};
        }

        .fa-ellipsis-h:before {
          content: ${'F141'};
        }

        .fa-ellipsis-v:before {
          content: ${'F142'};
        }

        .fa-heart:before {
          content: ${'F004'};
        }

        .fa-whatsapp:before {
          content: ${'F232'};
        }

        .fa-telegram-plane:before {
          content: ${'F3FE'};
        }

        .fa-check-double:before {
          content: ${'F560'};
        }

        .fa-envelope:before {
          content: ${'F0E0'};
        }

        .fa-print:before {
          content: ${'F02F'};
        }

        .fa-pinterest:before {
          content: ${'F0D2'};
        }

        .fa-envelope-open:before {
          content: ${'F2B6'};
        }

        @font-face {
          font-family: Font Awesome5 Brands;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url(/fonts/fa-brands-400.woff2) format('woff2');
        }

        .fab {
          font-family: Font Awesome5 Brands;
        }

        @font-face {
          font-family: Font Awesome5 Free;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url(/fonts/fa-regular-400.woff2) format('woff2');
        }

        .fal,
        .far {
          font-weight: 400;
        }

        @font-face {
          font-family: Font Awesome5 Free;
          font-weight: 900;
          font-style: normal;
          font-display: swap;
          src: url(/fonts/fa-solid-900.woff2) format('woff2');
        }

        .fa,
        .fal,
        .far,
        .fas {
          font-family: Font Awesome5 Free;
        }

        .fa,
        .fas {
          font-weight: 900;
        }

        html {
          box-sizing: border-box;
        }

        *,
        :after,
        :before {
          box-sizing: inherit;
        }

        .container {
          max-width: 540px;
        }

        .container,
        .container-fluid {
          width: 100%;
          padding-right: 10px;
          padding-left: 10px;
          margin-right: auto;
          margin-left: auto;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -10px;
          margin-left: -10px;
        }

        .no-gutters {
          margin-right: 0;
          margin-left: 0;
        }

        .no-gutters > .col,
        .no-gutters > [class*='col-'] {
          padding-right: 0;
          padding-left: 0;
        }

        .col-6,
        .col-12 {
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 10px;
          padding-left: 10px;
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-12 {
          flex: 0 0 100%;
          max-width: 100%;
        }

        body {
          overflow-x: hidden;
        }

        body.focus {
          background-color: #f9e700;
        }

        body h1 {
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
          margin-bottom: 0.5rem;
        }

        blockquote,
        figure {
          margin: 0;
        }

        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
        }

        a:hover {
          opacity: 0.6;
        }

        .blue-btn {
          display: block;
          min-width: 280px;
          padding: 14px;
          outline: none;
          border: none;
          background-color: #004a7f;
          font: normal 600 14px/1.43 Encode Sans, Verdana;
          color: #fff;
        }

        .blue-btn:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
        }

        .transparent-btn {
          display: block;
          min-width: 280px;
          padding: 16px;
          text-align: center;
          outline: none;
          border: 1px solid #000;
          background-color: transparent;
          font: normal 500 21px normal Encode Sans, Verdana;
          color: #000;
          font-size: 13px;
        }

        .transparent-btn:hover {
          opacity: 1;
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
        }

        a.mention {
          font: normal 600 15px/1.4 Encode Sans, Verdana;
          color: #000;
          color: #004a7f;
        }

        a.mention:hover {
          text-decoration: none;
          opacity: 0.6;
          cursor: pointer;
        }

        .no-padding-mobile {
          padding: 0;
        }

        .amp-access {
          display: contents;
        }

        .c-header {
          padding-top: 10px;
        }

        .partner .c-header {
          max-width: 1040px;
          margin: 0 auto;
          flex: 0 0 100%;
        }

        .author-pill-wrapper {
          margin-top: 50px;
          padding-bottom: 12px;
        }

        .author-pill-wrapper,
        .rs-pill {
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .rs-pill {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          padding-top: 20px;
          padding-bottom: 15px;
        }

        .news-image {
          margin-top: 30px;
          margin-bottom: 25px;
        }

        .news-know-more {
          position: relative;
          bottom: -5px;
          margin-bottom: 30px;
          margin-top: 25px;
        }

        .recirculation {
          margin-top: 65px;
          padding-right: 0;
          padding-left: 0;
          border-right: 0;
          border-left: 0;
          border-bottom: 0;
        }

        .secondary-content .recirculation {
          margin-top: 40px;
        }

        .news-partners-recruitment,
        .news-square {
          margin: 30px 0;
        }

        .tags {
          margin-bottom: 32px;
        }

        .news-date {
          margin-bottom: 12px;
          padding-top: 15px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .buttons-rs-panel button:first-child {
          margin-left: 0;
        }

        .q {
          margin-top: 25px;
          margin-bottom: 25px;
        }

        .cmp-next-new {
          margin-top: 15px;
        }

        .cm-slider {
          margin-top: 20px;
          margin-bottom: 40px;
          padding-top: 5px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .cm-slider .cm-slider-wrapper {
          margin-left: -10px;
          margin-right: -10px;
        }

        .cm-comment {
          margin-top: 45px;
          margin-bottom: 30px;
          padding: 0 15px;
        }

        .news-onfrontpage {
          padding-top: 8px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .secondary-content .ad {
          padding: 0;
          border: none;
        }

        .header-container {
          padding: 0;
        }

        .cm-wrapper {
          padding: 0 10px;
        }

        .partner .article-page .ad {
          display: none;
        }

        .partner .article-page .c-content {
          margin-bottom: 40px;
        }

        .partner .article-page .recirculation {
          display: none;
        }

        .partner .article-page .cmp-next-new {
          margin-top: 45px;
          margin-bottom: 25px;
        }

        .ad-container {
          width: 100%;
          height: auto;
          z-index: 999;
          text-align: center;
          padding-bottom: 15px;
          margin-block-end: 1em;
          background-color: #f2f0f0;
        }

        .ad-container:before {
          display: block;
          position: relative;
          content: 'Publicidad';
          height: 20px;
          width: auto;
          font: 600 9px/19px Encode Sans, Verdana;
          text-transform: uppercase;
          color: #9b9b9b;
        }

        .ad-container amp-ad {
          margin: 0 auto;
          width: 100%;
          height: 90px;
        }

        .ad-container amp-ad amp-img {
          margin: auto;
        }

        .ad-container .ad {
          margin: 15px auto;
          padding: 15px 0;
          border: 3px solid transparent;
          border-right: 0;
          border-left: 0;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .ad-container .no-border-top {
          padding-top: 0;
          border-top: none;
        }

        #sibboCMPIframe {
          position: fixed;
          bottom: 0;
          left: 0;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          width: 100%;
          height: 100%;
        }

        amp-consent {
          position: static;
        }

        .hamburguer-menu {
          display: flex;
        }

        .h-i {
          width: 25px;
          height: 18px;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
        }

        .h-i:focus {
          outline: none;
        }

        .h-i:hover {
          opacity: 0.6;
          transition: 0s;
        }

        .h-i.white span {
          background: #fff;
        }

        .h-i span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #000;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .h-i span:first-child {
          top: 0;
        }

        .h-i span:nth-child(2),
        .h-i span:nth-child(3) {
          top: 8px;
        }

        .h-i span:nth-child(4) {
          top: 16px;
        }

        .h-i.open span:first-child {
          top: 18px;
          width: 0;
          left: 50%;
        }

        .h-i.open span:nth-child(2) {
          transform: rotate(45deg);
        }

        .h-i.open span:nth-child(3) {
          transform: rotate(-45deg);
        }

        .h-i.open span:nth-child(4) {
          top: 18px;
          width: 0;
          left: 50%;
        }

        .main-container {
          max-width: 1040px;
          margin: 0 auto;
          background-color: #fff;
        }

        .mega-menu-responsive {
          width: 100vw;
        }

        header {
          border-bottom: 5px solid rgba(242, 240, 240, 0.5647058823529412);
          background-clip: padding-box;
          height: 50px;
          display: flex;
          margin-bottom: 10px;
          justify-content: space-between;
        }

        header .logotipo-cont {
          margin-left: 10px;
          height: 100%;
          display: inline-flex;
          align-items: center;
        }

        header .logotipo-cont .logotipo {
          height: 23px;
          width: 167px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
        }

        body > .cordopolis header .logotipo-cont .logotipo {
          height: 23px;
        }

        header a.login {
          width: 30px;
          height: 100%;
          margin-left: auto;
          margin-right: 20px;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 40px;
          overflow: hidden;
        }

        header a.login i {
          font-size: 25px;
          height: 25px;
          width: 25px;
          color: #f9e700;
        }

        header a.login i:before {
          content: ${'F2BD'};
        }

        header a.login img {
          object-fit: contain;
        }

        header .become-partner {
          margin-left: auto;
          position: relative;
          display: inline-flex;
          background-color: #f8e71c;
          width: 80px;
          padding: 5px 0 2px;
          border-top-left-radius: 80px;
          border-top-right-radius: 80px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 20px;
          justify-content: center;
          height: 40px;
          align-self: flex-end;
        }

        header .become-partner a.makepartner {
          display: block;
          width: 50%;
          margin: auto;
          text-align: center;
          font: normal 600 11px/1 Encode Sans, Verdana;
          color: #000;
          text-decoration: none;
        }

        header .become-partner a.login {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: -15px;
          border-radius: 40px;
          overflow: hidden;
        }

        header .become-partner a.login i {
          font-size: 25px;
          height: 25px;
          width: 25px;
          color: #4a4a4a;
        }

        header .become-partner a.login i:before {
          content: ${'F2BD'};
        }

        header .become-partner a.login img {
          object-fit: contain;
        }

        header a.user {
          width: 30px;
          height: 30px;
          border-radius: 40px;
          overflow: hidden;
          margin-right: 20px;
          margin-left: auto;
          align-self: center;
        }

        header a.user img {
          object-fit: contain;
        }

        header .hamburguer-menu {
          display: flex;
          margin-right: 10px;
          align-items: center;
        }

        header .section-header {
          display: block;
        }

        header .section-header .first-row > div:first-child {
          padding-bottom: 0;
          padding-top: 0;
        }

        header .section-header .first-row > div:last-child {
          padding-bottom: 0;
          padding-top: 0;
          align-items: center;
          justify-content: flex-end;
          display: flex;
        }

        header .section-header .first-row > div:last-child > .login-user {
          margin: 5px 0;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont {
          margin-right: 18px;
          position: relative;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont
          .login {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont.log-nopartner
          .user.menu-active:after {
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
          border-right: 9px solid #f2f0f0;
          bottom: -22px;
          left: -2px;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont
          .cont-partner {
          display: flex;
          position: relative;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont
          .cont-partner
          .login-user {
          background: transparent;
          padding: 0;
          height: auto;
          width: auto;
          position: absolute;
          left: -10px;
          bottom: 15px;
        }

        header
          .section-header
          .first-row
          > div:last-child
          > div.become-partner-cont
          .cont-partner
          .login-user
          .user {
          position: static;
        }

        header .section-header .first-row > div:last-child > div.login-cont {
          margin: 12px 25px 16px 0;
        }

        header .section-header .first-row > div:last-child .become-partner {
          min-width: 75px;
          padding: 10px;
        }

        header .section-header .second-row {
          margin: 0 -10px;
        }

        header ~ .menu-header {
          display: none;
          margin: 0;
          background: #fff;
          z-index: 2;
          position: fixed;
          left: 0;
          width: 100%;
        }

        .section {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 50px;
          background-color: #004a7f;
          padding: 3px 15px;
        }

        .section .title {
          display: none;
          font: 400 17px Encode Sans, Verdana;
          letter-spacing: 0;
          color: #fff;
        }

        .section .subtitle {
          font: 500 21px Encode Sans, Verdana;
          letter-spacing: 0;
          color: #fff;
          line-height: 1.5;
          height: 100%;
          margin-bottom: 0;
        }

        .section .subtitle a {
          color: #fff;
        }

        .section .subtitle a:hover {
          text-decoration: none;
        }

        .section.s--p {
          flex-direction: row;
          justify-content: space-between;
          padding-top: 8px;
        }

        .section.s--p .partner {
          display: flex;
          align-self: center;
        }

        .section.s--p .partner__text {
          margin: 0;
          padding: 8px;
          font: 400 11px/1.53 Encode Sans, Verdana;
          color: #fff;
        }

        .section.s--p .partner__image {
          max-height: 30px;
        }

        .m-c {
          overflow-y: auto;
          background-color: #f2f0f0;
          display: block;
          flex-wrap: wrap;
          max-width: 1040px;
          margin: 0 auto;
        }

        .m-c .buttons {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          width: 100%;
        }

        .m-c .buttons .login {
          display: flex;
          height: 65px;
          background-color: #fff;
          margin-right: 14px;
          width: 50%;
          align-items: center;
          justify-content: center;
          border: 1px solid #b4b4b4;
          border-radius: 4px;
          outline: none;
          text-decoration: none;
          font-family: Encode Sans, Verdana;
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }

        .m-c .buttons .login i {
          font-size: 25px;
          height: 25px;
          width: 25px;
          margin-left: 5px;
        }

        .m-c .buttons .login i:before {
          content: ${'F2BD'};
        }

        .m-c .buttons .login[amp-access][amp-access-hide] {
          display: none;
        }

        .m-c .buttons .input {
          width: 50%;
          position: relative;
          min-height: 65px;
        }

        .m-c .buttons .input:first-child {
          width: 100%;
        }

        .m-c .buttons .input.login-menu {
          width: 100%;
          height: 65px;
        }

        .m-c .buttons .input.login-menu .placeholder {
          justify-content: space-between;
          padding: 0 25px;
        }

        .m-c .buttons .input.login-menu .search {
          padding: 0 20px;
          text-align: left;
        }

        .m-c .buttons .input .placeholder {
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Encode Sans, Verdana;
          font-size: 14px;
          font-weight: 500;
        }

        .m-c .buttons .input .placeholder span {
          margin-right: 10px;
        }

        .m-c .buttons .input .placeholder i {
          font-size: 25px;
          color: #8e8e93;
        }

        .m-c .buttons .input .search {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border: none;
          opacity: 0.65;
          text-align: center;
          color: #000;
          outline: none;
          font-family: Encode Sans, Verdana;
          font-size: 14px;
          font-weight: 500;
        }

        .m-c .buttons .input .search:focus {
          box-shadow: inset 0 0 1px 2px rgba(74, 144, 226, 0.58);
        }

        .m-c .m-s {
          width: 100%;
          display: block;
          justify-content: space-around;
          padding: 0 10px;
        }

        .m-c .m-s.cmp-focos-elDiario-partner {
          background-color: #f9e700;
        }

        body > .cordopolis .m-c .m-s.cmp-focos-elDiario-partner {
          background-color: #000;
        }

        body
          > .cordopolis
          .m-c
          .m-s.cmp-focos-elDiario-partner
          header
          .title-option,
        body > .cordopolis .m-c .m-s.cmp-focos-elDiario-partner ul li a {
          color: #fff;
        }

        body > .vertele .m-c .m-s.cmp-focos-elDiario-partner {
          background-color: #009700;
        }

        body
          > .vertele
          .m-c
          .m-s.cmp-focos-elDiario-partner
          header
          .title-option,
        body > .vertele .m-c .m-s.cmp-focos-elDiario-partner ul li a {
          color: #fff;
        }

        .m-c .m-s.cmp-todo-elDiario-menu {
          margin-bottom: 15px;
        }

        .m-c .m-s header {
          padding-right: 0;
          width: 100%;
          border: none;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          background-color: inherit;
        }

        .m-c .m-s header[aria-expanded='true'] .title-option .fa-chevron-up {
          transform: scaleY(1);
        }

        .m-c .m-s header .title-option {
          display: flex;
          font-family: Encode Sans, Verdana;
          font-size: 17px;
          font-weight: 600;
          color: #4a4a4a;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
          pointer-events: auto;
        }

        .m-c .m-s header .title-option .fa-chevron-up {
          font-weight: 400;
          transition: 0.5s;
          transform: scaleY(-1);
        }

        .m-c .m-s header .title-option .fa-chevron-up:before {
          content: ${'F077'};
        }

        .m-c .m-s ul {
          list-style: none;
          padding: 0;
        }

        .m-c .m-s ul li a {
          display: block;
          padding: 10px 0;
          font: normal 400 14px/1.78 Encode Sans, Verdana;
          letter-spacing: 0;
          color: #090909;
          font-size: 17px;
          line-height: 25px;
          text-decoration: none;
        }

        .m-c .m-s ul ul {
          margin: 0 0 0 30px;
        }

        .m-c .m-s ul ul li a {
          color: #9b9b9b;
        }

        .m-c .m-s li:not(:last-child) {
          border: none;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          background-color: inherit;
        }

        .m-c .logotipo--bottom {
          width: 100%;
          height: 25px;
          margin-bottom: 20px;
          padding-left: 10px;
        }

        .c-l-p {
          display: block;
          padding: 0 10px 10px;
          position: relative;
          margin-bottom: 10px;
        }

        .c-l-p:after {
          content: '';
          position: absolute;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          margin: 0;
          bottom: 0;
          left: 10px;
          right: 10px;
          display: block;
        }

        .c-l-p .partner,
        .c-l-p:hover {
          text-decoration: none;
        }

        .c-l-p .partner {
          padding: 10px;
          background: #f9e700;
          min-height: 54px;
          display: flex;
          flex-direction: column;
          color: #000;
        }

        body > .eldiarioar .c-l-p .partner {
          background-color: #bbe3ff;
        }

        .c-l-p .partner .cont-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .c-l-p .partner .cont-wrapper .cont-icon {
          display: flex;
          align-items: center;
          padding-left: 0;
        }

        .c-l-p .partner .cont-wrapper .cont-icon .icon {
          background: url(/images/eldiario-icon-black.png?add3626d0ed2115799f52793186714f6);
          width: 40px;
          height: 30px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
          margin-right: 5px;
        }

        .c-l-p .partner .cont-wrapper .cont-icon span {
          font: normal 700 17px/1.53 Encode Sans, Verdana;
          color: #000;
        }

        .c-l-p .partner .cont-wrapper .btn-access {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          border-radius: 14px;
          width: 90px;
          height: 28px;
          text-decoration: none;
          font: normal 400 12px/1.41 Encode Sans, Verdana;
          letter-spacing: 0;
          color: #4a4a4a;
          text-transform: uppercase;
        }

        .c-l-p .partner .cont-wrapper .btn-access i {
          font-size: 16px;
          margin-left: 5px;
        }

        .c-l-p .partner .cont-new-wrapper .cont-new {
          display: none;
          margin: 10px 0;
          font: normal 400 15px/1.33 Encode Sans, Verdana;
          color: #000;
          text-decoration: none;
        }

        .c-l-p .partner .cont-new-wrapper .cont-new span {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .c-l-p .partner .cont-new-wrapper .cont-new i {
          width: 40px;
          display: flex;
          padding: 5px;
          margin-right: 18px;
        }

        .c-l-p .partner .cont-new-wrapper .cont-new:first-of-type {
          display: flex;
        }

        body.partner {
          padding: 10px;
        }

        body.partner-preview .c-l-p {
          display: none;
        }

        .c-l {
          margin: 0 10px 10px;
          padding-bottom: 0;
          position: relative;
        }

        .c-l:after {
          content: '';
          position: absolute;
          width: 100%;
          bottom: -10px;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .c-l .default,
        .c-l .last-minute,
        .c-l .live {
          padding: 4px 15px;
          background: #f2f0f0;
          min-height: 54px;
        }

        .c-l .default span.title,
        .c-l .last-minute span.title,
        .c-l .live span.title {
          font: normal 700 15px/1.26 Encode Sans, Verdana;
          color: #004a7f;
          text-transform: uppercase;
        }

        .c-l .default span.title.main,
        .c-l .last-minute span.title.main,
        .c-l .live span.title.main {
          margin-left: 0;
          display: inline;
        }

        .c-l .default span.title:not(.main),
        .c-l .last-minute span.title:not(.main),
        .c-l .live span.title:not(.main) {
          border-left: 0;
          font: normal 400 15px/1.26 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #004a7f;
        }

        .c-l .default a:not(.title),
        .c-l .last-minute a:not(.title),
        .c-l .live a:not(.title) {
          font-family: Encode Sans, Verdana;
          font-size: 16px;
          line-height: 20px;
          color: #4a4a4a;
          font-weight: 400;
          display: inline;
          text-decoration: none;
        }

        .c-l .last-minute {
          display: table;
          position: relative;
          width: 100%;
        }

        .c-l .last-minute:before {
          content: '';
          border: 0 transparent;
          border-left: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          position: absolute;
          max-height: 65px;
          bottom: 0;
          left: 55px;
          top: 0;
        }

        .c-l .last-minute .icon {
          display: table-cell;
          vertical-align: middle;
          background: url(/images/last-minute-icon.png);
          width: 27px;
          min-width: 30px;
          height: 26px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
          margin-right: 25px;
        }

        .c-l .last-minute > div {
          margin-left: 25px;
        }

        .c-l .last-minute > div > span.title.main {
          font: normal 700 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #d0021b;
        }

        .c-l .last-minute > div + div {
          display: flex;
          position: relative;
          margin-top: 5px;
        }

        .c-l .last-minute > div + div:before {
          position: absolute;
          top: 5px;
          content: '';
          border: 0 transparent;
          border-left: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          height: 12px;
          display: inline-block;
        }

        .c-l .last-minute > div + div > span.title {
          padding-left: 5px;
          margin-right: 5px;
        }

        .c-l .last-minute > div + div > span.title:not(.main) {
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #d0021b;
        }

        .c-l .last-minute > div + div > a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          max-width: 135px;
          margin-bottom: 0;
        }

        .c-l .last-minute > span.title {
          padding-left: 10px;
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
          display: block;
          margin: 0 5px 0 45px;
        }

        .c-l .last-minute > span.title.main {
          margin: 0 10px;
          font: normal 700 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
          display: inline-block;
        }

        .c-l .last-minute > a:not(.title) {
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          color: #4a4a4a;
          display: block;
          margin-bottom: 10px;
          margin-left: 55px;
        }

        .c-l .live {
          display: table;
          position: relative;
          width: 100%;
        }

        .c-l .live:before {
          content: '';
          border: 0 transparent;
          border-left: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          position: absolute;
          height: 65px;
          left: 55px;
          top: 0;
        }

        .c-l .live .icon {
          display: table-cell;
          vertical-align: middle;
          background: url(/images/live-icon.png);
          width: 27px;
          height: 26px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
        }

        .c-l .live > div {
          margin-left: 25px;
        }

        .c-l .live > div.first-element {
          overflow: hidden;
        }

        .c-l .live > div > span.title.main {
          font: normal 700 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
        }

        .c-l .live > div + div {
          display: flex;
          position: relative;
          margin-top: 5px;
        }

        .c-l .live > div + div:before {
          position: absolute;
          top: 5px;
          content: '';
          border: 0 transparent;
          border-left: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          height: 12px;
          display: inline-block;
        }

        .c-l .live > div + div > span.title {
          padding-left: 5px;
          margin-right: 5px;
        }

        .c-l .live > div + div > span.title:not(.main) {
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
        }

        .c-l .live > div + div > a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          max-width: 165px;
          margin-bottom: 0;
        }

        .c-l .live > span.title {
          padding-left: 10px;
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
          display: block;
          margin: 0 5px 0 45px;
        }

        .c-l .live > span.title.main {
          margin: 0 10px;
          font: normal 700 15px/1.25 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #4a90e2;
          display: inline-block;
        }

        .c-l .live > a:not(.title) {
          font: normal 400 15px/1.25 Encode Sans, Verdana;
          color: #4a4a4a;
          display: block;
          margin-bottom: 10px;
          margin-left: 55px;
        }

        .home-page .c-l {
          padding-top: 8px;
        }

        body.partner .c-l {
          margin: 10px auto;
        }

        .content-kicker {
          margin-bottom: 20px;
          display: flex;
        }

        .content-kicker a,
        .content-kicker a:hover {
          color: inherit;
          text-decoration: none;
        }

        .content-kicker .image {
          max-width: 1000px;
          max-height: 200px;
          left: 0;
        }

        .content-kicker .image-100 {
          width: 100%;
          max-width: 1000px;
          max-height: 40px;
          object-fit: cover;
          height: 40px;
          object-position: left;
        }

        .content-kicker .text {
          display: flex;
          flex-direction: column;
          margin: 0;
          font: normal 400 19px/1.32 Encode Sans, Verdana;
          color: #090909;
        }

        .content-kicker .text .title {
          text-transform: uppercase;
          color: #004a7f;
        }

        body > .vertele .content-kicker .text .title {
          color: #009700;
        }

        .news-header .title {
          font: normal 400 32px/1.16 Sanomat-Bold, Georgia;
          letter-spacing: 0.4px;
          color: #090909;
        }

        .news-header .title .content-kicker .text .title {
          font-size: inherit;
          font-family: inherit;
          letter-spacing: normal;
        }

        .news-header .title .content-kicker .text > a {
          letter-spacing: normal;
        }

        body > .cordopolis .news-header .title,
        body > .vertele .news-header .title {
          font-family: Encode Sans, Verdana;
          font-weight: 700;
          letter-spacing: 0;
        }

        .news-header .description,
        .news-header .footer {
          margin-bottom: 20px;
        }

        .news-header .description {
          font: normal 400 16px/1.25 Encode Sans, Verdana;
          color: #090909;
        }

        .news-header .footer {
          list-style: none;
          padding-left: 0;
        }

        .news-header .footer li {
          margin-bottom: 20px;
          font: normal 400 16px/1.25 Encode Sans, Verdana;
          color: #090909;
        }

        .news-header .footer li .footer-link {
          font: normal 600 16px/1.25 Encode Sans, Verdana;
          color: #000;
          color: #004a7f;
        }

        .news-header .footer li .footer-link:hover {
          text-decoration: none;
          opacity: 0.6;
          cursor: pointer;
        }

        body > .vertele .news-header .footer li .footer-link {
          color: #009700;
        }

        .news-header .footer li .kicker {
          color: #090909;
        }

        .news-header .footer li .category {
          color: #4a90e2;
        }

        body > .vertele .news-header .footer li .category {
          color: #009700;
        }

        .minute-by-minute-page--politician .news-header .footer li .category {
          color: #d0021b;
        }

        .image-kicker {
          max-width: 80%;
          min-width: 200px;
        }

        .image-kicker .fixed-container {
          position: relative;
        }

        .news-image img {
          width: 100%;
        }

        .news-image .footer {
          position: relative;
          margin: 0;
          padding: 10px 16px;
          background-color: rgba(224, 220, 220, 0.44);
          font: 500 14px Encode Sans, Verdana;
          letter-spacing: 0.2px;
          color: #090909;
        }

        .news-image .footer .author {
          font-size: 12px;
          color: #9b9b9b;
        }

        .news-image .footer .zoom-icon {
          position: absolute;
          top: -34px;
          right: 10px;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
        }

        .n-i {
          margin-top: 25px;
          margin-bottom: 20px;
        }

        .n-i .info-wrapper {
          display: flex;
        }

        .n-i .info-wrapper p {
          margin: 0;
        }

        .n-i .info-wrapper .authors {
          padding-right: 6px;
          font: normal 700 14px/1.43 Encode Sans, Verdana;
          color: #004a7f;
          color: #4a4a4a;
          text-decoration: none;
        }

        .n-i .info-wrapper .authors a {
          color: #004a7f;
          text-decoration: none;
        }

        body > .vertele .n-i .info-wrapper .authors a {
          color: #009700;
        }

        .n-i .info-wrapper .date-comments-wrapper {
          display: flex;
          flex-wrap: wrap;
        }

        .n-i .info-wrapper .date-comments-wrapper .date,
        .n-i .info-wrapper .date-comments-wrapper .place {
          padding-right: 6px;
          font: normal 400 14px/1.43 Encode Sans, Verdana;
          color: #4a4a4a;
        }

        .n-i .info-wrapper .date-comments-wrapper .date {
          line-height: 20px;
        }

        .n-i .info-wrapper .date-comments-wrapper .date .day {
          margin-right: 5px;
        }

        .n-i .info-wrapper .date-comments-wrapper .date .hour {
          white-space: nowrap;
          position: relative;
        }

        .n-i .info-wrapper .date-comments-wrapper .date .hour:before {
          content: '-';
          position: absolute;
          left: -7px;
          top: -2px;
          bottom: 0;
        }

        .n-i .info-wrapper .date-comments-wrapper .comments {
          font: normal 700 14px/1.43 Encode Sans, Verdana;
          color: #9b9b9b;
        }

        .n-i .info-wrapper .date-comments-wrapper .comments i {
          padding-right: 6px;
          font-size: 13px;
        }

        .n-i .twitter-wrapper {
          margin-top: 3px;
        }

        .n-i .twitter-wrapper .twitter-account {
          display: inline-block;
          margin-right: 10px;
          font: normal 600 14px/1.43 Encode Sans, Verdana;
          color: #55adee;
          text-decoration: none;
        }

        .n-i .twitter-wrapper .twitter-account:last-child {
          margin: 0;
        }

        .article-text {
          margin-top: 16px;
        }

        p.article-text {
          font: normal 400 17px/1.53 Encode Sans, Verdana;
          color: #000;
        }

        p.article-text a {
          font: normal 600 15px/1.53 Encode Sans, Verdana;
          letter-spacing: 0;
          color: #004a7f;
          font-size: 17px;
          text-decoration: none;
        }

        body > .vertele p.article-text a {
          color: #009700;
        }

        p.article-text a:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
          position: relative;
        }

        p.article-text a:hover:before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px dotted #004a7f;
        }

        body > .vertele p.article-text a:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
          position: relative;
        }

        body > .vertele p.article-text a:hover:before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px dotted #009700;
        }

        .list {
          font: normal 400 17px/1.53 Encode Sans, Verdana;
          color: #000;
        }

        .list a {
          font: normal 600 15px/1.53 Encode Sans, Verdana;
          letter-spacing: 0;
          color: #004a7f;
          font-size: 17px;
          text-decoration: none;
        }

        body > .vertele .list a {
          color: #009700;
        }

        .list a:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
          position: relative;
        }

        .list a:hover:before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px dotted #004a7f;
        }

        body > .vertele .list a:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
          position: relative;
        }

        body > .vertele .list a:hover:before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px dotted #009700;
        }

        h2.article-text,
        h3.article-text {
          margin-top: 20px;
          font: normal 700 17px/1.53 Encode Sans, Verdana;
          color: #4a4a4a;
        }

        h2.article-text {
          font-size: 18px;
        }

        .article__see-more {
          display: block;
          margin: 30px auto;
          padding: 20px;
          border-radius: 2px;
          max-width: 300px;
          font: 500 16px/1.2 Encode Sans, Verdana;
          text-align: center;
          color: #fff;
          background-color: #4a90e2;
        }

        body > .vertele .article__see-more {
          background-color: #009700;
        }

        .article__see-more i {
          margin-left: 5px;
          color: #fff;
        }

        .article-tvchannel {
          margin: 15px 0;
        }

        .article-tvchannel img {
          object-fit: contain;
          object-position: center left;
          max-height: 28px;
          max-width: 130px;
        }

        .article-tvchannel + .article-text,
        .article-tvchannel + .list {
          margin-top: 15px;
        }

        .news-know-more {
          display: block;
          background-color: rgba(224, 220, 220, 0.2);
        }

        .news-know-more .know-more,
        .news-know-more .know-more-link {
          display: block;
          text-decoration: none;
        }

        .news-know-more .know-more {
          min-height: 133px;
          flex: 1 1 0;
          padding: 15px 15px 20px;
          background-color: rgba(224, 220, 220, 0.44);
          font: normal 400 20px/1.2 Sanomat-Regular, Georgia;
          letter-spacing: 0.3px;
          color: #000;
        }

        body > .vertele .news-know-more .know-more {
          letter-spacing: 0;
          line-height: 1.25;
        }

        .news-know-more .know-more:after,
        .news-know-more .know-more:before {
          content: none;
        }

        .news-know-more .know-more p {
          margin: 0;
          overflow: hidden;
        }

        .news-know-more .know-more-link {
          display: flex;
          align-items: flex-start;
          padding: 16.5px 20px;
          font: 500 13px Encode Sans, Verdana;
          text-transform: uppercase;
          color: #004a7f;
        }

        .news-know-more .know-more-link .right-arrow-icon {
          display: flex;
          align-items: center;
          height: 17px;
          padding-left: 5px;
          font-size: 15px;
        }

        .news-know-more .know-more-link .right-arrow-icon:before {
          height: 17px;
          display: flex;
          align-items: center;
        }

        .paywall {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: relative;
          z-index: 999;
          min-height: auto;
          top: 0;
          margin-top: -160px;
          padding-top: 80px;
          background: linear-gradient(
            180deg,
            hsla(0, 0%, 100%, 0),
            hsla(0, 0%, 100%, 0.51) 8%,
            hsla(0, 0%, 100%, 0.9) 25%,
            #fff 27%
          );
        }

        .paywall,
        .paywall__wrapper {
          width: 100%;
          max-width: 1040px;
        }

        .paywall__wrapper {
          display: flex;
          justify-content: left;
          flex-direction: column;
          bottom: 0;
          padding: 20px;
          z-index: 2;
        }

        .paywall .title {
          font-family: Sanomat-Bold, Georgia;
          font-size: 24px;
          line-height: 1.17;
          letter-spacing: 0.18px;
          margin-bottom: 15px;
        }

        .paywall .description {
          font-family: Encode Sans, Verdana;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.28;
          margin-bottom: 34px;
        }

        .paywall svg {
          width: 72px;
          height: 72px;
          margin-bottom: 10px;
        }

        .paywall .btn__wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .paywall .exit-btn,
        .paywall .login-btn,
        .paywall .paywall-btn,
        .paywall .register-btn {
          display: block;
          width: 280px;
          height: 60px;
          padding: 14px;
          outline: none;
          border: none;
          border-radius: 3px;
          text-align: center;
          margin: 0 auto 17px;
        }

        .paywall .exit-btn:hover,
        .paywall .login-btn:hover,
        .paywall .paywall-btn:hover,
        .paywall .register-btn:hover {
          text-decoration: none;
          opacity: 0.85;
          cursor: pointer;
        }

        .paywall .register-btn {
          background-color: #f8e71c;
          text-transform: uppercase;
          font-family: Encode Sans, Verdana;
          font-size: 11px;
          font-weight: 400;
          line-height: 17px;
          color: #000;
        }

        body > .eldiarioar .paywall .register-btn {
          background-color: #bbe3ff;
        }

        .paywall .register-btn strong {
          font-family: Encode Sans, Verdana;
          font-size: 16px;
          font-weight: 600;
          line-height: 17px;
          display: block;
        }

        .paywall .exit-btn,
        .paywall .login-btn {
          font-family: Encode Sans, Verdana;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          background-color: transparent;
        }

        .paywall .login-btn {
          margin: 0 auto;
        }

        .paywall--closed1,
        .paywall--closed2 {
          background: linear-gradient(
              180deg,
              hsla(0, 0%, 100%, 0),
              rgba(79, 77, 77, 0.51) 14%,
              rgba(27, 27, 27, 0.9) 25%,
              #000 38%
            ),
            url(/images/stripe-background.png);
        }

        .paywall--closed1 .title,
        .paywall--closed2 .title {
          color: #fff;
          font-size: 21px;
        }

        .paywall--closed1 .description,
        .paywall--closed2 .description {
          color: #f8e71c;
          font-size: 16px;
          margin-bottom: 25px;
        }

        .paywall--closed1 .more-info-btn,
        .paywall--closed2 .more-info-btn {
          color: #f8e71c;
          text-decoration: underline;
        }

        .paywall--closed1 svg path,
        .paywall--closed2 svg path {
          fill: #fff;
        }

        .paywall--closed1 .register-btn,
        .paywall--closed2 .register-btn {
          color: #000;
          width: 100%;
        }

        .paywall--closed1 .exit-btn,
        .paywall--closed2 .exit-btn {
          color: #f8e71c;
          border: 2px solid #f8e71c;
          width: 100%;
        }

        .paywall--closed1 .login-btn,
        .paywall--closed2 .login-btn {
          color: #f8e71c;
          text-align: center;
          width: 100%;
          padding-bottom: 0;
          height: auto;
          font-weight: 500;
        }

        .paywall--closed1 .login-btn u,
        .paywall--closed2 .login-btn u {
          font-weight: 600;
        }

        .paywall--advance .description,
        .paywall--advance .title {
          color: #000;
        }

        .paywall--advance svg path {
          fill: #004a7f;
        }

        .paywall--advance .register-btn {
          color: #fff;
          background-color: #004a7f;
        }

        .paywall--advance .exit-btn {
          color: #004a7f;
          border: 2px solid #004a7f;
        }

        .paywall--advance .login-btn {
          color: #004a7f;
        }

        .paywall--exclusive {
          background: linear-gradient(
              180deg,
              hsla(0, 0%, 100%, 0),
              hsla(0, 0%, 100%, 0.51) 14%,
              hsla(0, 0%, 100%, 0.9) 25%,
              #f9e700 38%
            ),
            url(/images/stripe-background.png);
        }

        .paywall--exclusive .description,
        .paywall--exclusive .title {
          color: #000;
        }

        .paywall--exclusive svg path {
          fill: #000;
        }

        .paywall--exclusive .register-btn {
          color: #f9e700;
          background-color: #000;
        }

        .paywall--exclusive .exit-btn {
          color: #000;
          border: 2px solid #000;
        }

        .paywall--exclusive .login-btn {
          color: #000;
        }

        .partner .c-header {
          max-width: 1040px;
          margin: 0 auto;
          flex: 0 0 100%;
        }

        .c-subheader {
          display: flex;
          max-width: 640px;
          width: 100%;
          flex-direction: column;
          margin-left: 10px;
        }

        .partner .c-subheader {
          display: block;
          max-width: 1040px;
          margin: 0 auto;
          flex: 0 0 100%;
        }

        .author-pill-wrapper {
          padding-bottom: 12px;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          margin-bottom: 15px;
        }

        .partner .author-pill-wrapper {
          max-width: 830px;
        }

        .rs-pill {
          display: flex;
          width: 100%;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
          padding-bottom: 15px;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .partner .rs-pill {
          max-width: 830px;
        }

        .news-image,
        .news-know-more {
          margin-bottom: 25px;
        }

        .news-know-more {
          margin-top: 25px;
        }

        .recirculation {
          margin-top: 65px;
        }

        .secondary-content .recirculation {
          margin-top: 40px;
        }

        .news-partners-recruitment,
        .news-square {
          margin: 30px 0;
        }

        .tags {
          margin-bottom: 32px;
        }

        .news-date {
          margin-bottom: 12px;
          padding-top: 15px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .buttons-rs-panel button:first-child {
          margin-left: 0;
        }

        .q {
          margin-top: 25px;
          margin-bottom: 25px;
        }

        .cmp-next-new {
          margin-top: 15px;
          margin-bottom: 50px;
        }

        .cm-slider {
          margin-top: 20px;
          margin-bottom: 40px;
          padding-top: 5px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .cm-slider .cm-slider-wrapper {
          margin-left: -10px;
          margin-right: -10px;
        }

        .cm-comment {
          margin-top: 45px;
          margin-bottom: 30px;
          padding: 0 15px;
        }

        .news-onfrontpage {
          padding-top: 15px;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .secondary-content .ad {
          padding: 0;
          border: none;
        }

        @media only screen and (max-width: 767px) {
          .header-container {
            padding: 0;
          }

          .cm-wrapper {
            padding: 0 10px;
          }
        }

        @media only screen and (min-width: 768px) {
          .rs-pill {
            justify-content: space-between;
            flex-wrap: nowrap;
          }

          .rs-pill .buttons-rs-panel {
            display: flex;
            margin-bottom: 0;
          }

          .cm-slider {
            margin-top: 40px;
          }

          .news-partners-recruitment {
            margin: 40px 0;
          }

          .cm-comment,
          .cm-commentary-container,
          .cm-highlight {
            padding: 0 50px;
          }

          .news-onfrontpage {
            margin-right: 50px;
            margin-left: 50px;
          }

          .cm-commentary.muted {
            padding-right: 15px;
          }
        }

        @media only screen and (max-width: 1039px) {
          .recirculation {
            padding-right: 0;
            padding-left: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: 0;
          }

          .cm-slider {
            margin-top: 0;
          }
        }

        @media only screen and (min-width: 1040px) {
          .container-fluid {
            padding-right: 20px;
            padding-left: 20px;
          }

          .content-container {
            padding-right: 30px;
          }

          .secondary-content {
            padding-left: 30px;
          }

          .cmp-title {
            display: none;
          }

          .cm-comment,
          .cm-commentary-container,
          .cm-highlight {
            padding: 0;
          }

          .news-onfrontpage {
            margin: 0;
          }

          .cm-comment,
          .cm-highlight {
            padding-left: 30px;
          }

          .cm-slider {
            margin-top: 60px;
          }

          .cm-slider .cm-slider-wrapper {
            margin-left: -20px;
            margin-right: 0;
          }

          .cm-commentary-container .commentary-wrapper .cm-commentary {
            padding-left: 50px;
            margin-left: -20px;
          }

          .cm-commentary-container .commentary-wrapper .cm-commentary.moderated,
          .cm-commentary-container .commentary-wrapper .cm-commentary.muted {
            padding-left: 20px;
            margin-left: 0;
          }

          .cm-commentary-container
            .commentary-wrapper
            .cm-commentary.regular
            .commentary-wrapper {
            padding-left: 16px;
          }

          .cm-commentary-container .commentary-wrapper .cm-commentary:after {
            left: 101px;
          }
        }

        .fullwidth .author-pill-wrapper,
        .fullwidth .rs-pill {
          max-width: none;
        }

        .partner .article-page .ad {
          display: none;
        }

        .partner .article-page .c-content {
          margin-bottom: 40px;
        }

        .partner .article-page .recirculation {
          display: none;
        }

        .partner .article-page .cmp-next-new {
          margin-top: 45px;
          margin-bottom: 25px;
        }

        @media only screen and (min-width: 768px) {
          .partner .article-page .cmp-next-new {
            margin-top: 30px;
            margin-bottom: 40px;
          }

          .partner
            .article-page
            .cm-commentary-container
            .commentary-wrapper
            .cm-commentary.regular {
            padding-left: 0;
          }

          .partner
            .article-page
            .cm-commentary-container
            .commentary-wrapper
            .cm-commentary.regular
            .commentary-wrapper {
            padding-left: 36px;
          }
        }

        @media only screen and (min-width: 1040px) {
          .partner .article-page > .container-fluid {
            padding-right: 10px;
            padding-left: 10px;
          }

          .partner .article-page .content-container {
            padding-right: 10px;
          }

          .partner .article-page .c-content {
            max-width: 830px;
          }

          .partner .article-page .c-content .partner-wrapper {
            display: flex;
            padding: 15px 0;
            border: 0 transparent;
            border-top: 3px solid;
            border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
          }

          .partner .article-page .c-content .partner-wrapper.no-border {
            border: none;
          }

          .partner .article-page .c-content .partner-wrapper .first-col {
            width: 170px;
          }

          .partner
            .article-page
            .c-content
            .partner-wrapper
            .first-col
            .cmp-title {
            display: block;
            line-height: 1.3;
          }

          .partner .article-page .c-content .partner-wrapper .second-col {
            order: 2;
            width: calc(100% - 164px);
            padding-left: 20px;
          }

          .partner
            .article-page
            .c-content
            .partner-wrapper
            .second-col
            .g-h.news-video {
            margin: 0;
          }

          .partner
            .article-page
            .c-content
            .partner-wrapper
            .second-col
            .news-image {
            margin: 0 0 25px;
          }

          .partner .article-page .cm-slider,
          .partner .article-page .news-date,
          .partner .article-page .news-onfrontpage,
          .partner .article-page .rs-pill {
            border: none;
          }

          .partner .article-page .news-date {
            padding-top: 0;
          }

          .partner .article-page .second-col .article-text:first-child {
            margin-top: 0;
          }

          .partner .article-page .news-onfrontpage {
            margin-top: -18px;
          }

          .partner .article-page .news-image {
            margin: 16px 0;
          }

          .partner .article-page .cm-slider {
            margin-top: 45px;
          }

          .partner .article-page .cm-slider .cm-slider-wrapper {
            margin: 0;
            box-shadow: 825px 0 0 0 #f2f0f0, -825px 0 0 0 #f2f0f0;
          }

          .partner .article-page .cmp-next-new {
            margin-top: 55px;
          }

          .partner .article-page .cm-comment,
          .partner .article-page .cm-highlight {
            padding-left: 0;
          }

          .partner
            .article-page
            .cm-commentary-container
            .commentary-wrapper
            .cm-commentary {
            padding-left: 20px;
            margin-left: 0;
          }

          .partner
            .article-page
            .cm-commentary-container
            .commentary-wrapper
            .cm-commentary:after {
            left: 0;
          }
        }

        .poll-page .button-rs.bg-save {
          display: none;
        }

        .news-outlook {
          margin-bottom: 20px;
          padding: 20px 25px 15px;
          border: 3px solid;
          border-image: url(/images/img_dotted_black.svg) 3 3 3 3 repeat;
        }

        .news-outlook .outlook-subhead {
          margin-bottom: 10px;
          font: 600 16px/1.2 Encode Sans, Verdana;
          color: #4a90e2;
        }

        body > .vertele .news-outlook .outlook-subhead {
          color: #009700;
        }

        .news-outlook .news-image {
          margin-bottom: 10px;
          margin-top: 20px;
        }

        .news-outlook .image-footer {
          margin-bottom: 25px;
        }

        .news-outlook .outlook-header {
          margin-bottom: 30px;
          font: normal 700 18px/1.41 Encode Sans, Verdana;
          color: #000;
        }

        .news-outlook .list,
        .news-outlook p.article-text {
          font: 500 16px/26px Encode Sans, Verdana;
        }

        .news-outlook .list a,
        .news-outlook p.article-text a {
          font-size: 16px;
        }

        .news-outlook .list:last-child,
        .news-outlook p.article-text:last-child {
          margin-bottom: 0;
        }

        .tags .tags-title {
          margin: 0;
          font: normal 700 14px/2.14 Encode Sans, Verdana;
          text-transform: uppercase;
          color: #7f7f7f;
        }

        .tags .tags-wrapper {
          padding-left: 0;
          list-style-type: none;
          font: normal 500 14px/1.71 Encode Sans, Verdana;
          color: #7f7f7f;
        }

        .tags .tags-wrapper li {
          display: inline-block;
        }

        .tags .tags-wrapper .slash:first-child {
          display: none;
        }

        .tags .tags-wrapper .tag-link {
          color: inherit;
          text-decoration: none;
        }

        .news-date .date,
        .news-date .text {
          display: inline;
        }

        .news-date .text {
          font: normal 600 14px/1.43 Encode Sans, Verdana;
          color: #000;
        }

        .news-date .date {
          font: normal 400 14px/1.43 Encode Sans, Verdana;
          color: #000;
        }

        .buttons-rs-panel {
          display: flex;
        }

        .buttons-rs-panel button:hover {
          text-decoration: none;
        }

        .button-rs {
          margin: 0 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 48px;
          width: 48px;
          border-radius: 50%;
          border: transparent;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          text-decoration: none;
        }

        .button-rs:focus {
          outline: none;
        }

        .button-rs.bg-twitter {
          background-color: #55adee;
        }

        .button-rs.bg-facebook {
          background-color: #3b5998;
        }

        .button-rs.bg-meneame {
          background-color: #e35614;
        }

        .button-rs.bg-telegram {
          background-color: #2fa3e7;
        }

        .button-rs.bg-whatsapp {
          background-color: #17af17;
        }

        .button-rs.bg-heart {
          background-color: #d0021b;
        }

        .button-rs.bg-heart > i {
          margin-top: 2px;
        }

        .button-rs i {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
        }

        .button-rs ~ .btn-wrapper {
          display: flex;
          align-items: center;
          margin: 0 5px;
        }

        .button-rs ~ .btn-wrapper span {
          display: none;
          margin-left: 5px;
          cursor: default;
          font: normal 600 14px/1.29 Encode Sans, Verdana;
          color: #4a4a4a;
          color: #d20a23;
        }

        .news-partners-recruitment {
          padding: 35px 32px;
          background-image: url(/images/stripe-background2.png);
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.06);
        }

        .news-partners-recruitment,
        .news-partners-recruitment .recruitment-header {
          display: flex;
          flex-direction: column;
        }

        .news-partners-recruitment .recruitment-header .header-img {
          width: 45px;
          height: 45px;
        }

        .news-partners-recruitment .recruitment-header .header-title {
          padding-top: 6.2px;
          margin-bottom: 0;
          font: normal 400 22px/1.14 Sanomat-Bold, Georgia;
          letter-spacing: 0.5;
          color: #004a7f;
        }

        .news-partners-recruitment .recruitment-separator {
          align-self: flex-start;
          width: 100px;
          margin: 20px 20px 20px 0;
          border-image: url(/images/img_dotted_black.svg) 3 3 3 3 repeat;
          border: 0 transparent;
          border-top: none;
          border-bottom: 3px solid;
        }

        .news-partners-recruitment .recruitment-content {
          display: flex;
          flex-direction: column;
        }

        .news-partners-recruitment .recruitment-content .content-text {
          margin-bottom: 12px;
          font: normal 500 17px/1.53 Encode Sans, Verdana;
          color: #000;
        }

        .news-partners-recruitment
          .recruitment-content
          .content-text
          .underscored {
          background-color: #f8e71c;
          letter-spacing: 0.4px;
        }

        body
          > .eldiarioar
          .news-partners-recruitment
          .recruitment-content
          .content-text
          .underscored {
          background-color: #bbe3ff;
        }

        .news-partners-recruitment .recruitment-content .content-link {
          width: 100%;
          padding: 14px;
          margin-top: 16px;
          border: 3px solid;
          border-image: url(/images/img_dotted_black.svg) 3 3 3 3 repeat;
          background-color: #fff;
          font: 500 14px Encode Sans, Verdana;
          color: #000;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
        }

        body > .cordopolis .news-partners-recruitment .header-title {
          font-family: Encode Sans, Verdana;
          font-weight: 700;
          color: #000;
          letter-spacing: 0;
        }

        .partner .news-partners-recruitment {
          display: none;
        }

        .news-sponsored-content {
          padding-bottom: 20px;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        .news-sponsored-content .title {
          font: 700 16px Encode Sans, Verdana;
          color: #004a7f;
          margin-bottom: 16px;
        }

        .news-sponsored-content .sponsored-content-wrapper {
          min-height: 200px;
          width: 100%;
        }

        .news-sponsored-content
          .sponsored-content-wrapper
          .trc_rbox_header_span {
          font: 700 16px Encode Sans, Verdana;
          color: #004a7f;
          margin-bottom: 16px;
          display: block;
        }

        .partner .news-sponsored-content {
          display: none;
        }

        .cm-slider .slider-title .title {
          margin: 10px 0 20px;
          font-family: Encode Sans, sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          color: #004a7f;
        }

        .cm-slider .cm-slider-wrapper {
          padding: 25px 40px;
          background-color: #f2f0f0;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper {
          position: relative;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper amp-list div {
          display: flex;
          overflow-x: auto;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper .item {
          width: 300px;
          flex-shrink: 0;
          height: 100%;
          flex-direction: column;
          padding-right: 10px;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper .item .title {
          margin-bottom: 8px;
          font-family: Encode Sans, sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 1.36;
          color: #004a7f;
          text-decoration: none;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper .item .title .num {
          color: #000;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper .item p {
          margin: 0;
        }

        .cm-slider .cm-slider-wrapper .slider-wrapper .item p.text {
          white-space: normal;
          font-family: Encode Sans, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.36;
          color: #000;
        }

        .cm-slider .cm-slider-wrapper .buttons-wrapper {
          display: flex;
          padding: 25px 44px 0;
        }

        .cm-slider .cm-slider-wrapper .buttons-wrapper button {
          flex: 1 1 0%;
          padding: 16px;
          font-family: Encode Sans, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #000;
          outline: none;
          border: none;
          text-decoration: none;
        }

        .cm-slider .cm-slider-wrapper .buttons-wrapper button.partner-btn {
          background-color: #f8e71c;
          text-transform: uppercase;
        }

        .cm-slider .cm-slider-wrapper .buttons-wrapper button.sign-up {
          background-color: #fff;
        }

        .action-buttons-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .action-buttons-wrapper .show-commentaries {
          margin-bottom: 30px;
        }

        .action-buttons-wrapper .show-commentaries .blue-btn {
          margin-bottom: 10px;
        }

        .action-buttons-wrapper .show-commentaries {
          text-align: center;
        }

        .action-buttons-wrapper .show-commentaries .show-commentaries-counter {
          margin: 10px 0 0;
          text-decoration: underline;
          font-family: Encode Sans, sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.33;
          color: #000;
        }

        .new-fronpage:hover {
          text-decoration: none;
          opacity: 0.85;
        }

        .new-fronpage:hover .new-info {
          background-color: #fff;
        }

        .new-fronpage .new-img {
          overflow: hidden;
          height: 0;
          padding-top: 56.25%;
          background-position: 50%;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .new-fronpage .new-info {
          padding: 13px 15px 22px;
          background-color: #f9f8f8;
        }

        .new-fronpage .new-info .new-category {
          display: block;
          margin-bottom: 8px;
          font: 500 15px/1.27 Encode Sans, Verdana;
          color: #4a4a4a;
        }

        body > .vertele .new-fronpage .new-info .new-category {
          color: #009700;
        }

        .new-fronpage .new-info .new-title {
          display: block;
          height: 76px;
          margin-bottom: 0;
          font: 500 15px/1.33 Encode Sans, Verdana;
          color: #4a4a4a;
        }

        .news-onfrontpage .title {
          padding: 8px 10px 25px;
          margin-bottom: 0;
          font: 700 16px Encode Sans, Verdana;
          color: #004a7f;
          background-color: #f2f0f0;
        }

        body > .vertele .news-onfrontpage .title {
          color: #009700;
        }

        .news-onfrontpage .row {
          padding: 5px 10px;
          background-color: #f2f0f0;
          margin: 0;
        }

        .news-onfrontpage .row ul[class^='col-'] {
          padding: 5px 0;
          margin-bottom: 0;
          list-style-type: none;
        }

        .news-onfrontpage
          .row
          ul[class^='col-']
          .new-fronpage:not(:first-child) {
          margin-top: 10px;
        }

        .morecontentfromtheauthor .news-onfrontpage {
          padding-bottom: 15px;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          ul
          .new-fronpage:nth-child(5) {
          display: none;
        }

        .morecontentfromtheauthor .news-onfrontpage ul.new-fronpage {
          margin-top: 0;
        }

        .morecontentfromtheauthor .news-onfrontpage .new-info {
          min-height: 133px;
          height: auto;
        }

        .morecontentfromtheauthor .news-onfrontpage .new-date {
          display: block;
          margin: 12px 0;
          font: 500 12px/20px Encode Sans, Verdana;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #9b9b9b;
        }

        .morecontentfromtheauthor .news-onfrontpage .hd--from-the-author {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 0;
          padding: 0 10px 0 0;
          background-color: #f2f0f0;
        }

        .morecontentfromtheauthor .news-onfrontpage .hd--from-the-author h2 {
          grid-column: 1;
          grid-row: 1;
          margin: 2px 0;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          .hd--from-the-author
          h2
          .title {
          display: block;
          padding-bottom: 0;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          .hd--from-the-author
          h2
          .twitter-wrapper {
          display: block;
          padding: 5px 10px 0;
          font: normal 600 14px/1.43 Encode Sans, Verdana;
          color: #55adee;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          .hd--from-the-author
          .author {
          align-self: flex-start;
          padding: 10px 0 0 10px;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          .hd--from-the-author
          .author
          img {
          display: block;
          height: 60px;
          width: 60px;
          object-fit: cover;
          border-radius: 50%;
        }

        .morecontentfromtheauthor .news-onfrontpage .hd--follow-the-author {
          display: flex;
          flex-direction: column;
          padding: 10px 10px 0;
          font: 400 12px/1.33 Encode Sans, Verdana;
          letter-spacing: 0.1px;
          color: #4a4a4a;
          background-color: #f2f0f0;
        }

        .morecontentfromtheauthor
          .news-onfrontpage
          .hd--follow-the-author:before {
          content: ' ';
          display: block;
          border-top: 2px solid #ebebeb;
          margin: 0 0 10px;
          font-size: 0;
        }

        .morecontentfromtheauthor .news-onfrontpage .hd--follow-the-author a {
          display: block;
          align-self: flex-start;
          border: 2px solid #ebebeb;
          border-radius: 25px;
          margin: 0 0 6px;
          padding: 9px 17px 7px;
          font: 500 12px/1.67 Encode Sans, Verdana;
          letter-spacing: 0.01px;
          color: #004a7f;
          background-color: #f9f8f8;
        }

        .morecontentfromtheauthor .news-onfrontpage .hd--follow-the-author a i {
          margin-right: 7px;
          font-size: 16px;
          line-height: 16px;
        }

        .morecontentfromtheauthor + .partner-wrapper {
          margin-top: -15px;
          padding-top: 15px;
          background-color: #f2f0f0;
        }

        .morecontentfromtheauthor + .partner-wrapper .news-onfrontpage .title {
          padding: 0 10px 5px;
          color: #4a90e2;
        }

        .cmp-footer {
          margin-top: 20px;
          width: 100%;
          padding: 30px 40px 40px;
          background-color: #f8e71c;
        }

        body > .cordopolis .cmp-footer {
          background-color: #000;
        }

        body > .vertele .cmp-footer {
          background-color: #009700;
        }

        .cmp-footer .footer-image-wrapper,
        .cmp-footer .footer-image-wrapper .footer-image {
          max-width: 220px;
          width: 100%;
        }

        body > .vertele .cmp-footer .footer-image-wrapper,
        body > .vertele .cmp-footer .footer-image-wrapper .footer-image {
          max-width: 140px;
        }

        .cmp-footer .footer-image-wrapper {
          filter: brightness(0);
        }

        body > .cordopolis .cmp-footer .footer-image-wrapper {
          filter: contrast(0) brightness(100);
        }

        body > .cordopolis .cmp-footer .footer-image-wrapper:after {
          content: '';
          width: 100px;
          position: absolute;
          bottom: auto;
          top: 60px;
          left: 0;
          border: 0 transparent;
          border-top: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        body
          > .cordopolis
          .cmp-footer
          .footer-image-wrapper
          .footer-image:first-of-type {
          margin-bottom: 50px;
        }

        .cmp-footer .footer-image-wrapper p {
          margin-top: 10px;
          font: normal 400 14px/1.43 Encode Sans, Verdana;
          color: #000;
          font-size: 13px;
          text-align: right;
        }

        body > .cordopolis .cmp-footer .footer-image-wrapper p {
          color: #fff;
        }

        .cmp-footer .icons-container {
          position: relative;
          padding: 20px 0 10px;
        }

        body > .cordopolis .cmp-footer .icons-container {
          padding-top: 0;
        }

        .cmp-footer .icons-container:after {
          content: '';
          width: 100px;
          position: absolute;
          left: 0;
          border: 0 transparent;
          border-bottom: 3px solid;
          border-image: url(/images/img_dotted.svg) 3 3 3 3 repeat;
        }

        body > .cordopolis .cmp-footer .icons-container:after,
        body > .vertele .cmp-footer .icons-container:after {
          filter: contrast(0) brightness(100);
        }

        .cmp-footer .icons-container .icons-wrapper {
          padding: 20px 0 10px;
        }

        .cmp-footer .icons-container .icons-wrapper .icons-title {
          margin: 0;
          font: 400 12px/1.73 Encode Sans, Verdana;
          color: #000;
        }

        body
          > .cordopolis
          .cmp-footer
          .icons-container
          .icons-wrapper
          .icons-title,
        body
          > .vertele
          .cmp-footer
          .icons-container
          .icons-wrapper
          .icons-title {
          color: #fff;
        }

        .cmp-footer .icons-container .icons-wrapper .icons a {
          margin-right: 10px;
          color: #000;
          font-size: 31px;
        }

        body > .cordopolis .cmp-footer .icons-container .icons-wrapper .icons a,
        body > .vertele .cmp-footer .icons-container .icons-wrapper .icons a {
          color: #fff;
        }

        .cmp-footer .icons-container .icons-wrapper .icons a:last-child {
          margin-right: 0;
        }

        .cmp-footer .footer-info .footer-title {
          margin: 15px 0 20px;
          font: 700 18px/1.28 Sanomat-Bold, Georgia;
          color: #000;
          letter-spacing: 0.3px;
        }

        body > .cordopolis .cmp-footer .footer-info .footer-title,
        body > .vertele .cmp-footer .footer-info .footer-title {
          color: #fff;
        }

        .cmp-footer .footer-info .footer-btn {
          min-width: 0;
          text-transform: uppercase;
        }

        body > .cordopolis .cmp-footer .footer-info .footer-btn,
        body > .vertele .cmp-footer .footer-info .footer-btn {
          border-color: #fff;
          color: #fff;
        }

        .cmp-footer .footer-info .footer-btn:hover {
          color: #000;
        }

        .partner .cmp-footer .footer-info .footer-title {
          margin-bottom: 0;
        }

        .partner .cmp-footer .footer-info .footer-btn {
          display: none;
        }

        .footer-links {
          width: 100%;
          padding: 22px 0 30px;
          text-align: center;
        }

        .footer-links .links-list {
          padding: 0;
          margin: 0 auto;
          list-style: none;
        }

        .footer-links .links-list .link-item .link {
          font: 500 14px/2.14 Encode Sans, Verdana;
          color: #4a4a4a;
          text-decoration: none;
        }

        .fa-android:before {
          content: ${'F17B'};
        }

        .fa-apple:before {
          content: ${'F179'};
        }

        .fa-instagram:before {
          content: ${'F16D'};
        }

        .fa-youTube:before {
          content: ${'F167'};
        }

        .fa-rss:before {
          content: ${'F09E'};
        }

        body {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
