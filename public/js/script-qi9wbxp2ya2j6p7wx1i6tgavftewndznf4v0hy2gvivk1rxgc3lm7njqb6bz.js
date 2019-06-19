@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,700,700i&subset=cyrillic,cyrillic-ext,latin-ext);
#about,
#blog,
#cover,
body {
    height: 100%;
    width: 100%
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
html {
    font-family: "Open Sans", sans-serif
}

table td,
table th {
    padding: 5px 10px
}

.form-control:focus,
.form-control:hover,
hr {
    outline: 0
}

dl dt,
table th {
    font-weight: 700
}

#about,
#blog,
#cover,
#header,
body,
pre>code,
table {
    width: 100%
}

#about,
#sidebar {
    background: rgba(17, 26, 35, 0)
}

#header,
.post-header-cover {
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local("Open Sans"), local("OpenSans"), url(https://fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3SZ2oysoEQEeKwjgmXLRnTc.ttf) format("truetype")
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local("Open Sans Bold"), local("OpenSans-Bold"), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzJS3E-kSBmtLoNJPDtbj2Pk.ttf) format("truetype")
}

html {
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent
}

body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-size: 1.6rem;
    line-height: 1.9em;
    letter-spacing: .01em;
    -webkit-font-smoothing: subpixel-antialiased;
    font-smoothing: subpixel-antialiased
}

body.pushed {
    overflow-x: hidden
}

h1,
h2,
h3,
h4,
h5,
h6 {
    letter-spacing: -.04em;
    font-weight: 700;
    line-height: 1.45em;
    color: #4a4a4a
}

code,
pre>code {
    font-family: Menlo, Consolas, monospace
}

h1,
h2,
h3 {
    margin: 1em 0
}

h4,
h5,
h6 {
    margin: 1em 0 .5em
}

h1 {
    font-size: 2.8rem
}

h2 {
    font-size: 2.4rem
}

h3 {
    font-size: 2rem
}

h4 {
    font-size: 1.8rem
}

h5 {
    font-size: 1.7rem
}

h6 {
    font-size: 1.6rem
}

p {
    margin: 0 0 1.5em
}

dl,
ol,
ul {
    margin: 0 0 .5em
}

a,
a:active,
a:hover,
a:visited {
    cursor: pointer;
    color: #349ef3;
    text-decoration: none
}

.archive .archive-posts .archive-post .archive-post-title:hover,
.archive .archive-title:hover,
a:hover {
    text-decoration: underline
}

a:hover {
    color: #349ef3
}

table {
    background: 0 0;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left
}

table th {
    border-bottom: 2px solid #909ba2
}

table tr:nth-child(2n) {
    background: #f7f8f8
}

hr {
    margin: 1.5em 0 0;
    border: none;
    border-top: 1px solid #eef2f8
}

dl dd {
    margin-left: 0
}

pre>code {
    display: block;
    box-sizing: border-box;
    padding: 15px;
    border: none;
    margin: 0;
    cursor: text;
    overflow-x: auto;
    line-height: 2.7rem;
    font-size: 1.4rem
}

#about,
#bottom-bar {
    display: none;
    position: fixed
}

code {
    font-size: 1.5rem;
    display: inline-block;
    font-weight: 400;
    padding: 0 10px
}

abbr,
acronym {
    border-bottom: 1px dotted #5d686f
}

blockquote {
    border-left: 3px solid #5d686f;
    padding: 0 15px;
    font-style: italic;
    margin: 1.5em 0 0
}

blockquote cite:before {
    content: ' — ';
    padding: 0 .3em
}

blockquote>p:first-child {
    margin: 0
}

@media only screen and (max-width:767px) {
    code,
    h6 {
        font-size: 1.4rem
    }
    h1 {
        font-size: 2.6rem
    }
    h2 {
        font-size: 2.2rem
    }
    h3 {
        font-size: 1.8rem
    }
    h4 {
        font-size: 1.6rem
    }
    h5 {
        font-size: 1.5rem
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    h1 {
        font-size: 2.65rem
    }
    h2 {
        font-size: 2.25rem
    }
    h3 {
        font-size: 1.85rem
    }
    h4 {
        font-size: 1.65rem
    }
    h5 {
        font-size: 1.55rem
    }
    h6 {
        font-size: 1.45rem
    }
}

.task-list {
    list-style-type: none
}

.task-list .task-list-item {
    margin: 0 .2em .25em -1.6em;
    vertical-align: middle
}

pre.code-highlight>code {
    padding: 0;
    margin: 0;
    line-height: inherit
}

#about {
    top: 0;
    left: 0;
    text-align: center;
    line-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 30
}

#sidebar,
#sidebar .sidebar-container {
    overflow: auto
}

#about #about-card {
    position: relative;
    top: -1000px;
    display: block;
    background: #fff;
    max-width: 400px;
    margin: 15px auto;
    border-radius: 3px;
    padding: 30px 0;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    box-shadow: 0 0 5px rgba(0, 0, 0, .5)
}

#about #about-card #about-btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #9eabb3;
    cursor: pointer
}

#about #about-card #about-btn-close:hover {
    color: #738691
}

#about #about-card #about-card-picture {
    margin-bottom: 15px
}

#about #about-card #about-card-name {
    margin-top: 0;
    margin-bottom: 20px
}

#about #about-card #about-card-bio {
    padding: 0 30px;
    margin: 0 0 30px
}

#about #about-card #about-card-job,
#about #about-card #about-card-location {
    display: inline-block;
    vertical-align: top
}

#about #about-card #about-card-bio,
#about #about-card #about-card-job,
#about #about-card #about-card-location {
    font-size: 1.6rem;
    line-height: 1.9em;
    font-weight: 400;
    color: #5d686f
}

@media only screen and (max-width:767px) {
    #about #about-card {
        width: 90%
    }
    #about #about-card #about-card-job,
    #about #about-card #about-card-location {
        display: block;
        width: calc(100% - 60px);
        padding: 0 30px
    }
    #about #about-card #about-card-picture {
        width: 90px;
        height: 90px;
        border-radius: 45px
    }
    #about #about-card #about-card-job {
        margin-bottom: 15px
    }
    #bottom-bar {
        width: calc(100% - 15px * 2);
        left: 0
    }
    #bottom-bar[data-behavior="4"].pushed,
    #bottom-bar[data-behavior="5"].pushed,
    #bottom-bar[data-behavior="1"].pushed,
    #bottom-bar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="3"].pushed,
    #bottom-bar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:768px) {
    #about #about-card {
        width: 80%
    }
    #about #about-card #about-card-picture {
        width: 110px;
        height: 110px;
        border-radius: 55px
    }
    #about #about-card #about-card-job,
    #about #about-card #about-card-location {
        display: inline-block;
        width: calc((100% / 2) - 48px)
    }
    #about #about-card #about-card-job {
        padding: 0 15px 0 30px
    }
    #about #about-card #about-card-location {
        padding: 0 30px 0 15px
    }
}

#blog {
    position: absolute;
    top: 0;
    left: 0
}

#bottom-bar {
    bottom: 0;
    height: 60px;
    background: #fff;
    margin: 0;
    border-top: 1px solid #eef2f8;
    padding: 0 15px;
    z-index: 40;
    transition: transform .25s ease-in-out;
    -webkit-transition: -webkit-transform .25s ease-in-out
}

#header,
#main {
    background: #fff;
    transition: transform .25s ease-in-out
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    #bottom-bar[data-behavior="4"],
    #bottom-bar[data-behavior="5"],
    #bottom-bar[data-behavior="6"] {
        width: calc(100% - 15px * 2);
        left: 0
    }
    #bottom-bar[data-behavior="3"],
    #bottom-bar[data-behavior="1"],
    #bottom-bar[data-behavior="2"] {
        width: calc(100% - 75px - 15px * 2);
        left: 75px
    }
    #bottom-bar[data-behavior="3"].pushed,
    #bottom-bar[data-behavior="1"].pushed,
    #bottom-bar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #bottom-bar[data-behavior="4"].pushed,
    #bottom-bar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1024px) and (max-width:1279px) {
    #bottom-bar[data-behavior="4"],
    #bottom-bar[data-behavior="5"],
    #bottom-bar[data-behavior="6"] {
        width: calc(100% - 15px * 2);
        left: 0
    }
    #bottom-bar[data-behavior="1"],
    #bottom-bar[data-behavior="2"] {
        width: calc(100% - 250px - 15px * 2);
        left: 250px
    }
    #bottom-bar[data-behavior="1"].pushed,
    #bottom-bar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="3"] {
        width: calc(100% - 75px - 15px * 2);
        left: 75px
    }
    #bottom-bar[data-behavior="3"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #bottom-bar[data-behavior="4"].pushed,
    #bottom-bar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1280px) {
    #bottom-bar[data-behavior="4"],
    #bottom-bar[data-behavior="5"],
    #bottom-bar[data-behavior="6"] {
        width: calc(100% - 15px * 2);
        left: 0
    }
    #bottom-bar[data-behavior="1"] {
        width: calc(100% - 500px - 15px * 2);
        left: 500px
    }
    #bottom-bar[data-behavior="1"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #bottom-bar[data-behavior="2"] {
        width: calc(100% - 250px - 15px * 2);
        left: 250px
    }
    #bottom-bar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="3"] {
        width: calc(100% - 75px - 15px * 2);
        left: 75px
    }
    #bottom-bar[data-behavior="3"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #bottom-bar[data-behavior="4"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #bottom-bar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #bottom-bar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

#cover {
    position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -1
}

#footer {
    color: #9eabb3;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 70px;
    height: auto;
    padding: 20px
}

