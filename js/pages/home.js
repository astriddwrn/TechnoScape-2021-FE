const setBlue = (input) => {
  console.log("SetBlue");
  input.classList.remove("set-border-white");
  input.nextElementSibling.classList.remove("set-text-white");
};

const setWhiteWhenFilled = (input) => {
  if (input.value !== "") {
    console.log("SetWhite");
    input.classList.add("set-border-white");
    input.nextElementSibling.classList.add("set-text-white");
  }
};

const validateEmail = (input) => {
  console.log(input);

  const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (regex.test(input.value)) {
    console.log("Ada woi");
    input.classList.remove("is-invalid");
  } else {
    console.log("Kosong woi");
    input.classList.add("is-invalid");
  }
};
