function task(event) {
    event.preventDefault(); 

    let age = document.getElementById("age").value;
    let gender = document.querySelector("input[name='gender']:checked")?.value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let heightInMeters = height / 100;
    let a = weight / (heightInMeters * heightInMeters);
    a = a.toFixed(2);

    let bmi = `Your BMI is ${a}. `;
    if (a < 18.5) {
        bmi += "You are Underweight.";
    } else if (a >= 18.5 && a < 25) {
        bmi += "You are Normal.";
    } else if (a >= 25 && a < 30) {
        bmi += "You are Overweight.";
    } else {
        bmi += "You are Obese.";
    }

    document.getElementById("result").innerText = bmi;

    let arr = JSON.parse(localStorage.getItem("task")) || [];
    let datas = { age, gender, weight, height, bmi: a };
    arr.push(datas);
    localStorage.setItem("task", JSON.stringify(arr));
}