import{bI as e,ab as n,R as t}from"./vendor.7c679a32.js";function r(r,s=150,i){let o=()=>{r()};const a=t(o,s);o=a;const d=()=>{i&&i.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o)};return e((()=>{d()})),n((()=>{m()})),[d,m]}export{r as u};