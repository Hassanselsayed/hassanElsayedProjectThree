// document ready
$(document).ready(function () {

    let $selectedWeekday;
    // listening for dropdown menu choice
    $("select").change(function () {
        $selectedWeekday = $(this).children("option:selected").val();
        
        // listening for form submission
        $('form').on('submit', function(e) {
            e.preventDefault();
            const $toDoItem = $('input[type=text]').val().trim();
            
            // validating that the user types before they submit
            if ($toDoItem !== '') {
                $('#' +$selectedWeekday).append(`
                <li>
                    <button id="checkboxButton" class="checkboxButton">
                        <i aria-hidden="true" class='fa fa-square-o'></i>
                        <span class="sr-only">item checkbox</span>
                    </button>
                    <p>${$toDoItem}</p>
                    </button>
                    <button id="remove" class="removeItem" title="remove item from the list">
                    x
                    <span class="sr-only">remove item from the list</span>
                    </button>
                </li>`);
                // emptying the input field after submission
                $('input[type=text]').val('');
                // returning focus to the input after submission
                $('input[type=text]').focus();
            };
        });
    });
    
    // listening for checkbox click
    $('ul').on('click', '#checkboxButton', function() {
        const $checkBox = $(this);
        $checkBox.children('.fa').toggleClass("fa-square-o fa-check-square-o");
        $checkBox.toggleClass("scratchItemOff");
        $checkBox.siblings('p').toggleClass("scratchItemOff");
    });

    // listening for remove button click
    $('ul').on('click', '#remove', function() {
        $(this).parent().remove();
    });
    
});