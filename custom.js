const planDetailsContainer=document.getElementById("plan-details-container");
const planDetailsBtns=document.querySelectorAll(".see-details");
planDetailsBtns.forEach(planDetailsBtn => {
    planDetailsBtn.addEventListener('click', event => {
        console.log(event.target.parents)
        planDetailsContainer.classList.add("active");
    })
})
document.addEventListener('click', function(event) {
//     if (!planDetailsContainer.contains(event.target))
    if(event.target.id!=="plan-details-container" && event.target.id!=="plan-id")
        planDetailsContainer.classList.remove("active");

}); 