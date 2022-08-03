let seats = document.getElementById('seats');

let i = 0;
let seatNo=1;
while (i<10){
   // console.log("hello"+seatNo++);
    seats.innerHTML += `
    <div class="seats_no d-flex align-items-center justify-content-between my-2" >                 
        <div class="seat_no_box">
            <a class="bg-gray text-decoration-none seat-box" id="">${seatNo++}</a>
            <a class="bg-gray text-decoration-none seat-box" id="">${seatNo++}</a>
        </div>
         <div class="seat_no_box">
            <a class="bg-gray text-decoration-none seat-box" id="">${seatNo++}</a>
            <a class="bg-gray text-decoration-none seat-box" id="">${seatNo++}</a>
        </div>
    </div>
    `;
    i++;
}
