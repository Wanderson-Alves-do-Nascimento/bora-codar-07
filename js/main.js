const cards = document.querySelectorAll('.card');
const searchElement = document.getElementById('name');

searchElement.addEventListener(
  'input', filterElements);

function filterElements(){
  if(filterElements.value !==''){
    for(let card of cards){
      let title = card.querySelector('h3');
      title = title.textContent.toLocaleLowerCase();

      let filterText = searchElement.value.toLocaleLowerCase();
      
      if(!title.includes(filterText)){
        card.style.display = "none";
      }else{
        card.style.display = "block"
      }
    }
  }else{
    for(let card of cards){
      card.style.display = "block"
    }   
  }
}

const locations = document.querySelectorAll('.location');
const locationList = document.getElementById('city');
locationList.addEventListener('change', selectLocation)

function selectLocation (){
  let selectedOption = locationList.options[locationList.selectedIndex];
  let selectedText = selectedOption.text
  
  if(locationList.selectedIndex > 0){
    for(card of cards){
      let locations = card.querySelector('.location');
      let locationsText= locations.innerText
      if(!locationsText.includes(selectedText)){
        card.style.display = "none";
      }else{
        card.style.display = "block";
      }
    }
  }else{
    for(card of cards){
      card.style.display = "block";
    }
  }
}