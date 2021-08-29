let appear = [
    ".header-main-text", ".header-main-btn" ]

let up = [
    ".navbar-title", ".hamburger-btn", ".navbar-links" ]

let down = [
    ".header-nav-container", ".header-mail-container" ]

let left = [
    ".expertise-container > .expertise-item:nth-of-type(2n+1)" ]

let right = [
    ".expertise-container > .expertise-item:nth-of-type(2n)" ]

gsap.from(appear, {opacity: 0, duration: 0.5});
gsap.from(up, {y: "-50vh", duration: 0.5});
gsap.from(down, {y: "50vh", duration: 0.5});