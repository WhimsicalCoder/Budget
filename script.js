document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalBudget = parseFloat(document.getElementById('total-budget').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    if (startDate > endDate) {
        alert("End date must be after start date.");
        return;
    }

    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    const dailyBudget = totalBudget / totalDays;

    document.getElementById('daily-budget').innerText = dailyBudget.toFixed(2);
});
