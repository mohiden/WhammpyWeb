﻿var dataTable;
$(document).ready(function () {
    dataTable = $('#myTable').DataTable({
        "ajax": {
            "url": "/api/menuitem",
            "dataSrc": "value.data"
        },
        "columns": [
            { "data": "name", "width": "25%" },
            { "data": "price", "width": "25%" },
            { "data": "category.name", "width": "25%" },
            { "data": "foodType.name", "width": "25%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="btn-group"><a href="/Admin/MenuItems/Upsert?id=${data}" class="btn btn-success text-white mx-2"><i class="bi bi-pencil-square"></i></a>
<a onClick=Delete('/api/menuitem/${data}') class="btn btn-danger text-white"><i class="bi bi-trash-fill"></i></a>
</div>`;
                },
                //"width": "25%"
            }
        ],
        "width": "100%"
    });
});


function Delete(url) {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: "DELETE",
                success: function (data) {
                    if (data.value.success) {
                        dataTable.ajax.reload();
                        //success notification
                        toastr.success(data.value.message);
                    } else {
                        //faliure notification
                        toastr.error(data.value.message);
                    }

                }

            })
            //Swal.fire(
            //    'Deleted!',
            //    'Your file has been deleted.',
            //    'success'
            //)
        }
    })
}