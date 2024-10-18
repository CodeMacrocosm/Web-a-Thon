document.addEventListener("DOMContentLoaded", function () {
  const ageInput = document.getElementById("age");
  const incomeInput = document.getElementById("income");
  const extraIncomeInput = document.getElementById("extraIncome");
  const deductionsInput = document.getElementById("deductions");
  const submitBtn = document.getElementById("submitBtn");
  const modal = document.getElementById("modal");
  const taxResult = document.getElementById("taxResult");

  const ageError = document.getElementById("ageError");
  const incomeError = document.getElementById("incomeError");
  const extraIncomeError = document.getElementById("extraIncomeError");
  const deductionsError = document.getElementById("deductionsError");

  submitBtn.addEventListener("click", function () {
    const age = ageInput.value;
    const income = parseFloat(incomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value) || 0;
    const deductions = parseFloat(deductionsInput.value) || 0;

    let error = false;

    // Validate inputs
    if (!age) {
      ageError.style.display = "inline";
      error = true;
    } else {
      ageError.style.display = "none";
    }

    if (isNaN(income)) {
      incomeError.style.display = "inline";
      error = true;
    } else {
      incomeError.style.display = "none";
    }

    if (isNaN(extraIncome)) {
      extraIncomeError.style.display = "inline";
      error = true;
    } else {
      extraIncomeError.style.display = "none";
    }

    if (isNaN(deductions)) {
      deductionsError.style.display = "inline";
      error = true;
    } else {
      deductionsError.style.display = "none";
    }

    if (error) {
      return;
    }

    // Calculate tax
    let tax = 0;
    const taxableIncome = income + extraIncome - deductions;
    if (taxableIncome > 800000) {
      if (age === "<40") {
        tax = 0.3 * (taxableIncome - 800000);
      } else if (age === "≥40 & <60") {
        tax = 0.4 * (taxableIncome - 800000);
      } else {
        tax = 0.1 * (taxableIncome - 800000);
      }
    }

    // Display result
    taxResult.textContent = `Tax to be paid: ₹${tax.toFixed(2)}`;
    modal.style.display = "block";
  });

  // Close modal when the close button is clicked
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", function () {
      modal.style.display = "none";
    });

  // Close modal when clicked outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
