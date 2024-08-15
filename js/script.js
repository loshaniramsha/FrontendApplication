
$('#save-btn').click(function () {
    console.log("save button clicked");

    let postId = $('#id').val();
    let postTitle = $("#tittle").val();
    let postText = $("#text").val();
    let postCategory = $("#category").val();

    console.log(postId, postTitle, postText, postCategory);

    $.ajax({
        url: "http://localhost:8080/blog/savePost",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "id": postId,
            "title": postTitle,
            "text": postText,
            "category": postCategory
        }),
        success: function (result) {
            console.log(result);
            alert('Data saved successfully');
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('Error saving data');
        }
    });
});



$('#update-btn').click(function () {
    console.log("update button clicked");

    let postId = $('#id').val();
    let postTitle = $("#tittle").val();
    let postText = $("#text").val();
    let postCategory = $("#category").val();

    console.log(postId, postTitle, postText, postCategory);

    $.ajax({
        url: "http://localhost:8080/blog/updatePost",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "id": postId,
            "title": postTitle,
            "text": postText,
            "category": postCategory
        }),
        success: function (result) {
            console.log(result);
            alert('Data updated successfully');
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('Error updating data');
        }
    });
});

$('#delete-btn').click(function () {
    console.log("delete button clicked");

    let postId = $('#id').val();

    $.ajax({
        url: "http://localhost:8080/blog/deletePost/" + postId,
        method: "DELETE",
        success: function (result) {
            console.log(result);
            alert('Data deleted successfully');
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('Error deleting data');
        }
    });
});

$('#all-btn').click(function () {
    console.log("All Button Click");

    $.ajax({
        url: "http://localhost:8080/blog/getAllPost",
        method: "GET",
        success: function (result) {
            console.log(result);
            loadTable(result);
            alert('Data fetched successfully');
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('Error fetching data');
        }
    });
});

function loadTable(posts) {
    let tbody = $('.table tbody');
    tbody.empty(); // Clear existing data

    posts.forEach(post => {
        let row = `<tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.category}</td>
                    <td>${post.text}</td>
                </tr>`;
        tbody.append(row);
    });
}

