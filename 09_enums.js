var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["aisle"] = 0] = "aisle";
    SeatChoice[SeatChoice["middle"] = 1] = "middle";
    SeatChoice[SeatChoice["window"] = 2] = "window";
})(SeatChoice || (SeatChoice = {}));
// enum SeatChoice { // by-default it gives a numbering value
//     aisle = 10, // if given number-value to anyone, then by-default it gives number accordingly after
//     middle,
//     window
// }
// enum SeatChoice { // by-default it gives a numbering value
//     aisle, 
//     middle = '10', // if given string-value to anyone, then give value to all after-that
//     window
// }
var userSeat = SeatChoice.aisle;
// what this generats for js
var PaymentMode;
(function (PaymentMode) {
    PaymentMode[PaymentMode["cash"] = 0] = "cash";
    PaymentMode[PaymentMode["upi"] = 1] = "upi";
    PaymentMode[PaymentMode["debit_card"] = 2] = "debit_card";
    PaymentMode[PaymentMode["credit_card"] = 3] = "credit_card";
    PaymentMode[PaymentMode["net_banking"] = 4] = "net_banking";
})(PaymentMode || (PaymentMode = {}));
var userPaymentMode = PaymentMode.cash;
var myTransactionMode = 0 /* TransactionMode.cash */;
