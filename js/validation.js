window.onload = function () {
    function e(e) {
        return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0), e
            .preventDefault(), !1
    }
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault()
    }, !1), document.addEventListener("keydown", function (t) {
        t.ctrlKey && t.shiftKey && 73 == t.keyCode && e(t), t.ctrlKey && t.shiftKey && 74 == t
            .keyCode && e(t), 83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t
                .ctrlKey) && e(t), t.ctrlKey && 85 == t.keyCode && e(t), 123 == event.keyCode && e(
                t)
    }, !1)
}

function ValidateCode() {
    const code = document.querySelector("#couponCode").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    console.log(dd, mm)
    console.log(code)
    if (dd < 18 && mm === "07") {
        if (code === "LY100OFF") {
            const enrolBtn = document.querySelector("#payLinkWeb");
            enrolBtn.setAttribute("href", "https://rzp.io/l/hoAI0KL");
        } else {
            const enrolBtn = document.querySelector("#payLinkWeb");
            enrolBtn.setAttribute("href", "https://rzp.io/l/cTj2on0");
        }
    } else {
        alert("The coupon code period has expired.")
        const enrolBtn = document.querySelector("#payLinkWeb");
        enrolBtn.setAttribute("href", "https://rzp.io/l/cTj2on0");
    }
}