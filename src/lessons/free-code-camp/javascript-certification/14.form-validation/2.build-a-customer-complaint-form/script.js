const form = document.getElementById("form");

const validateForm = () => {
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const orderNo = document.getElementById("order-no").value.trim();
  const productCode = document.getElementById("product-code").value.trim();
  const quantity = document.getElementById("quantity").value;

  const checkedComplaints = document.querySelectorAll("#complaints-group input[type=\"checkbox\"]:checked");
  const otherComplaintChecked = document.getElementById("other-complaint").checked;
  const complaintDescription = document.getElementById("complaint-description").value.trim();

  const selectedSolution = document.querySelector("#solutions-group input[type=\"radio\"]:checked");
  const otherSolutionSelected = document.getElementById("other-solution").checked;
  const solutionDescription = document.getElementById("solution-description").value.trim();

  return {
    "full-name"            : fullName.length > 0,
    "email"                : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    "order-no"             : /^2024\d{6}$/.test(orderNo),
    "product-code"         : /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode),
    "quantity"             : quantity !== "" && Number.isInteger(Number(quantity)) && Number(quantity) > 0,
    "complaints-group"     : checkedComplaints.length > 0,
    "complaint-description": otherComplaintChecked ? complaintDescription.length >= 20 : true,
    "solutions-group"      : selectedSolution !== null,
    "solution-description" : otherSolutionSelected ? solutionDescription.length >= 20 : true
  };
};

const isValid = (validationObj) => {
  return Object.values(validationObj).every(Boolean);
};

const applyBorderColor = (el, valid) => {
  el.style.borderColor = valid ? "green" : "red";
};

const getFieldset = (el) => {
  return el.closest("fieldset");
};

document.getElementById("full-name").addEventListener("change", function (){
  applyBorderColor(this, this.value.trim().length > 0);
});

document.getElementById("email").addEventListener("change", function (){
  applyBorderColor(this, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim()));
});

document.getElementById("order-no").addEventListener("change", function (){
  applyBorderColor(this, /^2024\d{6}$/.test(this.value.trim()));
});

document.getElementById("product-code").addEventListener("change", function (){
  applyBorderColor(this, /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(this.value.trim()));
});

document.getElementById("quantity").addEventListener("change", function (){
  const val = this.value;
  applyBorderColor(this, val !== "" && Number.isInteger(Number(val)) && Number(val) > 0);
});

document.querySelectorAll("#complaints-group input[type=\"checkbox\"]").forEach(cb => {
  cb.addEventListener("change", function (){
    const checked = document.querySelectorAll("#complaints-group input[type=\"checkbox\"]:checked").length > 0;
    applyBorderColor(getFieldset(this), checked);

    const otherChecked = document.getElementById("other-complaint").checked;
    const desc = document.getElementById("complaint-description").value.trim();
    applyBorderColor(document.getElementById("complaint-description"), otherChecked ? desc.length >= 20 : true);
  });
});

document.getElementById("complaint-description").addEventListener("change", function (){
  const otherChecked = document.getElementById("other-complaint").checked;
  applyBorderColor(this, otherChecked ? this.value.trim().length >= 20 : true);
});

document.querySelectorAll("#solutions-group input[type=\"radio\"]").forEach(radio => {
  radio.addEventListener("change", function (){
    const anyChecked = document.querySelector("#solutions-group input[type=\"radio\"]:checked") !== null;
    applyBorderColor(getFieldset(this), anyChecked);

    const otherSelected = document.getElementById("other-solution").checked;
    const desc = document.getElementById("solution-description").value.trim();
    applyBorderColor(document.getElementById("solution-description"), otherSelected ? desc.length >= 20 : true);
  });
});

document.getElementById("solution-description").addEventListener("change", function (){
  const otherSelected = document.getElementById("other-solution").checked;
  applyBorderColor(this, otherSelected ? this.value.trim().length >= 20 : true);
});

form.addEventListener("submit", function (e){
  e.preventDefault();

  const results = validateForm();

  if (isValid(results)) {
    const msg = document.getElementById("message-box");
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
    return;
  }

  const fieldMap = {
    "full-name"            : document.getElementById("full-name"),
    "email"                : document.getElementById("email"),
    "order-no"             : document.getElementById("order-no"),
    "product-code"         : document.getElementById("product-code"),
    "quantity"             : document.getElementById("quantity"),
    "complaints-group"     : document.getElementById("complaints-group"),
    "complaint-description": document.getElementById("complaint-description"),
    "solutions-group"      : document.getElementById("solutions-group"),
    "solution-description" : document.getElementById("solution-description")
  };

  for (const [key, valid] of Object.entries(results)) {
    applyBorderColor(fieldMap[key], valid);
  }

  const msg = document.getElementById("message-box");
  msg.textContent = "Please fix the highlighted fields.";
  msg.style.color = "red";
});