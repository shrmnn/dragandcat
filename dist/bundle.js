(()=>{const e=document.querySelector(".element-grid"),t=document.querySelector(".element-hoop"),o=document.querySelector(".element-spawner");let n,r;const l=e=>{e.preventDefault(),n=e.target,n.classList.add("_absolute"),n.classList.add("_hold"),a(n,e),document.addEventListener("pointermove",s),n.addEventListener("pointerup",c),n.ondragstart=()=>!1},s=e=>{e.preventDefault(),n.parentNode===t?a(n,e,{x:t.offsetLeft,y:t.offsetTop}):a(n,e)},c=l=>{l.preventDefault(),document.removeEventListener("pointermove",s),n.removeEventListener("pointerup",c),n.classList.remove("_hold"),[r]=document.elementsFromPoint(l.clientX,l.clientY).filter((o=>[e,t].includes(o))),r===e&&(function(e){e.classList.remove("_absolute"),e.style.left="0",e.style.top="0"}(n),d(n)),r===t&&(function(e,t){(e.offsetX<0||e.offsetY<0)&&e.parentNode.removeChild(e),a(e,t,{x:r.offsetLeft,y:r.offsetTop})}(n,l),d(n)),r&&"undefined"!==r||function(e){e.parentNode.removeChild(e),o.childElementCount<=0&&i()}(n)};function d(e){r.append(e),o.childElementCount<=0&&i()}function a(e,t,o={x:0,y:0}){e.style.left=t.pageX-o.x-50+"px",e.style.top=t.pageY-o.y-50+"px"}function i(){const e=document.createElement("div");e.className="cat",e.style.outlineColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,u(e),e.addEventListener("pointerdown",l),o.append(e)}const u=e=>{fetch("https://loremflickr.com/500/500/cat").then((t=>e.style.backgroundImage=`url(${t.url})`)).catch((e=>console.error(e)))};i()})();