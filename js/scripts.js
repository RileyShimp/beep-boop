function beepBoop(input) {
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?")
    } else if (i.toString().includes("2")) {
      outputArray.push("Boop!")
    } else if (i.toString().includes("1")) {
      outputArray.push("Beep!")
    } else {
    outputArray.push(i)
    }
  }
  return outputArray;
}

function beepBoopReverse(input) {
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes("3")) {
      outputArray.unshift("Won't you be my neighbor?")
    } else if (i.toString().includes("2")) {
      outputArray.unshift("Boop!")
    } else if (i.toString().includes("1")) {
      outputArray.unshift("Beep!")
    } else {
    outputArray.unshift(i)
    }
  }
  return outputArray;
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const inputNumber = $("input#inputNumber").val();
    const robogerResponse = beepBoop(inputNumber);
    $("#response").text(robogerResponse);
    $(".responseBox").fadeIn()
  })
});