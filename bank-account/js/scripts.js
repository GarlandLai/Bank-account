// Business Logic //

function BankAccount(name, balance) {
  this.name = name,
  this.balance = balance
}

BankAccount.prototype.deposit = function () {
  return this.balance + depositAmount
}

BankAccount.prototype.withdraw = function () {
  return this.balance + withdrawAmount
}


// User Interface //

$(document).ready(function() {
  $(".bankForm").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name1").val();
  });
});
