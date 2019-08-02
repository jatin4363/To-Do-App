$(() => {
    const addbtn = $("#add-btn")
    let todos = $("#todos")
    // const close = $(".close")

    addbtn.click(() => {
        let task = $("#comment").val()
        if (task === "") {
            alert("Task cannot be Empty!")
        }
        else {
            todos.append(`<li class="list-group-item">${task}<span class="close">&times;</span></li>`)
            $("#comment").val("")
        }
    })

    // close.click((event) => {
    //     console.log("button.clicked");
    //     $(event.target).parent().remove();
    // })

    $(function () {
        $('#todos').on('click', 'span', function () {
            $(this).parent().remove();
            // return false;
        });
    });
})