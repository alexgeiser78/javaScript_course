let lunches = [];

function addLunchToEnd(lunches, string){
lunches.push(string);

 console.log(string + " added to the end of the lunch menu."); 
 return lunches;
}

function addLunchToStart (lunches, string){
lunches.unshift(string);
console.log(string + " added to the start of the lunch menu.");
return lunches; 
}

function removeLastLunch(lunches){
  const removedLunch = lunches.pop();
  if (removedLunch)
    console.log(removedLunch + " removed from the end of the lunch menu.");
  else
    console.log("No lunches to remove.");
  return lunches;
}

function removeFirstLunch(lunches) {
   const removedLunch = lunches.shift();
  if (removedLunch)
    console.log(removedLunch + " removed from the start of the lunch menu.");
  else 
    console.log("No lunches to remove.");
  return lunches; 
}

function getRandomLunch(lunches){
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * lunches.length);
  const randomLunch = lunches[randomIndex];

console.log("Randomly selected lunch: " + randomLunch);

}

function showLunchMenu(lunches){

  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return;
  }

console.log("Menu items: " + lunches.join(", "));
}

addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi"); 
removeLastLunch(lunches);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
getRandomLunch(lunches);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);