#header {
    display: block;
    height: 55px;
    position: fixed;
    top: 0;
    border: 1px solid #eef2f8;
    color: #88909a;
    z-index: 20;
    -webkit-transition: -webkit-transform .25s ease-in-out
}

#header #btn-open-sidebar {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer
}

#header .header-right-icon,
#header .header-right-picture {
    position: absolute;
    top: 12.5px;
    right: 20px;
    color: #88909a
}

#header .header-right-picture {
    display: block;
    width: 30px;
    height: 30px
}

#header .header-right-picture .header-picture {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 15px
}

#header .header-title {
    text-align: center;
    font-size: 1.6rem;
    line-height: 55px;
    margin: 0
}

#header .header-title .header-title-link {
    color: #88909a;
    font-weight: 400
}

#header .header-title .header-title-link:active,
#header .header-title .header-title-link:hover {
    color: #6e7681;
    text-decoration: none
}

#header.header-up {
    -webkit-transform: translate3d(0, -55px, 0);
    -moz-transform: translate3d(0, -55px, 0);
    transform: translate3d(0, -55px, 0)
}

#header[data-behavior="4"].pushed,
#header[data-behavior="5"].pushed,
#header[data-behavior="1"].pushed,
#header[data-behavior="2"].pushed {
    -webkit-transform: translate3d(250px, 0, 0);
    -moz-transform: translate3d(250px, 0, 0);
    transform: translate3d(250px, 0, 0)
}

#header[data-behavior="3"].pushed,
#header[data-behavior="6"].pushed {
    -webkit-transform: translate3d(75px, 0, 0);
    -moz-transform: translate3d(75px, 0, 0);
    transform: translate3d(75px, 0, 0)
}

@media only screen and (min-width:768px) {
    #header[data-behavior="3"],
    #header[data-behavior="1"],
    #header[data-behavior="2"] {
        display: none
    }
}

@media only screen and (min-width:1280px) {
    #header[data-behavior="4"].pushed,
    #header[data-behavior="1"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #header[data-behavior="5"].pushed,
    #header[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
}

@media print {
    #header {
        display: none
    }
}

#main {
    display: block;
    min-height: 100%;
    -webkit-transition: -webkit-transform .25s ease-in-out
}

#sidebar,
.post-header-cover {
    transition: transform .25s ease-in-out
}

#main.hasCover.hasCoverCaption,
#main.hasCover.hasCoverMetaOut {
    padding-top: 50px!important
}

#main.hasCover.hasCoverMetaIn,
#main.hasCover.hasCoverMetaOut.hasCoverCaption {
    padding-top: 0!important
}

@media only screen and (max-width:767px) {
    #main {
        padding-top: 70px;
        display: block;
        width: 100%
    }
    #main[data-behavior="4"].pushed,
    #main[data-behavior="5"].pushed,
    #main[data-behavior="1"].pushed,
    #main[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #main[data-behavior="3"].pushed,
    #main[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    #main[data-behavior="4"],
    #main[data-behavior="5"],
    #main[data-behavior="6"] {
        padding-top: 70px;
        display: block;
        width: 100%
    }
    #main[data-behavior="3"],
    #main[data-behavior="1"],
    #main[data-behavior="2"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 75px)
    }
    #main[data-behavior="4"].pushed,
    #main[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #main[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1024px) and (max-width:1279px) {
    #main[data-behavior="4"],
    #main[data-behavior="5"],
    #main[data-behavior="6"] {
        padding-top: 70px;
        display: block;
        width: 100%
    }
    #main[data-behavior="1"],
    #main[data-behavior="2"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 250px)
    }
    #main[data-behavior="3"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 75px)
    }
    #main[data-behavior="4"].pushed,
    #main[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #main[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1280px) {
    #main[data-behavior="4"],
    #main[data-behavior="5"],
    #main[data-behavior="6"] {
        padding-top: 70px;
        display: block;
        width: 100%
    }
    #main[data-behavior="1"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 500px)
    }
    #main[data-behavior="2"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 250px)
    }
    #main[data-behavior="3"] {
        padding-top: 15px;
        float: right;
        width: calc(100% - 75px)
    }
    #main[data-behavior="4"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #main[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #main[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

#sidebar {
    font-family: "Open Sans", sans-serif;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
    -webkit-transition: -webkit-transform .25s ease-in-out;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased
}

#sidebar .sidebar-profile {
    color: #ebebeb;
    text-align: center;
    padding-top: 18px;
    margin-bottom: 15px
}

#sidebar .sidebar-profile .sidebar-profile-picture {
    display: block;
    margin: 0 auto
}

#sidebar .sidebar-profile .sidebar-profile-name {
    font-size: 1.1em;
    color: #ebebeb
}

#sidebar ul.sidebar-buttons {
    padding: 0;
    margin: 0 0 20px
}

#sidebar ul.sidebar-buttons li.sidebar-button {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px
}

#sidebar ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
    color: #ebebeb;
    display: block;
    height: 100%
}

#sidebar ul.sidebar-buttons li.sidebar-button .sidebar-button-link:active,
#sidebar ul.sidebar-buttons li.sidebar-button .sidebar-button-link:hover {
    text-decoration: none;
    color: #fff
}

#sidebar ul.sidebar-buttons:first-child {
    margin-top: 5px
}

@media only screen and (max-width:767px) {
    #sidebar[data-behavior="4"],
    #sidebar[data-behavior="5"],
    #sidebar[data-behavior="1"],
    #sidebar[data-behavior="2"] {
        left: -250px;
        width: 250px
    }
    #sidebar[data-behavior="4"] .sidebar-profile,
    #sidebar[data-behavior="5"] .sidebar-profile,
    #sidebar[data-behavior="1"] .sidebar-profile,
    #sidebar[data-behavior="2"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="4"].pushed,
    #sidebar[data-behavior="5"].pushed,
    #sidebar[data-behavior="1"].pushed,
    #sidebar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="3"],
    #sidebar[data-behavior="6"] {
        left: -75px;
        width: 75px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="3"].pushed,
    #sidebar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    #sidebar[data-behavior="3"],
    #sidebar[data-behavior="1"],
    #sidebar[data-behavior="2"] {
        width: 75px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="3"].pushed,
    #sidebar[data-behavior="1"].pushed,
    #sidebar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #sidebar[data-behavior="4"],
    #sidebar[data-behavior="5"] {
        left: -250px;
        width: 250px
    }
    #sidebar[data-behavior="4"] .sidebar-profile,
    #sidebar[data-behavior="5"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="4"].pushed,
    #sidebar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="6"] {
        left: -75px;
        width: 75px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1024px) and (max-width:1279px) {
    #sidebar[data-behavior="1"],
    #sidebar[data-behavior="2"] {
        width: 250px
    }
    #sidebar[data-behavior="1"] .sidebar-profile,
    #sidebar[data-behavior="2"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="1"].pushed,
    #sidebar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="3"] {
        width: 75px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="3"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #sidebar[data-behavior="4"],
    #sidebar[data-behavior="5"] {
        left: -250px;
        width: 250px
    }
    #sidebar[data-behavior="4"] .sidebar-profile,
    #sidebar[data-behavior="5"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-picture,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-name,
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="4"].pushed,
    #sidebar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="6"] {
        left: -75px;
        width: 75px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1280px) {
    #sidebar[data-behavior="1"] {
        width: 500px;
        display: -webkit-flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    #sidebar[data-behavior="1"] .sidebar-container {
        position: relative;
        padding: 0 80px
    }
    #sidebar[data-behavior="1"] .sidebar-profile {
        padding-top: 0;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-bio,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-job,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-location {
        font-weight: 400;
        font-size: 1.6rem;
        color: #ebebeb
    }
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-job,
    #sidebar[data-behavior="1"] .sidebar-profile .sidebar-profile-location {
        margin-top: 0;
        width: 49%;
        display: inline-block
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons {
        width: 49%;
        vertical-align: top;
        display: inline-block
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button {
        text-align: left;
        box-sizing: border-box
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-top: 0;
        white-space: nowrap
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        float: left;
        text-align: center;
        width: 30px;
        height: 35px;
        line-height: 35px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
    #sidebar[data-behavior="1"] ul.sidebar-buttons li.sidebar-button:nth-child(odd) {
        padding-right: 20px
    }
    #sidebar[data-behavior="1"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #sidebar[data-behavior="2"] {
        width: 250px
    }
    #sidebar[data-behavior="2"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="2"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="2"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="3"] {
        width: 75px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="3"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="3"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: none
    }
    #sidebar[data-behavior="3"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
    #sidebar[data-behavior="4"] {
        left: -500px;
        width: 500px;
        display: -webkit-flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    #sidebar[data-behavior="4"] .sidebar-container {
        position: relative;
        padding: 0 80px
    }
    #sidebar[data-behavior="4"] .sidebar-profile {
        padding-top: 0;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-bio,
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-job,
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-location {
        font-weight: 400;
        font-size: 1.6rem;
        color: #ebebeb
    }
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-job,
    #sidebar[data-behavior="4"] .sidebar-profile .sidebar-profile-location {
        margin-top: 0;
        width: 49%;
        display: inline-block
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons {
        width: 49%;
        vertical-align: top;
        display: inline-block
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button {
        text-align: left;
        box-sizing: border-box
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-top: 0;
        white-space: nowrap
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        float: left;
        text-align: center;
        width: 30px;
        height: 35px;
        line-height: 35px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
    #sidebar[data-behavior="4"] ul.sidebar-buttons li.sidebar-button:nth-child(odd) {
        padding-right: 20px
    }
    #sidebar[data-behavior="4"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    #sidebar[data-behavior="5"] {
        left: -250px;
        width: 250px
    }
    #sidebar[data-behavior="5"] .sidebar-profile {
        height: 130px;
        padding-top: 40px;
        padding-bottom: 7.5px
    }
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-picture {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        margin-bottom: 5px
    }
    #sidebar[data-behavior="5"] .sidebar-profile .sidebar-profile-name {
        font-size: 1.6rem
    }
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button {
        text-align: left
    }
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: left;
        width: auto;
        padding-left: 23px;
        padding-top: 0
    }
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle;
        margin-right: 15px
    }
    #sidebar[data-behavior="5"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc {
        display: inline-block;
        width: auto;
        height: 35px;
        line-height: 35px;
        font-size: 1.5rem;
        letter-spacing: .3px;
        vertical-align: middle
    }
    #sidebar[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    #sidebar[data-behavior="6"] {
        left: -75px;
        width: 75px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-picture {
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        border-radius: 30px
    }
    #sidebar[data-behavior="6"] .sidebar-profile .sidebar-profile-name {
        display: none
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button {
        text-align: center
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link {
        text-align: center;
        width: 100%
    }
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-icon {
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        vertical-align: middle
    }
    #sidebar[data-behavior="5"] .sidebar-profile-bio,
    #sidebar[data-behavior="3"] .sidebar-profile-bio,
    #sidebar[data-behavior="6"] .sidebar-profile-bio,
    #sidebar[data-behavior="6"] ul.sidebar-buttons li.sidebar-button .sidebar-button-link .sidebar-button-desc,
    #sidebar[data-behavior="2"] .sidebar-profile-bio {
        display: none
    }
    #sidebar[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

