
// Arcade dentaire avec attaches, dessinée le long d'une parabole
(function(){
  const g=document.getElementById('teeth'); if(!g) return;
  const ns='http://www.w3.org/2000/svg';
  const n=12, cx=200, top=118, w=230, depth=170;
  const pts=[];
  for(let i=0;i<n;i++){
    const t=(i/(n-1))*2-1;                // -1 .. 1
    const x=cx+t*w/2*1.05;
    const y=top+depth*(t*t);              // parabole ouverte vers le bas de l'image
    pts.push([x,y,t]);
  }
  // arc (fil)
  const wire=document.createElementNS(ns,'path');
  wire.setAttribute('d','M'+pts.map(p=>p[0].toFixed(1)+' '+(p[1]+2).toFixed(1)).join(' L'));
  wire.setAttribute('fill','none'); wire.setAttribute('stroke','var(--accent)'); wire.setAttribute('stroke-width','3');
  pts.forEach((p,i)=>{
    const size=26-Math.abs(p[2])*6;
    const ang=Math.atan2(2*depth*p[2]/(w/2*1.05), 1)*180/Math.PI*0.5;
    const tooth=document.createElementNS(ns,'rect');
    tooth.setAttribute('x',(p[0]-size/2).toFixed(1)); tooth.setAttribute('y',(p[1]-size*0.9).toFixed(1));
    tooth.setAttribute('width',size.toFixed(1)); tooth.setAttribute('height',(size*1.5).toFixed(1));
    tooth.setAttribute('rx',(size*0.42).toFixed(1));
    tooth.setAttribute('fill','var(--surface)'); tooth.setAttribute('stroke','var(--line)'); tooth.setAttribute('stroke-width','2');
    tooth.setAttribute('transform','rotate('+ang.toFixed(1)+' '+p[0].toFixed(1)+' '+p[1].toFixed(1)+')');
    g.appendChild(tooth);
  });
  g.appendChild(wire);
  pts.forEach((p,i)=>{
    const b=document.createElementNS(ns,'rect');
    b.setAttribute('x',(p[0]-5).toFixed(1)); b.setAttribute('y',(p[1]-3).toFixed(1));
    b.setAttribute('width','10'); b.setAttribute('height','10'); b.setAttribute('rx','2');
    b.setAttribute('fill','var(--warm)'); b.setAttribute('class','bracket');
    b.style.transformOrigin=p[0].toFixed(1)+'px '+(p[1]+2).toFixed(1)+'px';
    b.style.animationDelay=(i*60)+'ms';
    g.appendChild(b);
  });
  // légende
  const lab=document.createElementNS(ns,'text');
  lab.setAttribute('x','200'); lab.setAttribute('y','340'); lab.setAttribute('text-anchor','middle');
  lab.setAttribute('fill','var(--muted)'); lab.setAttribute('font-size','15'); lab.setAttribute('font-family','Figtree, sans-serif');
  lab.textContent='Photo du cabinet à venir';
  g.appendChild(lab);
})();
