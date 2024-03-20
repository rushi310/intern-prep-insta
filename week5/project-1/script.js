// Fetch data from the API
fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Check if the 'places' key exists in the data object
    if (!data || !data.places || !Array.isArray(data.places) || data.places.length === 0) {
      throw new Error('Data format is not as expected');
    }
    
    const citiesTable = document.getElementById('citiesTable');
    const tbody = citiesTable.getElementsByTagName('tbody')[0];
    
    // Loop through each city in the 'places' array and create a row in the table
    data.places.forEach(city => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${city.city}</td>
        <td>${city.state}</td>
        <td>${city.population}</td>
        <td>${city.area}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    const container = document.querySelector('.container');
    container.innerHTML = '<h1>Error fetching data. Please try again later.</h1>';
  });
