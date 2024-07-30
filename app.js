/*
  CSS Theme for Messenger by LyzzCL
  Plan to edit this or make your own theme?
  I recommend using these extensions for VSCode:
    Better Comments: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
    es6-string-html: https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
*/

// Function to hide left sidebar with CTRL + Q
window.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code === 'KeyQ') {
      const element = document.querySelector("html > body > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)");

      element.style.display = (element.style.display !== "none") ? "none" : "block";
  }
});

// Add styles to site
const addCustomStyle = (css) => (document.head.appendChild(document.createElement("style")).innerHTML = css);

// General UI changes
addCustomStyle(/*css*/ `
  /* Hiddes main scrollbar */
  ._9dls {
    overflow-y: hidden !important;
  }

  /* Max height of all containers */
  .x1bc3s5a {
    max-height: 100vh;
  }

  /* //* Main Container */
  html > body > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(1) {
    margin: 0;
    padding: 0;

    /* Remove Chatlist margin and rounded corners */
    > div:nth-of-type(2) {
      margin: 0;
      border-radius: 0;
    }

    /* Remove Chatbox margin, rounded corners and shadow */
    > div:nth-of-type(3) > div > div > div > div > div > div > div {
      margin: 0;
      border-radius: 0;
      box-shadow: none;
    }

    /* //TODO: Add this as an option */
    /* Remove communites list */
    > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) {
      display: none;
    }
      
    /* Add paddings and margins to left sidebar */
    > div:nth-of-type(1) {
      padding-block: 8px;
      padding-inline: 6px;

      > div > div:nth-of-type(1) > div > div > div > div > div:nth-of-type(1) > div > span {
        margin-bottom: 6px;
      }
    }
  }
`);

//Chatlist changes
addCustomStyle(/*css*/ `
  /* Users images borders */
  .xww2gxu, .xudhj91, .x18nykt9, .x14yjl9h {
    border-radius: 4px;
  }

  /* //* Chatlist Container */
  html > body > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div {

    /* Remove chats title */
    > div:nth-of-type(1) {
      display: none;
    }

    /* Remove the download for windows button */
    > div:nth-last-child(1) {
      display: none;
    }

    /* Reduce Search bar borders */
    > div:nth-of-type(2) > div > div > div > div > div > div {
      border-radius: 4px;
    }
    
    /* Fix search bar padding */
    > div:nth-of-type(2) {
      padding-top: 12px;
    }

    /* Padding and margins of users */
    > div:nth-last-child(2) > div > div > div > div > div > div:nth-of-type(2) > div > div > div > div > div > div > a {
      border-radius: 4px;
      margin-bottom: 6px;
  
      > div {
        padding-block: 6px;
        padding-inline: 8px;
      }
    }
  }

  /* //! Add experimental here */

  
`);



// /* //! Experimental, compact chatlist [START] */
// html > body > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) {
//   width: auto;

//   /* Removes search bar */
//   > div > div:nth-of-type(2) {
//     display: none;
//   }

//   > div > div:nth-last-child(2) > div > div > div > div > div > div:nth-of-type(2) > div {
    
//     /* Adds margin top to first element */
//     > div:nth-of-type(1) {
//       margin-top: 8px;
//     }

//     /* Shrink each element of the list [START] */
//     > div {
//       width: fit-content;
//     }

//     > div > div > div > div > div:nth-of-type(1) > a > div > div > div {
//       > div:nth-of-type(1) > div {
//         padding: 0;
//       }

//       > div:nth-of-type(n+2) {
//         display: none;
//       }
//     }
//     /* Shrink each element of the list [END] */

//     /* Moves the user management menu*/
//     > div > div > div > div > div:nth-of-type(2) > div > div > div > div {
//       width: 24px;
//       height: 24px;
//       border-radius: 4px;
//       position: absolute;
//       bottom: 0;
//     }

//     > div:nth-last-child(-n+2) {
//       display: none;
//     }
//   }
// }
// /* //! Experimental, compact chatlist [END] */



