//Using a for loop to return messages in an array
let messagesArray = [];
const namesArray = ["Mercy", "Faith", "Brenda"];
let eventName;

function writeCards(
  namesArray = ["Mercy", "Faith", "Brenda"],
  eventName = "birthday"
) {
  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;

    messagesArray.push(message);
  }
  return messagesArray;
}

//Using while loop to create a count down.
function countDown(number) {
  let i = number;
  while (i <= number && i >= 0) {
    console.log(i);
    i--;
  }
}
countDown();
