$(document).ready(function() {
    for (let i = 1; i <= 110; i++) {
        $(`#btn${i}`).click(function() {
            $("[id^='paragraph']").not(`#paragraph${i}`).hide("slow");
            $("[id$='c']").not(`#btn${i}c`).hide("slow");
            $("[id^='btn']").not(`#btn${i}c`).show("slow");

            $(`#paragraph${i}`).show("slow");
            $(`#btn${i}c`).show("slow");
            $(`#btn${i}`).hide("slow");
        });

        $(`#btn${i}c`).click(function() {
            $(`#paragraph${i}`).hide("slow");
            $(`#btn${i}c`).hide("slow");
            $(`#btn${i}`).show("slow");
        });
    }
});