.codeblock,
.codeblock .gutter,
figure.highlight,
figure.highlight .gutter {
    line-height: 2.3rem;
    background: #f7f8f8
}

.codeblock .code,
.codeblock .gutter,
.post,
figure.highlight .code,
figure.highlight .gutter {
    vertical-align: top
}

@media only screen and (max-width:1279px) {
    #sidebar .sidebar-profile-bio {
        display: none
    }
}

@media print {
    #sidebar {
        display: none
    }
}

.alert {
    position: relative;
    text-align: left;
    padding: 10px 15px;
    min-height: 30px;
    margin: 1em 0 0;
    border: none;
    border-left: 3px solid
}

.alert p {
    margin: 1.5em 0 0
}

.alert p:first-child {
    margin: 0
}

.alert:not(.no-icon) {
    padding-left: 55px
}

.btn,
.btn--medium,
.btn--small {
    padding: 8px 15px
}

.alert:not(.no-icon):before {
    position: absolute;
    top: 10px;
    left: 15px;
    font-family: FontAwesome;
    font-size: 2.5rem
}

.alert.info {
    border-color: #349ef3;
    background-color: #e6f3fe
}

.alert.info:not(.no-icon):before {
    content: "\f05a";
    color: #349ef3
}

.alert.success {
    border-color: #4dc657;
    background-color: #effaf0;
    content: "\f058"
}

.alert.success:not(.no-icon):before {
    content: "\f058";
    color: #4dc657
}

.alert.warning {
    border-color: #f5aa0a;
    background-color: #fdf1d8
}

.alert.warning:not(.no-icon):before {
    content: "\f071";
    color: #f5aa0a
}

.alert.danger {
    border-color: #f5311d;
    background-color: #feecea
}

.alert.danger:not(.no-icon):before {
    content: "\f05e";
    color: #f5311d
}

.archive-result {
    display: none
}

.archive .archive-title {
    color: #5d686f
}

.archive .archive-posts {
    list-style: none
}

.archive .archive-posts .archive-post .archive-post-title {
    margin-left: 10px;
    color: #5d686f
}

.archive .archive-posts .archive-post .archive-post-date {
    color: #9eabb3
}

.archive .archive-posts .archive-post::before {
    font-family: FontAwesome;
    content: '\f0da';
    font-size: 1.3rem
}

.boxes,
.boxes .box:nth-child(n+2) {
    margin-top: 20px
}

.box {
    border-bottom: 1px solid #eef2f8
}

.btn {
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 3px;
    margin: 0;
    letter-spacing: .01em;
    font-size: 1.6rem;
    cursor: pointer
}

.btn:active,
.btn:focus,
.btn:hover {
    text-decoration: none
}

.btn--disabled,
.btn--disabled:hover {
    color: #bbc4c9!important;
    border: 1px solid #bbc4c9;
    cursor: not-allowed;
    text-decoration: none
}

.btn--default {
    color: #9eabb3!important;
    border: 1px solid #9eabb3
}

.btn--default:hover {
    color: #738691!important;
    border: 1px solid #738691
}

.btn--success {
    color: #4dc657!important;
    border: 1px solid #4dc657
}

.btn--success:hover {
    color: #309639!important;
    border: 1px solid #309639
}

.btn--primary {
    color: #349ef3!important;
    border: 1px solid #349ef3
}

.btn--primary:hover {
    color: #0c78ce!important;
    border: 1px solid #0c78ce
}

.btn--danger {
    color: #f5311d!important;
    border: 1px solid #f5311d
}

.btn--danger:hover {
    color: #bd1908!important;
    border: 1px solid #bd1908
}

.btn--medium {
    font-size: 1.5rem
}

.btn--small {
    font-size: 1.3rem
}

.caption {
    display: block;
    font-family: Merriweather, serif;
    font-size: 1.3rem;
    color: #81929d;
    text-align: center;
    font-style: italic;
    padding-right: 10px;
    padding-left: 10px
}

.codeblock,
figure.highlight {
    margin: 10px 0;
    line-height: 2.3rem;
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: hidden
}

.codeblock table,
figure.highlight table {
    display: block;
    width: 100%
}

.codeblock .code,
.codeblock .gutter,
.codeblock .tag,
.codeblock pre,
figure.highlight .code,
figure.highlight .gutter,
figure.highlight .tag,
figure.highlight pre {
    background-color: inherit;
    font-family: Menlo, Consolas, monospace;
    border: none;
    padding: 0;
    margin: 0;
    cursor: text
}

.codeblock.plain .gutter,
figure.highlight.plain .gutter {
    display: none
}

.codeblock figcaption,
figure.highlight figcaption {
    font-size: 1.3rem;
    padding: 0 15px 20px;
    margin: 0
}

.codeblock figcaption a,
figure.highlight figcaption a {
    float: right
}

.codeblock .gutter,
figure.highlight .gutter {
    border-right: 1px solid;
    padding: .3em 15px;
    line-height: 2.3rem;
    font-size: 1.4rem
}

.codeblock .gutter pre,
figure.highlight .gutter pre {
    color: #aaa
}

.codeblock .code,
figure.highlight .code {
    padding: .3em 15px .3em 1em;
    width: 100%
}

.codeblock .code pre,
figure.highlight .code pre {
    line-height: 2.3rem;
    font-size: 1.4rem;
    max-width: calc(750px - 50px);
    overflow-x: auto;
    overflow-y: hidden
}

.codeblock .line,
figure.highlight .line {
    height: 2.3rem;
    font-size: 1.4rem
}

.codeblock--tabbed figure.highlight,
.codeblock--tabbed pre>code {
    margin-bottom: 0;
    padding-bottom: 0
}

.codeblock--tabbed figcaption a,
.codeblock--tabbed figcaption span {
    float: left!important
}

.codeblock--tabbed figcaption .tabs {
    float: right
}

.codeblock--tabbed figcaption .tabs .tab {
    cursor: pointer;
    display: inline-block;
    margin: 0 5px;
    padding: 0 7px
}

.codeblock--tabbed figcaption .tabs .tab:last-child {
    margin-right: 0
}

.gist .line,
.gist .line-number {
    font-family: Menlo, Consolas, monospace;
    font-size: 1em;
    margin: 0 0 5px
}

.figure.center,
.figure.center .fig-img {
    margin: 2px auto
}

.figure.clear {
    clear: both
}

.figure.center {
    width: calc(100% - 4px)
}

.figure.fig-20,
.figure.fig-25,
.figure.fig-33,
.figure.fig-50,
.figure.fig-75,
.figure.left {
    float: left;
    margin: 2px
}

.figure.right {
    float: right;
    margin: 2px
}

.figure.fig-20 {
    width: calc(20% - 4px)
}

.figure.fig-25 {
    width: calc(25% - 4px)
}

.figure.fig-33 {
    width: calc(33.3% - 4px)
}

.figure.fig-50 {
    width: calc(50% - 4px)
}

.figure.fig-75 {
    width: calc(75% - 4px)
}

.figure.fig-100 {
    width: calc(100% - 4px);
    margin: 2px
}

.figure.figure--fullWidth {
    width: 100%
}

.figure.figure--fullWidth .figure-img {
    margin: 0 auto
}

@media only screen and (max-width:767px) {
    .fig-20 .caption,
    .fig-25 .caption,
    .fig-33 .caption {
        display: none
    }
}

.form-control {
    background: 0 0;
    width: 100%;
    border: none;
    outline: 0;
    color: #5d686f;
    font-weight: 300
}

.input--large {
    height: auto;
    padding: 10px 0;
    font-size: 18px;
    line-height: 21px
}

.input--xlarge {
    height: auto;
    padding: 10px 0;
    font-size: 25px;
    line-height: 30px
}

.hide {
    display: none
}

@media only screen and (max-width:479px) {
    .hide-xs {
        display: none
    }
}

