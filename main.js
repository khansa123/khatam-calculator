function calculateDays () {

    const totalPages = 604;
    const inputValue = document.getElementById("number").value;


    const answer = totalPages/inputValue;
    document.getElementById("results").innerHTML = answer;
}

function calculatePages() {

        const totalDays = 604;
        const inputDays = document.getElementById("days").value;
    
    
        const answer = totalDays/inputDays;
        document.getElementById("results2").innerHTML = answer;
    
}