// Chatbox changes
addCustomStyle(/*css*/`
  /* Remove fillers on chat title */
  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1cy8zhl.x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xj9xw9b > div:nth-of-type(n+2) {
    display: none;
  }

  /* Reduce rounded corners on textbox */
  html > body > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(4) > div:nth-of-type(2) {
    border-radius: 4px;
  }

  /* Changing order so all messages stay on left */
  /* TODO: Implement option to moving messages to a desired site */
  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1h91t0o.xkh2ocl.x78zum5.xdt5ytf.x13a6bvl.x193iq5w.x1iyjqo2.x1eb86dx {
    display: none;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x15zctf7 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x1eb86dx.x78zum5.x1c4vz4f.x2lah0s.x9q6w0x.xfzia1k{
    order: 4;
    width: 46px;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x15zctf7 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xeuugli.x1vjfegm {
    margin-right: auto;
    order: 3;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x15zctf7 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.xkhd6sd.x1eb86dx.x78zum5.x1c4vz4f.x2lah0s.x9q6w0x.xd5rl1{
    order: 2;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x15zctf7 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1eb86dx.x1r8uery.x1iyjqo2 {
    order: 1;
  }

  /* Reduce borders from messages */
  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x11jlvup.xpmdkuv.x154zaqr.x12z03op.xyhp3ou.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x12lizq0.xf766zg.x1ybe9c6.x1ts5dru.xp5s12f.x11ucwad.xgtuqic.x155c047, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x1xr0vuk.x1jm4cbz.x1lmq8lz.xrrpcnn.x1xtl47e.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x19livfd.x2t687o.x3p3xfz.x5od304.xp5s12f.x11ucwad.xgtuqic.x155c047, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x1xr0vuk.x1jm4cbz.x1lmq8lz.xrrpcnn.x1xtl47e.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x19livfd.x2t687o.x3p3xfz.x5od304.x11ucwad.xgtuqic.x1lcm9me.x10y3i5r, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x1xr0vuk.x1jm4cbz.x1lmq8lz.xrrpcnn.x1xtl47e.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x19livfd.x2t687o.x3p3xfz.x5od304.x11ucwad.xgtuqic.x155c047.x1lcm9me, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x11jlvup.xpmdkuv.x154zaqr.x12z03op.xyhp3ou.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x12lizq0.xf766zg.x1ybe9c6.x1ts5dru.xp5s12f.xgtuqic.x155c047.x1yr5g0i, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x1xr0vuk.x1jm4cbz.x1lmq8lz.xrrpcnn.x1xtl47e.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x19livfd.x2t687o.x3p3xfz.x5od304.x1ucz5p.xp5s12f.x11ucwad.xgtuqic.x155c047, div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x14ctfv.x1okitfd.x1k4qllp.x6ikm8r.x10wlt62.xerhiuh.x1pn3fxy.x12xxe5f.x1szedp3.x1n2onr6.x1vjfegm.x1mzt3pk.x13faqbe.x1xr0vuk.x1jm4cbz.x1lmq8lz.xrrpcnn.x1xtl47e.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x19livfd.x2t687o.x3p3xfz.x5od304.xp5s12f.x11ucwad.xgtuqic.x10y3i5r {
    max-width: fit-content;
    border-radius: 8px;
  }

  /* Messages dates aligned to left */
  div.html-div.xe8uvvx.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x1ekjcvx.x2b8uid.x13faqbe{
    margin-left: 26px;
  }

  div.xjpr12u.xr9ek0c.x2b8uid {
    text-align: left;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xyamay9.x1l90r2v.x5ib6vp.xc73u3c {
    padding-bottom: 6px;
  }

  /* Seen moved to left */
  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.xkhd6sd.x78zum5.x1120s5i.x1eb86dx > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1r8uery.x1iyjqo2 {
    order: 2;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.xkhd6sd.x78zum5.x1120s5i.x1eb86dx > div.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.xe8uvvx.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x78zum5.x2lah0s.x1mh8g0r.xpdqn1h.x1gslohp {
    order: 1;
    margin-left: 46px;
  }

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x13a6bvl.x1eb86dx > div.html-div.xe8uvvx.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1jfb8zj.xod5an3.xpdqn1h.x1gslohp {
    margin-right: auto;
    margin-left: 46px;
  }

  /* OPTIONALLY REMOVE SEEN STATUS, COMMENT/UNCOMMENT FROM HERE UNTIL COMMENTED BARS */
  /* TODO: Add this as an option */

  /*
  div.x78zum5.xdt5ytf.x1n2onr6 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x13a6bvl.x1eb86dx {
    display: none;
  }
  */

  /////////////////////////////////////////////////////////////////////////

  /* Seen images borders reduced */
  img.xz74otr.x1rcc7c0.xbtbmw4.x1lie4ck.x16hxpj1.x1v9usgg.x19um543.x1m6msm.xxymvpz.x6jxa94, img.html-img.xuw900x.x193iq5w.x1rcc7c0.xbtbmw4.x1lie4ck.x16hxpj1.x1v9usgg.xl1xv1r.x87ps6o.x11njtxf.x6jxa94 {
    border-radius: 4px;
  }

  /* Sender image borders reduced */
  img.x1rg5ohu.x5yr21d.xl1xv1r.xh8yej3 {
    border-radius: 4px !important;
  }

  /* User arrow helper */
  /* TODO: Add these as an option */

  /* FOR OTHER USERS */
  /*
  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.xkhd6sd.x1eb86dx.x78zum5.x1c4vz4f.x2lah0s.x9q6w0x.xd5rl1 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.xpvyfi4 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x18d9i69.x1h91t0o.xkh2ocl.x78zum5.xdt5ytf.x13a6bvl.x193iq5w.x1c4vz4f.x1eb86dx.x1sxyh0.x1nvil2r > div.xgd8bvy::before {
    content: ">";
    color: #DF2E38;
    position: absolute;
    text-align: center;
    top: 8px;
    font-weight: 700;
    font-size: large;
    text-wrap: nowrap;
    z-index: 1;
    width: inherit;
  }
  
  img.x1rg5ohu.x5yr21d.xl1xv1r.xh8yej3 {
    z-index: 2;
  }
  */

  /* FOR YOUR OWN MESSAGES */

  div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x78zum5.x15zctf7 > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x1eb86dx.x78zum5.x1c4vz4f.x2lah0s.x9q6w0x.xfzia1k::before {
    content: "|";
    color: var(--mwp-primary-theme-color);
    text-align: right;
    align-content: center;
    font-weight: 800;
    font-size: large;
    text-wrap: nowrap;
    width: inherit;
    height: 100%;
  }
  `);