@media only screen and (min-width:480px) and (max-width:767px) {
    .hide-sm {
        display: none
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    .hide-md {
        display: none
    }
}

@media only screen and (min-width:1024px) {
    .hide-lg {
        display: none
    }
}

.highlight-text {
    display: inline;
    padding: 3px
}

.highlight-text.red {
    background-color: #ffe6e6
}

.highlight-text.green {
    background-color: #cdffcd
}

.highlight-text.blue {
    background-color: #e6e6ff
}

.highlight-text.purple {
    background-color: #ffe6ff
}

.highlight-text.orange {
    background-color: #ffedcc
}

.highlight-text.yellow {
    background-color: #ffc
}

.highlight-text.cyan {
    background-color: #cff
}

.highlight-text.primary {
    background-color: #ddeffd
}

.highlight-text.success {
    background-color: #d4f1d7
}

.highlight-text.warning {
    background-color: #fdeece
}

.highlight-text.danger {
    background-color: #fee3e0
}

.icon-mt {
    margin-top: 10px
}

.icon-mr {
    margin-right: 10px
}

.icon-mb {
    margin-bottom: 10px
}

.icon-ml {
    margin-left: 10px
}

.image-gallery {
    display: block;
    position: relative;
    height: auto;
    overflow: hidden;
    margin-bottom: 30px
}

.modal,
.modal-container {
    height: 100%;
    box-sizing: border-box
}

.image-gallery .image-gallery-metabar {
    position: absolute;
    bottom: 0;
    width: calc(100% - (1.5em) * 2);
    font-family: "Open Sans";
    font-style: italic;
    background: rgba(0, 0, 0, .75);
    font-size: 1.3rem;
    color: #fff;
    padding: .5em 1.5em;
    z-index: 1
}

.image-gallery .image-gallery-photos .photo-box {
    float: left;
    position: relative;
    overflow: hidden;
    display: none
}

.image-gallery .image-gallery-photos .photo-box:first-child {
    display: block;
    width: 100%;
    padding-bottom: 56.25%
}

.image-gallery .image-gallery-photos .photo-box .photo-box-inner {
    position: absolute;
    overflow: hidden
}

.image-gallery .image-gallery-photos .photo-box .photo-box-inner .photo {
    width: 100%;
    cursor: -webkit-zoom-in;
    cursor: -moz-zoom-in
}

.image-gallery .image-gallery-photos--thumbnail .photo-box {
    display: block;
    width: 50%;
    padding-bottom: 30%
}

.image-gallery .image-gallery-photos--thumbnail .photo-box:first-child {
    width: 100%;
    padding-bottom: 40%;
    margin-bottom: 2px
}

.image-gallery .image-gallery-photos--thumbnail .photo-box:nth-child(2) {
    margin-right: 2px;
    width: calc(50% - 2px)
}

.media-body,
.modal,
.overlay,
.pagination-bar {
    width: 100%
}

.image-gallery .image-gallery-photos--thumbnail .photo-box:nth-child(n+4) {
    display: none
}

a.link-unstyled,
a.link-unstyled:active,
a.link-unstyled:hover {
    cursor: pointer!important;
    color: inherit!important;
    text-decoration: none!important
}

a.link-unstyled a.link,
a.link-unstyled a.link:active,
a.link-unstyled a.link:hover {
    text-decoration: underline!important
}

.post .post-header .post-title:hover,
.post-header .post-title:hover,
.post-header-cover .post-header .post-title:hover,
.postShorten .postShorten-header .postShorten-title:hover,
.tag--danger:hover,
.tag--primary:hover,
.tag--success:hover,
a.tag--danger:hover,
a.tag--primary:hover,
a.tag--success:hover {
    text-decoration: none
}

a.fancybox {
    cursor: zoom-in!important
}

.main-content-wrap {
    display: block;
    max-width: 750px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px
}

@media only screen and (min-width:1024px) {
    .markdown h1 {
        font-size: 3rem
    }
    .markdown h2 {
        font-size: 2.7rem
    }
    .markdown h3 {
        font-size: 2.4rem
    }
    .markdown h4 {
        font-size: 2.1rem
    }
    .markdown h5 {
        font-size: 1.9rem
    }
    .markdown h6 {
        font-size: 1.7rem
    }
}

@media only screen and (max-width:767px) {
    .markdown h1 {
        font-size: 2.65rem
    }
    .markdown h2 {
        font-size: 2.35rem
    }
    .markdown h3 {
        font-size: 2.05rem
    }
    .markdown h4 {
        font-size: 1.75rem
    }
    .markdown h5 {
        font-size: 1.55rem
    }
    .markdown h6 {
        font-size: 1.35rem
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    .markdown h1 {
        font-size: 2.8rem
    }
    .markdown h2 {
        font-size: 2.5rem
    }
    .markdown h3 {
        font-size: 2.2rem
    }
    .markdown h4 {
        font-size: 1.9rem
    }
    .markdown h5 {
        font-size: 1.7rem
    }
    .markdown h6 {
        font-size: 1.5rem
    }
}

.media-body,
.media-left {
    display: table-cell;
    vertical-align: top
}

.media-left {
    float: left;
    padding-right: 15px
}

.media-heading {
    margin: 0 0 -5px
}

.media-meta {
    color: #9eabb3
}

.media-content {
    color: #5d686f
}

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1010
}

.modal,
.modal-body,
.modal-header {
    position: relative
}

.modal {
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
    overflow: hidden
}

.modal-header {
    padding: 10px 15px 0;
    background: #fff;
    border-bottom: 1px solid #eef2f8
}

.modal-body,
.modal-footer {
    padding: 0 15px;
    background: #fff
}

.modal-body {
    overflow-y: auto
}

.modal-footer {
    height: 50px;
    border-top: 1px solid #eef2f8
}

.modal .close-button {
    position: absolute;
    top: 9px;
    right: 15px;
    color: #5d686f;
    cursor: pointer
}

.overlay {
    display: none;
    background: rgba(0, 0, 0, .5);
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1009;
    overflow: hidden
}

@media only screen and (min-width:768px) {
    .modal-container {
        padding: 50px 0;
        left: 50%;
        transform: translateX(-50%)
    }
    .modal {
        border-radius: 5px
    }
}

.pagination-bar {
    height: 60px
}

.pagination-bar .pagination {
    position: relative;
    height: 60px;
    line-height: 60px;
    display: block;
    list-style: none;
    padding: 0 10px;
    width: auto
}

.pagination-bar .pagination .pagination-next,
.pagination-bar .pagination .pagination-prev {
    float: left;
    margin-right: 10px
}

.pagination-bar .pagination .pagination-number {
    float: right;
    font-size: 1.3rem;
    color: #9eabb3
}

.post {
    position: relative;
    width: 100%;
    display: inline-block
}

.post .post-header .post-title {
    margin: 0;
    word-break: initial;
    overflow: hidden
}

.post .post-meta {
    line-height: 1.5em;
    font-family: "Open Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: #9eabb3
}

.post .post-meta a {
    color: #9eabb3
}

.post .post-content {
    text-rendering: optimizelegibility;
    letter-spacing: -.3px;
    font-family: Merriweather, serif;
    color: #5d686f;
    margin-top: 20px;
    font-weight: 400;
    overflow: hidden;
    -webkit-hypens: auto;
    -moz-hypens: auto;
    hypens: auto
}

.post .post-content img {
    display: block;
    width: auto;
    max-width: 100%
}

.post .post-content:not(blockquote):not(.alert)>p {
    margin: 1.5em 0 0
}

.post .post-footer {
    margin-top: 20px
}

.post .post-footer-tags {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eef2f8
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    .post .post-header .post-title {
        font-size: 3.3rem
    }
}

@media only screen and (min-width:1024px) {
    .post .post-header .post-title {
        font-size: 3.7rem
    }
}

@media only screen and (min-width:768px) {
    .post-content {
        font-size: 1.7rem
    }
}

.post-actions-wrap {
    height: 60px;
    padding: 0;
    line-height: 60px;
    clear: both
}

.post-actions-wrap ul.post-actions {
    float: left;
    padding-left: 0;
    margin-top: 0;
    list-style: none
}

.post-actions-wrap ul.post-actions li.post-action {
    width: auto;
    text-align: center
}

.post-actions-wrap ul.post-action-nav {
    width: 35%;
    z-index: 42
}

.post-actions-wrap ul.post-action-nav li.post-action {
    float: left;
    min-width: 42px
}

.post-actions-wrap ul.post-action-nav li.post-action:last-child .post-action-btn {
    margin-left: 15px
}

.post-actions-wrap ul.post-action-share {
    width: 65%;
    z-index: 41
}

.post-actions-wrap ul.post-action-share li.post-action {
    float: right
}

.post-actions-wrap ul.post-action-share li.post-action:nth-child(n+3) .post-action-btn {
    margin-right: 15px
}

@media only screen and (max-width:767px) {
    .post-actions-wrap ul.post-action-nav {
        width: 25%
    }
    .post-actions-wrap ul.post-action-share {
        width: 75%
    }
}

@media only screen and (max-width:479px) {
    .post-actions-wrap ul.post-action-nav {
        width: 35%
    }
    .post-actions-wrap ul.post-action-share {
        width: 65%
    }
}

@media print {
    .post-actions-wrap {
        display: none
    }
}

.pullquote {
    text-align: left;
    font-style: italic;
    margin: 1.5em 0 0
}

.pullquote.figure.fig-20,
.pullquote.figure.fig-25,
.pullquote.figure.fig-33,
.pullquote.figure.fig-50,
.pullquote.figure.fig-75,
.pullquote.left {
    width: 45%;
    float: left;
    margin: 1.5em 35px 1.5em 0
}

.pullquote.right {
    width: 45%;
    float: right;
    margin: 1.5em 0 1.5em 35px
}

.pullquote.blur {
    background-color: #eef0f1
}

.post-header .post-title {
    margin: 0;
    word-break: initial;
    overflow: hidden
}

.post-header-cover {
    display: table;
    position: relative;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding: calc(55px + 30px) 0 30px;
    height: 100%;
    z-index: 15;
    -webkit-transition: -webkit-transform .25s ease-in-out
}

.post-header-cover .post-header {
    display: table-cell;
    vertical-align: middle
}

.post-header-cover .post-header .post-title {
    max-width: 750px;
    margin: 0 auto 20px;
    color: #fff;
    text-shadow: 0 2px 0 rgba(0, 0, 0, .9)
}

.post-header-cover .post-header .post-meta {
    max-width: 750px;
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    color: #fff!important;
    font-weight: 400;
    letter-spacing: .05em;
    text-shadow: 0 1px 0 rgba(0, 0, 0, .9);
    margin: 0 auto
}

.post-header-cover .post-header .post-meta a {
    color: #fff
}

.post-header-cover.post-header-cover--partial {
    height: 60%
}

.post-header-cover-caption {
    margin: 5px 0 50px
}

@media only screen and (max-width:479px) {
    .post-header-cover .post-header .post-title {
        font-size: 2.8rem
    }
}

@media only screen and (min-width:480px) and (max-width:767px) {
    .post-header-cover .post-header .post-title {
        font-size: 3.3rem
    }
}

@media only screen and (max-width:767px) {
    .post-header-cover {
        width: 100%;
        left: 0
    }
    .post-header-cover[data-behavior="4"].pushed,
    .post-header-cover[data-behavior="5"].pushed,
    .post-header-cover[data-behavior="1"].pushed,
    .post-header-cover[data-behavior="2"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    .post-header-cover[data-behavior="3"].pushed,
    .post-header-cover[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    .post-header-cover .post-header .post-title {
        font-size: 5.8rem;
        line-height: 1.3em
    }
    .post-header-cover[data-behavior="3"],
    .post-header-cover[data-behavior="1"],
    .post-header-cover[data-behavior="2"] {
        width: calc(100% - 75px);
        left: 75px
    }
    .post-header-cover[data-behavior="4"],
    .post-header-cover[data-behavior="5"],
    .post-header-cover[data-behavior="6"] {
        width: 100%;
        left: 0
    }
    .post-header-cover[data-behavior="4"].pushed,
    .post-header-cover[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    .post-header-cover[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1024px) and (max-width:1279px) {
    .post-header-cover .post-header .post-title {
        font-size: 6.5rem;
        line-height: 1.3em
    }
    .post-header-cover[data-behavior="1"],
    .post-header-cover[data-behavior="2"] {
        width: calc(100% - 250px);
        left: 250px
    }
    .post-header-cover[data-behavior="3"] {
        width: calc(100% - 75px);
        left: 75px
    }
    .post-header-cover[data-behavior="4"],
    .post-header-cover[data-behavior="5"],
    .post-header-cover[data-behavior="6"] {
        width: 100%;
        left: 0
    }
    .post-header-cover[data-behavior="4"].pushed,
    .post-header-cover[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    .post-header-cover[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

@media only screen and (min-width:1280px) {
    .post-header-cover .post-header .post-title {
        font-size: 6.5rem;
        line-height: 1.3em
    }
    .post-header-cover[data-behavior="1"] {
        width: calc(100% - 500px);
        left: 500px
    }
    .post-header-cover[data-behavior="2"] {
        width: calc(100% - 250px);
        left: 250px
    }
    .post-header-cover[data-behavior="3"] {
        width: calc(100% - 75px);
        left: 75px
    }
    .post-header-cover[data-behavior="4"],
    .post-header-cover[data-behavior="5"],
    .post-header-cover[data-behavior="6"] {
        width: 100%;
        left: 0
    }
    .post-header-cover[data-behavior="4"].pushed {
        -webkit-transform: translate3d(500px, 0, 0);
        -moz-transform: translate3d(500px, 0, 0);
        transform: translate3d(500px, 0, 0)
    }
    .post-header-cover[data-behavior="5"].pushed {
        -webkit-transform: translate3d(250px, 0, 0);
        -moz-transform: translate3d(250px, 0, 0);
        transform: translate3d(250px, 0, 0)
    }
    .post-header-cover[data-behavior="6"].pushed {
        -webkit-transform: translate3d(75px, 0, 0);
        -moz-transform: translate3d(75px, 0, 0);
        transform: translate3d(75px, 0, 0)
    }
}

.postShorten-group .postShorten {
    margin-top: 15px;
    border-bottom: 1px solid #eef2f8
}

.postShorten {
    position: relative;
    width: 100%;
    display: inline-block;
    vertical-align: top
}

.postShorten .postShorten-thumbnailimg {
    overflow: hidden
}

.postShorten .postShorten-header .postShorten-title {
    margin: 0;
    word-break: initial;
    overflow: hidden
}

.postShorten .postShorten-meta {
    line-height: 1.5em
}

.postShorten .postShorten-meta,
.postShorten .postShorten-meta a,
.postShorten .postShorten-readingtime {
    color: #9eabb3
}

.postShorten .postShorten-excerpt_link {
    margin-top: -15px
}

.postShorten .postShorten-excerpt_link,
.postShorten .postShorten-meta,
.postShorten .postShorten-readingtime {
    font-family: "Open Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 400
}

.postShorten .postShorten-content,
.postShorten .postShorten-excerpt {
    text-rendering: optimizelegibility;
    letter-spacing: -.3px;
    font-family: Merriweather, serif;
    color: #5d686f;
    font-weight: 400;
    overflow: hidden;
    -webkit-hypens: auto;
    -moz-hypens: auto;
    hypens: auto
}

.postShorten .postShorten-content img,
.postShorten .postShorten-excerpt img {
    display: block;
    width: auto;
    max-width: 100%
}

.postShorten .postShorten-excerpt {
    margin-top: 15px
}

.postShorten .postShorten-excerpt p:nth-child(1) {
    margin: 0
}

.postShorten .postShorten-content {
    margin-top: 25px
}

@media only screen and (max-width:479px) {
    .postShorten .postShorten-thumbnailimg,
    .postShorten .postShorten-thumbnailimg img {
        display: none
    }
}

@media only screen and (min-width:480px) {
    .postShorten.postShorten--thumbnailimg-right .postShorten-thumbnailimg {
        float: right;
        margin: 5px 0 30px 15px
    }
    .postShorten.postShorten--thumbnailimg-right .postShorten-thumbnailimg img {
        display: block;
        width: 140px;
        height: 140px;
        object-fit: cover;
        overflow: hidden
    }
    .postShorten.postShorten--thumbnailimg-right .postShorten-wrap {
        float: left;
        width: calc(100% - 140px - 20px)
    }
    .postShorten.postShorten--thumbnailimg-left .postShorten-thumbnailimg {
        float: left;
        margin: 5px 15px 30px 0
    }
    .postShorten.postShorten--thumbnailimg-left .postShorten-thumbnailimg img {
        display: block;
        width: 140px;
        height: 140px;
        object-fit: cover;
        overflow: hidden
    }
    .postShorten.postShorten--thumbnailimg-left .postShorten-wrap {
        float: right;
        width: calc(100% - 140px - 20px)
    }
    .postShorten.postShorten--thumbnailimg-top .postShorten-thumbnailimg {
        margin-top: 5px
    }
    .postShorten.postShorten--thumbnailimg-bottom .postShorten-wrap {
        display: block;
        width: 100%
    }
    .postShorten.postShorten--thumbnailimg-bottom .postShorten-excerpt>p {
        margin-bottom: 0
    }
    .postShorten.postShorten--thumbnailimg-bottom .postShorten-thumbnailimg {
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 15px 0
    }
    .postShorten.postShorten--thumbnailimg-bottom .postShorten-thumbnailimg img {
        width: auto;
        height: auto
    }
}

.share-options-bar {
    position: fixed;
    bottom: -100%;
    background: #fff;
    height: 100%;
    clear: both;
    border-top: 1px solid #eef2f8;
    transition: transform .25s ease-in-out;
    z-index: 50;
    -webkit-transition: -webkit-transform .25s ease-in-out;
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.share-options-bar.opened {
    -webkit-transform: translate3d(0, -100%, 0);
    -moz-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0)
}

.share-options-bar .share-options {
    padding: 0;
    margin: 0;
    list-style: none
}

.share-options-bar .share-options .share-option:first-child .share-option-btn {
    padding: 20px 0 10px
}

.share-options-bar .share-options .share-option:last-child .share-option-btn {
    padding: 10px 0 20px
}

.share-options-bar .share-options .share-option .share-option-btn {
    color: #6e7681;
    display: block;
    width: 100%;
    padding: 10px 0
}

.share-options-bar .share-options .share-option .share-option-btn .fa {
    margin-right: 15px
}

#btn-close-shareoptions {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    color: #5d686f;
    cursor: pointer
}

@media only screen and (max-width:767px) {
    .share-options-bar {
        width: 100%
    }
}

@media only screen and (min-width:768px) and (max-width:1023px) {
    .share-options-bar[data-behavior="3"],
    .share-options-bar[data-behavior="1"],
    .share-options-bar[data-behavior="2"] {
        width: calc(100% - 75px);
        left: 75px
    }
    .share-options-bar[data-behavior="4"],
    .share-options-bar[data-behavior="5"],
    .share-options-bar[data-behavior="6"] {
        width: 100%
    }
}

@media only screen and (min-width:1024px) {
    .share-options-bar[data-behavior="1"],
    .share-options-bar[data-behavior="2"] {
        width: calc(100% - 250px);
        left: 250px
    }
    .share-options-bar[data-behavior="3"] {
        width: calc(100% - 75px);
        left: 75px
    }
    .share-options-bar[data-behavior="4"],
    .share-options-bar[data-behavior="5"],
    .share-options-bar[data-behavior="6"] {
        width: 100%
    }
}

@media print {
    .share-options-bar {
        display: none
    }
}

.tag,
a.tag {
    display: inline-block;
    background: #fff;
    width: auto;
    height: auto;
    border-radius: 3px;
    letter-spacing: .01em;
    cursor: pointer;
    margin: 0 4px 7px 0
}

.tag--default,
a.tag--default {
    color: #9eabb3!important;
    border: 1px solid #9eabb3;
    font-size: 1.3rem;
    padding: 4.5px 15px
}

.tag--default:hover,
a.tag--default:hover {
    color: #738691!important;
    border: 1px solid #738691;
    text-decoration: none
}

.tag--success,
a.tag--success {
    color: #4dc657!important;
    border: 1px solid #4dc657
}

.tag--success:hover,
a.tag--success:hover {
    color: #309639!important;
    border: 1px solid #309639
}

.tag--primary,
a.tag--primary {
    color: #349ef3!important;
    border: 1px solid #349ef3
}

.tag--primary:hover,
a.tag--primary:hover {
    color: #0c78ce!important;
    border: 1px solid #0c78ce
}

.tag--danger,
a.tag--danger {
    color: #f5311d!important;
    border: 1px solid #f5311d
}

.tag--danger:hover,
a.tag--danger:hover {
    color: #bd1908!important;
    border: 1px solid #bd1908
}

.tag--small,
a.tag--small {
    font-size: 1.3rem;
    padding: 2px 10px
}

.text-left {
    text-align: left!important
}

.text-right {
    text-align: right!important
}

.text-center {
    text-align: center!important
}

.text-justify {
    text-align: justify!important
}

.text-nowrap {
    white-space: nowrap!important
}

.text-lowercase {
    text-transform: lowercase!important
}

.text-uppercase {
    text-transform: uppercase!important
}

.text-capitalize {
    text-transform: capitalize!important
}

.text-xsmall {
    font-size: 1rem!important
}

.text-small {
    font-size: 1.3rem!important
}

.text-medium {
    font-size: 1.5rem!important
}

.text-base {
    font-size: 1.6rem!important
}

.text-large {
    font-size: 1.7rem!important
}

.text-xlarge {
    font-size: 1.8rem!important
}

.text-strong {
    font-weight: 700!important
}

.text-regular {
    font-weight: 400!important
}

.text-light {
    font-weight: 300!important
}

.text-italic {
    font-style: italic!important
}

.text-underline,
.text-underline-hover:hover {
    text-decoration: underline!important
}

.text-color-base {
    color: #5d686f!important
}

.text-color-light {
    color: #9eabb3!important
}

.text-color-link {
    color: #349ef3!important
}

.font-merryweather {
    font-family: Merriweather, serif
}

.tooltip,
[data-tooltip] {
    position: relative;
    cursor: pointer
}

.tooltip:before,
[data-tooltip]:before {
    z-index: 1000;
    border: 6px solid transparent;
    background: 0 0;
    content: ""
}

.tooltip:after,
[data-tooltip]:after {
    z-index: 1000;
    padding: 8px;
    min-width: 180px;
    background-color: rgba(0, 0, 20, .93);
    color: #fff;
    content: attr(data-tooltip);
    font-size: .93em;
    line-height: 1.9em;
    border-radius: 5px
}

.tooltip:after,
.tooltip:before,
[data-tooltip]:after,
[data-tooltip]:before {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity .2s ease-in-out, visibility .2s ease-in-out, -webkit-transform .2s cubic-bezier(.71, 1.7, .77, 1.24);
    -moz-transition: opacity .2s ease-in-out, visibility .2s ease-in-out, -moz-transform .2s cubic-bezier(.71, 1.7, .77, 1.24);
    transition: opacity .2s ease-in-out, visibility .2s ease-in-out, transform .2s cubic-bezier(.71, 1.7, .77, 1.24);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    pointer-events: none
}

.tooltip:focus:after,
.tooltip:focus:before,
.tooltip:hover:after,
.tooltip:hover:before,
[data-tooltip]:focus:after,
[data-tooltip]:focus:before,
[data-tooltip]:hover:after,
[data-tooltip]:hover:before {
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100)
}

.tooltip--top:before,
.tooltip:before,
[data-tooltip]:before {
    margin-bottom: -12px;
    border-top-color: rgba(0, 0, 20, .93)
}

.tooltip--top:after,
.tooltip:after,
[data-tooltip]:after {
    margin-left: -91px
}

.tooltip--top:after,
.tooltip--top:before,
.tooltip:after,
.tooltip:before,
[data-tooltip]:after,
[data-tooltip]:before {
    bottom: 100%;
    left: calc(50% - (15px / 2))
}

.tooltip--top:focus:after,
.tooltip--top:focus:before,
.tooltip--top:hover:after,
.tooltip--top:hover:before,
.tooltip:focus:after,
.tooltip:focus:before,
.tooltip:hover:after,
.tooltip:hover:before,
[data-tooltip]:focus:after,
[data-tooltip]:focus:before,
[data-tooltip]:hover:after,
[data-tooltip]:hover:before {
    -webkit-transform: translateY(-12px);
    -moz-transform: translateY(-12px);
    -ms-transform: translateY(-12px);
    -o-transform: translateY(-12px);
    transform: translateY(-12px)
}

.tooltip--left:before {
    margin-left: 0;
    margin-right: -12px;
    margin-bottom: 0;
    border-top-color: transparent;
    border-left-color: rgba(0, 0, 20, .93)
}

.tooltip--left:after {
    margin-left: 0;
    margin-bottom: -15px
}

.tooltip--left:after,
.tooltip--left:before {
    right: 100%;
    bottom: calc(50% - (15px / 2));
    left: auto
}

.tooltip--left:focus:after,
.tooltip--left:focus:before,
.tooltip--left:hover:after,
.tooltip--left:hover:before {
    -webkit-transform: translateX(-12px);
    -moz-transform: translateX(-12px);
    -ms-transform: translateX(-12px);
    -o-transform: translateX(-12px);
    transform: translateX(-12px)
}

.tooltip--bottom:before {
    margin-top: -12px;
    margin-bottom: 0;
    border-top-color: transparent;
    border-bottom-color: rgba(0, 0, 20, .93)
}

.tooltip--bottom:after,
.tooltip--bottom:before {
    top: 100%;
    bottom: auto;
    left: calc(50% - (15px / 2))
}

.tooltip--bottom:focus:after,
.tooltip--bottom:focus:before,
.tooltip--bottom:hover:after,
.tooltip--bottom:hover:before {
    -webkit-transform: translateY(12px);
    -moz-transform: translateY(12px);
    -ms-transform: translateY(12px);
    -o-transform: translateY(12px);
    transform: translateY(12px)
}

.tooltip--right:before {
    margin-bottom: 0;
    margin-left: -12px;
    border-top-color: transparent;
    border-right-color: rgba(0, 0, 20, .93)
}

.tooltip--right:after {
    margin-left: 0;
    margin-bottom: -15px
}

.tooltip--right:after,
.tooltip--right:before {
    bottom: calc(50% - (15px / 2));
    left: 100%;
    right: auto
}

.tooltip--right:focus:after,
.tooltip--right:focus:before,
.tooltip--right:hover:after,
.tooltip--right:hover:before {
    -webkit-transform: translateX(12px);
    -moz-transform: translateX(12px);
    -ms-transform: translateX(12px);
    -o-transform: translateX(12px);
    transform: translateX(12px)
}

.video-container {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    margin: 0 0 1.75em
}

.video-container embed,
.video-container iframe,
.video-container object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0
}

#algolia-search-modal {
    display: none
}

#algolia-search-modal .search-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    color: #5d686f
}

#algolia-search-modal .media-content {
    font-size: .95em
}

#algolia-search-modal .search-input {
    box-sizing: border-box;
    padding: 0 130px 0 25px;
    margin: 0
}

#algolia-search-modal .modal-header {
    padding-bottom: 8px
}

