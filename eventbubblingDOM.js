// document.querySelector('.outer').addEventListener('click', function(e){
//     // e represents the event (element that has been clicked)
// console.log(e.target, e.currentTarget);
// //inner, outer
// })

document.querySelector('.outer').addEventListener('click', function removeItem(e){
    function removeItem(e){
        console.log(222);
        e.target.removeChild('div');
    }
})