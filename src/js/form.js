import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initForm() {
    const nameEl = document.querySelector("#name"),
        emailEl = document.querySelector("#email"),
        companyEl = document.querySelector("#company"),
        titleEl = document.querySelector("#title"),
        messageEl = document.querySelector("#message"),
        form = document.querySelector("#js-form");

    gsap.to(form, { duration: 0.6, y: 0, autoAlpha: 1 }, "-=0.8");

    const checkName = () => {
        let valid = false;

        const min = 2,
            max = 25;

        const name = nameEl.value.trim();

        if (!isRequired(name)) {
            showError(nameEl, "This field is required");
        } else if (!isBetween(name.length, min, max)) {
            showError(nameEl, `Must be between ${min} and ${max} characters.`);
        } else {
            showSuccess(nameEl);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;

        const email = emailEl.value.trim();

        if (!isRequired(email)) {
            showError(emailEl, "This field is required.");
        } else if (!isEmailValid(email)) {
            showError(emailEl, "Email is not valid.");
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    const checkCompany = () => {
        let valid = false;

        const min = 2,
            max = 25;

        const company = companyEl.value.trim();

        if (!isRequired(company)) {
            showError(companyEl, "This field is required");
        } else if (!isBetween(company.length, min, max)) {
            showError(
                companyEl,
                `Must be between ${min} and ${max} characters.`
            );
        } else {
            showSuccess(companyEl);
            valid = true;
        }
        return valid;
    };

    const checkTitle = () => {
        let valid = false;

        const min = 2,
            max = 25;

        const title = titleEl.value.trim();

        if (!isRequired(title)) {
            showError(titleEl, "This field is required");
        } else if (!isBetween(title.length, min, max)) {
            showError(titleEl, `Must be between ${min} and ${max} characters.`);
        } else {
            showSuccess(titleEl);
            valid = true;
        }
        return valid;
    };

    const checkMessage = () => {
        let valid = false;

        const min = 2,
            max = 25;

        const message = messageEl.value.trim();

        if (!isRequired(message)) {
            showError(messageEl, "This field is required");
        } else if (!isBetween(message.length, min, max)) {
            showError(
                messageEl,
                `Must be between ${min} and ${max} characters.`
            );
        } else {
            showSuccess(messageEl);
            valid = true;
        }
        return valid;
    };

    const isEmailValid = (email) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isRequired = (value) => (value === "" ? false : true);
    const isBetween = (length, min, max) =>
        length < min || length > max ? false : true;

    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove("success");
        formField.classList.add("error");

        // show the error message
        const error = formField.querySelector("small");
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove("error");
        formField.classList.add("success");

        // hide the error message
        const error = formField.querySelector("small");
        error.textContent = "";
    };

    // bind events
    form.addEventListener("submit", function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isNameValid = checkName(),
            isEmailValid = checkEmail(),
            isCompanyValid = checkCompany(),
            isTitleValid = checkTitle(),
            isMessageValid = checkMessage();

        let isFormValid =
            isNameValid &&
            isEmailValid &&
            isCompanyValid &&
            isTitleValid &&
            isMessageValid;

        // submit to the server if the form is valid
        if (isFormValid) {
        }
    });

    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };

    form.addEventListener(
        "input",
        debounce(function (e) {
            switch (e.target.id) {
                case "name":
                    checkName();
                    break;
                case "email":
                    checkEmail();
                    break;
                case "company":
                    checkCompany();
                    break;
                case "title":
                    checkTitle();
                    break;
                case "message":
                    checkMessage();
                    break;
            }
        })
    );
}