#algolia-search-modal .modal-body {
    padding-top: 15px;
    height: calc(100% - 100px - 15px)
}

#algolia-search-modal .searchby-algolia-logo,
#algolia-search-modal .searchby-algolia-text {
    display: inline-block;
    vertical-align: top;
    height: 20px
}

#algolia-search-modal .media:nth-child(n+2) {
    padding-top: 15px
}

#algolia-search-modal hr {
    margin-top: 0
}

#algolia-search-modal .results-count {
    line-height: 50px;
    color: #5d686f
}

#algolia-search-modal .searchby-algolia {
    position: absolute;
    top: 15px;
    right: 45px
}

#algolia-search-modal .searchby-algolia-text {
    line-height: 20px
}

#algolia-search-modal .no-result {
    display: none;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
}

pre>code {
    background: #f7f8f8;
    color: #333
}

pre>code.codeblock {
    overflow-x: auto
}

code {
    background-color: #f7f8f8
}

.codeblock--tabbed figcaption .tab.active {
    background: #349ef3;
    color: #fff
}

.codeblock,
figure.highlight {
    color: #333
}

.codeblock figcaption,
figure.highlight figcaption {
    background: #f7f8f8;
    color: #999
}

.codeblock .gutter,
figure.highlight .gutter {
    border-right-color: #e6e6e6
}

