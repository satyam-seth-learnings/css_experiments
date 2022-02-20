const planDetailsContainer=document.getElementById("plan-details-container");
const emptySection=document.getElementById("empty");
const planNumber=document.getElementById("plan-no");
const planDetailsBtns=document.querySelectorAll(".see-details");
planDetailsBtns.forEach(planDetailsBtn => {
    planDetailsBtn.addEventListener('click', event => {
        const currentPlanNumber=planDetailsBtn.getAttribute("plan-no");
        planNumber.innerText=currentPlanNumber;
        planDetailsContainer.classList.add("active");
    })
})
emptySection.addEventListener('click', event => {
    planDetailsContainer.classList.remove("active");
}); 