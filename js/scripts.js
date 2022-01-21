// Business Logic

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

  // UI Logic

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const input = $("input#inputNumber").val()
    const robogerResponse = beepBoop(input);
    $("#response").text(robogerResponse);
})
});