.codeblock .gutter .line,
figure.highlight .gutter .line {
    color: #aaa
}

.codeblock .comment,
figure.highlight .comment {
    color: #969896
}

.codeblock .string,
figure.highlight .string {
    color: #183691
}

.codeblock .keyword,
figure.highlight .keyword {
    color: #a71d5d
}

.codeblock.apacheconf .code .attribute,
.codeblock.apacheconf .code .cbracket,
.codeblock.apacheconf .code .common,
.codeblock.apacheconf .code .keyword,
.codeblock.apacheconf .code .nomarkup,
.codeblock.apacheconf .code .variable,
figure.highlight.apacheconf .code .attribute,
figure.highlight.apacheconf .code .cbracket,
figure.highlight.apacheconf .code .common,
figure.highlight.apacheconf .code .keyword,
figure.highlight.apacheconf .code .nomarkup,
figure.highlight.apacheconf .code .variable {
    color: #0086b3
}

.codeblock.apacheconf .code .sqbracket,
figure.highlight.apacheconf .code .sqbracket {
    color: #df5000
}

.codeblock.apacheconf .code .section,
.codeblock.apacheconf .code .tag,
figure.highlight.apacheconf .code .section,
figure.highlight.apacheconf .code .tag {
    color: #63a35c
}

.codeblock.bash .code .shebang,
figure.highlight.bash .code .shebang {
    color: #969896
}

