function calculer() {
  let d1 = document.getElementById('date').value;
  let m1 = document.getElementById('month').value;
  let y1 = document.getElementById('year').value;

  // new date
  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
//  Tableau pour stocker le nombre de jours dans chaque mois de l'année.
  var month = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

//   Il y a deux conditions qui ajustent d2 et m2 si le jour ou le mois actuel est inférieur à 
// celui saisi par l'utilisateur.
//  Cela garantit que les calculs de différence se font correctement 
// même si la date actuelle est antérieure à la date saisie par l'utilisateur.
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  document.getElementById('annee').innerHTML = y;
  document.getElementById('mois').innerHTML = m;
  document.getElementById('jour').innerHTML = d;
}
