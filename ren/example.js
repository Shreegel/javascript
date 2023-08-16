function printHello(){
    var a=2;
    var b=3;
    const bookingArray=['Booking1','Booking2','Booking3',6];
    const bookingArrayElement= bookingArray[2];
    const newBookingArray=[];

    bookingArray.push('Booking4');
    bookingArray.push('Booking5');

    bookingArray.forEach((data)=> newBookingArray.push(data));
    const join=newBookingArray.join("| ");

    document.getElementById('array').innerHTML=join;
    document.getElementById('arrayElement').innerHTML="This is the third element<br>"+bookingArrayElement;
} 