.codeblock.bash .code .built_in,
.codeblock.bash .code .literal,
figure.highlight.bash .code .built_in,
figure.highlight.bash .code .literal {
    color: #0086b3
}

.codeblock.bash .code .variable,
figure.highlight.bash .code .variable {
    color: #333
}

.codeblock.bash .code .title,
.codeblock.coffeescript .code .title,
figure.highlight.bash .code .title,
figure.highlight.coffeescript .code .title {
    color: #795da3
}

.codeblock.coffeescript .code .built_in,
.codeblock.coffeescript .code .literal,
.codeblock.coffeescript .code .number,
figure.highlight.coffeescript .code .built_in,
figure.highlight.coffeescript .code .literal,
figure.highlight.coffeescript .code .number {
    color: #0086b3
}

.codeblock.coffeescript .code .attribute,
.codeblock.coffeescript .code .reserved,
figure.highlight.coffeescript .code .attribute,
figure.highlight.coffeescript .code .reserved {
    color: #1d3e81
}

.codeblock.c .code .preprocessor,
.codeblock.coffeescript .code .attribute,
.codeblock.coffeescript .code .regexp,
.codeblock.coffeescript .code .subst,
.codeblock.cpp .code .preprocessor,
figure.highlight.c .code .preprocessor,
figure.highlight.coffeescript .code .attribute,
figure.highlight.coffeescript .code .regexp,
figure.highlight.coffeescript .code .subst,
figure.highlight.cpp .code .preprocessor {
    color: #df5000
}

.codeblock.c .code .meta-keyword,
.codeblock.cpp .code .meta-keyword,
figure.highlight.c .code .meta-keyword,
figure.highlight.cpp .code .meta-keyword {
    color: #a71d5d
}

.codeblock.c .code .title,
.codeblock.cpp .code .title,
figure.highlight.c .code .title,
figure.highlight.cpp .code .title {
    color: #795da3
}

.codeblock.c .code .built_in,
.codeblock.c .code .number,
.codeblock.cpp .code .built_in,
.codeblock.cpp .code .number,
figure.highlight.c .code .built_in,
figure.highlight.c .code .number,
figure.highlight.cpp .code .built_in,
figure.highlight.cpp .code .number {
    color: #0086b3
}

.codeblock.cs .code .preprocessor,
.codeblock.cs .code .preprocessor .keyword,
figure.highlight.cs .code .preprocessor,
figure.highlight.cs .code .preprocessor .keyword {
    color: #333
}

.codeblock.cs .code .title,
figure.highlight.cs .code .title {
    color: #795da3
}

.codeblock.cs .code .built_in,
.codeblock.cs .code .number,
figure.highlight.cs .code .built_in,
figure.highlight.cs .code .number {
    color: #0086b3
}

.codeblock.cs .code .doctag,
.codeblock.cs .code .xmlDocTag,
figure.highlight.cs .code .doctag,
figure.highlight.cs .code .xmlDocTag {
    color: #63a35c
}

.codeblock.css .code .at_rule,
.codeblock.css .code .important,
.codeblock.css .code .meta,
figure.highlight.css .code .at_rule,
figure.highlight.css .code .important,
figure.highlight.css .code .meta {
    color: #a71d5d
}

.codeblock.css .code .attribute,
.codeblock.css .code .function,
.codeblock.css .code .hexcolor,
.codeblock.css .code .number,
figure.highlight.css .code .attribute,
figure.highlight.css .code .function,
figure.highlight.css .code .hexcolor,
figure.highlight.css .code .number {
    color: #0086b3
}

.codeblock.css .code .attr_selector,
.codeblock.css .code .value,
figure.highlight.css .code .attr_selector,
figure.highlight.css .code .value {
    color: #333
}

.codeblock.css .code .class,
.codeblock.css .code .id,
.codeblock.css .code .pseudo,
.codeblock.css .code .selector-pseudo,
figure.highlight.css .code .class,
figure.highlight.css .code .id,
figure.highlight.css .code .pseudo,
figure.highlight.css .code .selector-pseudo {
    color: #795da3
}

.codeblock.css .code .selector-tag,
.codeblock.css .code .tag,
figure.highlight.css .code .selector-tag,
figure.highlight.css .code .tag {
    color: #63a35c
}

.codeblock.diff .code .chunk,
.codeblock.diff .code .meta,
figure.highlight.diff .code .chunk,
figure.highlight.diff .code .meta {
    color: #795da3;
    font-weight: 700
}

.codeblock.diff .code .addition,
figure.highlight.diff .code .addition {
    color: #55a532;
    background-color: #eaffea
}

.codeblock.diff .code .deletion,
figure.highlight.diff .code .deletion {
    color: #bd2c00;
    background-color: #ffecec
}

.codeblock.http .code .attr,
.codeblock.http .code .attribute,
figure.highlight.http .code .attr,
figure.highlight.http .code .attribute {
    color: #183691
}

.codeblock.http .code .literal,
figure.highlight.http .code .literal {
    color: #0086b3
}

.codeblock.http .code .request,
figure.highlight.http .code .request {
    color: #a71d5d
}

.codeblock.ini .code .section,
.codeblock.ini .code .title,
figure.highlight.ini .code .section,
figure.highlight.ini .code .title {
    color: #795da3
}

.codeblock.ini .code .attr,
.codeblock.ini .code .setting,
figure.highlight.ini .code .attr,
figure.highlight.ini .code .setting {
    color: #a71d5d
}

.codeblock.ini .code .keyword,
.codeblock.ini .code .value,
figure.highlight.ini .code .keyword,
figure.highlight.ini .code .value {
    color: #333
}

.codeblock.java .code .title,
figure.highlight.java .code .title {
    color: #795da3
}

.codeblock.java .code .javadoc,
figure.highlight.java .code .javadoc {
    color: #969896
}

.codeblock.java .code .annotation,
.codeblock.java .code .javadoctag,
.codeblock.java .code .meta,
figure.highlight.java .code .annotation,
figure.highlight.java .code .javadoctag,
figure.highlight.java .code .meta {
    color: #a71d5d
}

.codeblock.java .code .number,
figure.highlight.java .code .number {
    color: #0086b3
}

.codeblock.java .code .params,
figure.highlight.java .code .params {
    color: #1d3e81
}

.codeblock.js .code .built_in,
.codeblock.js .code .title,
figure.highlight.js .code .built_in,
figure.highlight.js .code .title {
    color: #795da3
}

.codeblock.js .code .javadoc,
figure.highlight.js .code .javadoc {
    color: #969896
}

.codeblock.js .code .javadoctag,
.codeblock.js .code .tag,
figure.highlight.js .code .javadoctag,
figure.highlight.js .code .tag {
    color: #a71d5d
}

.codeblock.js .code .tag .title,
figure.highlight.js .code .tag .title {
    color: #333
}

.codeblock.js .code .regexp,
figure.highlight.js .code .regexp {
    color: #df5000
}

.codeblock.js .code .literal,
.codeblock.js .code .number,
figure.highlight.js .code .literal,
figure.highlight.js .code .number {
    color: #0086b3
}

.codeblock.json .code .attribute,
figure.highlight.json .code .attribute {
    color: #183691
}

.codeblock.json .code .literal,
.codeblock.json .code .number,
figure.highlight.json .code .literal,
figure.highlight.json .code .number {
    color: #0086b3
}

.codeblock.mak .code .constant,
figure.highlight.mak .code .constant {
    color: #333
}

.codeblock.mak .code .title,
figure.highlight.mak .code .title {
    color: #795da3
}

.codeblock.mak .code .keyword,
.codeblock.mak .code .meta-keyword,
figure.highlight.mak .code .keyword,
figure.highlight.mak .code .meta-keyword {
    color: #0086b3
}

.codeblock.md .code .blockquote,
.codeblock.md .code .emphasis,
.codeblock.md .code .link_label,
.codeblock.md .code .quote,
.codeblock.md .code .section,
.codeblock.md .code .strong,
.codeblock.md .code .value,
figure.highlight.md .code .blockquote,
figure.highlight.md .code .emphasis,
figure.highlight.md .code .link_label,
figure.highlight.md .code .quote,
figure.highlight.md .code .section,
figure.highlight.md .code .strong,
figure.highlight.md .code .value {
    color: #183691
}

.codeblock.md .code .code,
.codeblock.md .code .link_reference,
.codeblock.md .code .symbol,
figure.highlight.md .code .code,
figure.highlight.md .code .link_reference,
figure.highlight.md .code .symbol {
    color: #0086b3
}

