
fetch('https://year-vercel-backend.vercel.app/year')
 .then(response => response.json())
 .then(data => {
  console.log(data);
  document.querySelector('#year').textContent = data.year;
 });