(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4900:function(e,t,r){Promise.resolve().then(r.bind(r,7232))},7232:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var i=r(7437),s=r(2265),n=r(6648),o=r(7138);let c=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(/Mobi|Android/i.test(navigator.userAgent))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e};var l={src:"/_next/static/media/twitter.429b53ca.svg",height:31,width:37,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/telegram.5ad273dc.svg",height:48,width:48,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/pause.de002984.svg",height:24,width:24,blurWidth:0,blurHeight:0},h={src:"/_next/static/media/play.6a7828e0.svg",height:24,width:24,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/shit-icon.f84b9e72.png",height:68,width:68,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42k3KvUsCARzG8e/hVPQGV+BBUy7lYEhCUhi1tAhCEJ2zNEgmYdcrhOZ0QwWHkkWRRYqDIIe7jv5BboonPxVU/MCzPM/DmMLYtqrooKzM9N7p6N1wR8zDJbkJLpcAyieai+I6LoBNuDV9SHEfed6iDR4PE2HI/ufvpPabdeyK2a3mDInBFxMPGo2flC6F1Gnv+z7a/zPOxFighft4Ht23GHsL4lj6Uc9+TTj2y4WTix508ntIPDCX4Wp31foMIe/JiDTrljSGKSTC8hEaHdbSAGo8oF5fQsYPTzvDJCF97lcfAW0AFxFLUW31Yh0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/dextools-logo.b2cf3f53.png",height:300,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAbElEQVR42iXKoQ6CYBhG4bcavSCbG9UrcHNGO8FhNFmck0YjEQhUNho07oSN+p72sX+cdMKjFB+C376F/zzJufIgl4OZRvKBlZA7iRO9wxMXOWMgGDlLbhNeOEqumRJ+cyfjxouKQilKgq8kbVRCRXobFahTAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8};function f(){c();let e=(0,s.useRef)(null),t=(0,s.useRef)(null),r=(0,s.useRef)(null),[f,b]=(0,s.useState)(!1),[A,g]=(0,s.useState)(!0),[m,x]=(0,s.useState)(!1);return(0,i.jsxs)("main",{className:"w-full min-h-screen relative overflow-auto ".concat(m?"animate-buzz":""),children:[A&&(0,i.jsx)("div",{className:"flex items-center justify-center absolute inset-0 bg-opacity-80 backdrop-blur-md z-50 bg-black",children:(0,i.jsx)("button",{className:"px-8 py-3 rounded-[30px] hover:bg-white transition-colors bg-gray",onClick:()=>{g(!1),e.current&&e.current.play(),t.current&&(t.current.play(),b(!0))},children:(0,i.jsx)("span",{className:"text-xl font-semibold text-black",children:"Enter"})})}),(0,i.jsx)("header",{className:"w-full flex flex-row items-center justify-end px-4 pt-4 sm:px-8 sm:pt-8 sticky top-0 z-10",children:(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center gap-8",children:[(0,i.jsx)("button",{onClick:()=>{t.current&&(f?t.current.pause():t.current.play(),b(!f))},children:(0,i.jsx)(n.default,{src:f?u:h,alt:f?"Pause music":"Play music",width:37,height:31,priority:!0})}),(0,i.jsx)(o.default,{href:"https://x.com/shitcoin",rel:"noopener noreferrer",target:"_blank",children:(0,i.jsx)(n.default,{src:l,alt:"twitter-icon",width:37,height:31,priority:!0})}),(0,i.jsx)(o.default,{href:"https://t.me/shitcoin",rel:"noopener noreferrer",target:"_blank",children:(0,i.jsx)(n.default,{src:a,alt:"telegram-icon",width:48,height:48,priority:!0})}),(0,i.jsx)(o.default,{href:"https://app.shitcoin.co/",onClick:i=>{i.preventDefault(),x(!0),e.current&&e.current.pause(),t.current&&t.current.pause(),r.current&&(r.current.currentTime=0,r.current.play()),setTimeout(()=>{window.location.href="https://app.shitcoin.co/"},1e3),setTimeout(()=>{x(!1),r.current&&r.current.pause(),e.current&&e.current.play(),t.current&&t.current.play()},1500)},children:(0,i.jsx)(n.default,{src:d,alt:"shit-icon",width:48,height:48,priority:!0})}),(0,i.jsx)(o.default,{href:"https://www.dextools.io/app/en/solana/pair-explorer/5ZRGotmnv4mRHANeGC77YLu5vhJyu7M8HJ5SaLC38rR2",rel:"noopener noreferrer",target:"_blank",children:(0,i.jsx)(n.default,{src:p,alt:"dexTools-icon",width:48,height:48,priority:!0})})]})}),(0,i.jsxs)("video",{className:"w-full h-full absolute inset-0 -z-10 object-cover ".concat(m?"hidden":"block"),ref:e,muted:!0,playsInline:!0,loop:!0,preload:"auto",children:[(0,i.jsx)("source",{src:"https://cdn.shitcoin.co/shitcoin-co-background-video-v2.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,i.jsxs)("audio",{ref:t,loop:!0,children:[(0,i.jsx)("source",{src:"https://cdn.shitcoin.co/shitcoin-co-backgroud-music-v2.mp3",type:"audio/mp3"}),"Your browser does not support the audio element."]}),(0,i.jsxs)("video",{className:"w-full h-full absolute inset-0 object-cover z-50 ".concat(m?"block":"hidden"),ref:r,playsInline:!0,loop:!0,preload:"auto",children:[(0,i.jsx)("source",{src:"https://cdn.shitcoin.co/shitcoin-channel-change-transition.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})]})}}},function(e){e.O(0,[974,971,23,744],function(){return e(e.s=4900)}),_N_E=e.O()}]);