.codeblock.md .code .link,
.codeblock.md .code .link_url,
figure.highlight.md .code .link,
figure.highlight.md .code .link_url {
    text-decoration: underline
}

.codeblock.nginx .code .attribute,
.codeblock.nginx .code .title,
figure.highlight.nginx .code .attribute,
figure.highlight.nginx .code .title {
    color: #a71d5d
}

.codeblock.nginx .code .built_in,
.codeblock.nginx .code .literal,
figure.highlight.nginx .code .built_in,
figure.highlight.nginx .code .literal {
    color: #0086b3
}

.codeblock.nginx .code .regexp,
figure.highlight.nginx .code .regexp {
    color: #183691
}

.codeblock.nginx .code .variable,
figure.highlight.nginx .code .variable {
    color: #333
}

.codeblock.objectivec .code .meta,
.codeblock.objectivec .code .preprocessor,
figure.highlight.objectivec .code .meta,
figure.highlight.objectivec .code .preprocessor {
    color: #a71d5d
}

.codeblock.objectivec .code .meta .title,
.codeblock.objectivec .code .preprocessor .title,
figure.highlight.objectivec .code .meta .title,
figure.highlight.objectivec .code .preprocessor .title {
    color: #df5000
}

.codeblock.objectivec .code .meta-string,
figure.highlight.objectivec .code .meta-string {
    color: #183691
}

.codeblock.objectivec .code .title,
figure.highlight.objectivec .code .title {
    color: #795da3
}

.codeblock.objectivec .code .built_in,
.codeblock.objectivec .code .literal,
.codeblock.objectivec .code .number,
figure.highlight.objectivec .code .built_in,
figure.highlight.objectivec .code .literal,
figure.highlight.objectivec .code .number {
    color: #0086b3
}

.codeblock.perl .code .sub,
.codeblock.perl .code .title,
figure.highlight.perl .code .sub,
figure.highlight.perl .code .title {
    color: #795da3
}

.codeblock.perl .code .regexp,
figure.highlight.perl .code .regexp {
    color: #df5000
}

.codeblock.php .code .doctag,
.codeblock.php .code .phpdoc,
figure.highlight.php .code .doctag,
figure.highlight.php .code .phpdoc {
    color: #a71d5d
}

.codeblock.php .code .regexp,
figure.highlight.php .code .regexp {
    color: #df5000
}

.codeblock.php .code .literal,
.codeblock.php .code .number,
figure.highlight.php .code .literal,
figure.highlight.php .code .number {
    color: #0086b3
}

.codeblock.php .code .title,
.codeblock.python .code .decorator,
.codeblock.python .code .meta,
.codeblock.python .code .title,
figure.highlight.php .code .title,
figure.highlight.python .code .decorator,
figure.highlight.python .code .meta,
figure.highlight.python .code .title {
    color: #795da3
}

.codeblock.python .code .number,
figure.highlight.python .code .number {
    color: #0086b3
}

.codeblock.ruby .code .parent,
.codeblock.ruby .code .title,
figure.highlight.ruby .code .parent,
figure.highlight.ruby .code .title {
    color: #795da3
}

.codeblock.ruby .code .constant,
.codeblock.ruby .code .number,
.codeblock.ruby .code .prompt,
.codeblock.ruby .code .subst .keyword,
.codeblock.ruby .code .symbol,
figure.highlight.ruby .code .constant,
figure.highlight.ruby .code .number,
figure.highlight.ruby .code .prompt,
figure.highlight.ruby .code .subst .keyword,
figure.highlight.ruby .code .symbol {
    color: #0086b3
}

.codeblock.sql .built_in,
figure.highlight.sql .built_in {
    color: #a71d5d
}

.codeblock.sql .number,
figure.highlight.sql .number {
    color: #0086b3
}

.codeblock.html .tag,
.codeblock.xml .tag,
figure.highlight.html .tag,
figure.highlight.xml .tag {
    color: #333
}

.codeblock.html .value,
.codeblock.xml .value,
figure.highlight.html .value,
figure.highlight.xml .value {
    color: #183691
}

.codeblock.html .attr,
.codeblock.html .attribute,
.codeblock.xml .attr,
.codeblock.xml .attribute,
figure.highlight.html .attr,
figure.highlight.html .attribute,
figure.highlight.xml .attr,
figure.highlight.xml .attribute {
    color: #795da3
}

.codeblock.html .name,
.codeblock.html .title,
.codeblock.xml .name,
.codeblock.xml .title,
figure.highlight.html .name,
figure.highlight.html .title,
figure.highlight.xml .name,
figure.highlight.xml .title {
    color: #63a35c
}

.codeblock.puppet .title,
figure.highlight.puppet .title {
    color: #795da3
}

.codeblock.puppet .function,
figure.highlight.puppet .function {
    color: #0086b3
}

.codeblock.puppet .name,
figure.highlight.puppet .name {
    color: #a71d5d
}

.codeblock.puppet .attr,
figure.highlight.puppet .attr {
    color: #0086b3
}

.codeblock.less .at_rule,
.codeblock.less .tag,
figure.highlight.less .at_rule,
figure.highlight.less .tag {
    color: #a71d5d
}

.codeblock.less .attribute,
.codeblock.less .function,
.codeblock.less .hexcolor,
.codeblock.less .number,
figure.highlight.less .attribute,
figure.highlight.less .function,
figure.highlight.less .hexcolor,
figure.highlight.less .number {
    color: #0086b3
}

.codeblock.less .built_in,
figure.highlight.less .built_in {
    color: #df5000
}

.codeblock.less .class,
.codeblock.less .id,
.codeblock.less .pseudo,
.codeblock.less .selector-class,
.codeblock.less .selector-id,
.codeblock.less .selector-tag,
figure.highlight.less .class,
figure.highlight.less .id,
figure.highlight.less .pseudo,
figure.highlight.less .selector-class,
figure.highlight.less .selector-id,
figure.highlight.less .selector-tag {
    color: #795da3
}

.codeblock.scss .at_rule,
.codeblock.scss .important,
.codeblock.scss .tag,
figure.highlight.scss .at_rule,
figure.highlight.scss .important,
figure.highlight.scss .tag {
    color: #a71d5d
}

.codeblock.scss .attribute,
.codeblock.scss .function,
.codeblock.scss .hexcolor,
.codeblock.scss .number,
figure.highlight.scss .attribute,
figure.highlight.scss .function,
figure.highlight.scss .hexcolor,
figure.highlight.scss .number {
    color: #0086b3
}

.codeblock.scss .variable,
figure.highlight.scss .variable {
    color: #333
}

.codeblock.scss .built_in,
figure.highlight.scss .built_in {
    color: #df5000
}

.codeblock.scss .class,
.codeblock.scss .id,
.codeblock.scss .preprocessor,
.codeblock.scss .pseudo,
.codeblock.scss .selector-class,
.codeblock.scss .selector-id,
figure.highlight.scss .class,
figure.highlight.scss .id,
figure.highlight.scss .preprocessor,
figure.highlight.scss .pseudo,
figure.highlight.scss .selector-class,
figure.highlight.scss .selector-id {
    color: #795da3
}

.codeblock.scss .selector-tag,
.codeblock.scss .tag,
figure.highlight.scss .selector-tag,
figure.highlight.scss .tag {
    color: #63a35c
}

.codeblock.stylus .at_rule,
figure.highlight.stylus .at_rule {
    color: #a71d5d
}

.codeblock.stylus .selector-tag,
.codeblock.stylus .tag,
figure.highlight.stylus .selector-tag,
figure.highlight.stylus .tag {
    color: #63a35c
}

.codeblock.stylus .attribute,
.codeblock.stylus .hexcolor,
.codeblock.stylus .number,
.codeblock.stylus .params,
figure.highlight.stylus .attribute,
figure.highlight.stylus .hexcolor,
figure.highlight.stylus .number,
figure.highlight.stylus .params {
    color: #0086b3
}

.codeblock.stylus .class,
.codeblock.stylus .id,
.codeblock.stylus .pseudo,
.codeblock.stylus .selector-class,
.codeblock.stylus .selector-id,
.codeblock.stylus .selector-pseudo,
.codeblock.stylus .title,
figure.highlight.stylus .class,
figure.highlight.stylus .id,
figure.highlight.stylus .pseudo,
figure.highlight.stylus .selector-class,
figure.highlight.stylus .selector-id,
figure.highlight.stylus .selector-pseudo,
figure.highlight.stylus .title {
    color: #795da3
}

.codeblock.go .typename,
figure.highlight.go .typename {
    color: #a71d5d
}

.codeblock.go .built_in,
.codeblock.go .constant,
figure.highlight.go .built_in,
figure.highlight.go .constant {
    color: #0086b3
}

.codeblock.swift .preprocessor,
figure.highlight.swift .preprocessor {
    color: #a71d5d
}

.codeblock.swift .title,
figure.highlight.swift .title {
    color: #795da3
}

.codeblock.swift .built_in,
.codeblock.swift .number,
.codeblock.swift .type,
figure.highlight.swift .built_in,
figure.highlight.swift .number,
figure.highlight.swift .type {
    color: #0086b3
}

.codeblock.yml .line .attr,
figure.highlight.yml .line .attr {
    color: #63a35c
}

.codeblock.yml .line,
.codeblock.yml .literal,
.codeblock.yml .meta,
.codeblock.yml .string,
.codeblock.yml .type,
figure.highlight.yml .line,
figure.highlight.yml .literal,
figure.highlight.yml .meta,
figure.highlight.yml .string,
figure.highlight.yml .type {
    color: #183691
}

.codeblock.yml .number,
figure.highlight.yml .number {
    color: #0086b3
}