// Menus : fermeture au clic extérieur et après un choix
document.querySelectorAll('.burger nav a, .dd-menu a').forEach(a=>a.addEventListener('click',()=>a.closest('details').open=false));
document.addEventListener('click',e=>{document.querySelectorAll('details.dd[open], details.burger[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('details.dd[open], details.burger[open]').forEach(d=>d.open=false);});
