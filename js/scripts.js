

function beepBoop(input) {
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor?")
    } else if (i === 2) {
      outputArray.push("Boop!")
    } else {
    outputArray.push(i)
    }
  }
  return outputArray;
}