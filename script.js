const result = () => {
const today = new Date();
const yearBorn = document.getElementById("year").value;
const monthBorn = document.getElementById("month").value;
const dayBorn = document.getElementById("day").value;

const ageYear = document.getElementById("years");
const ageMonth = document.getElementById("months");
const ageDay = document.getElementById("days");

    let yearString = today.getFullYear() - yearBorn
    let monthString = (today.getMonth() + 1) - monthBorn
    let dayString = today.getDate() - dayBorn

    if ((today.getMonth() + 1) < monthBorn) {
        yearString = yearString - 1
        monthString = monthString + 12
    }
    ageYear.innerText = yearString
    ageMonth.innerText = monthString 
    ageDay.innerText = dayString
}


